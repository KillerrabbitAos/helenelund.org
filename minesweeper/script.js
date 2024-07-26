const K_TRUE = "true";
const K_FALSE = "false";

var oImgFace;	//smile face
var oLeftBox;	//box that display the rest count of mine
var oRightBox;	//box that display the used time
var row_count,col_count;
var mine_count;
var time_count = 0;	//time used
var rest_mine;	//remaining mines
var timer_id;
var is_begin = false;	//is game started?
var is_end = false;	//is game ended?
var is_first_click = false; //is first block opened
var oMainFrame;	//game main frame

//initialize the mine area
function InitMineArea(row,col,mine_num,mine_index)
{
	var accumulate = row * col;
	var mine_array = new Array(accumulate);
	var mine_pos = new Array(accumulate);
	var i,j,index;
	var k,l,temp;
	var cur = 0;	//curent pos

	for(i=0;i<accumulate;i++)
	{
		//init to self index
		mine_pos[i] = i;
	}

	//generate the random mine area
	for(i=0;i< (2 * accumulate);i++)
	{
		//generate 2 positions that between 0 and accumulate
		k = Math.round(Math.random() * accumulate);
		l = Math.round(Math.random() * accumulate);
		//exchange the 2 positions
		temp = mine_pos[k];
		mine_pos[k] = mine_pos[l];
		mine_pos[l] = temp;
	}

	//init the mine_array to default(nothing)
	for(i=0;i<row;i++)
	{
		for(j=0;j<col;j++)
		{
			index = col * i + j;
			mine_array[index] = 0;	//default is nothing
		}
	}
	
	//if first click is a mine, regenerate the mine area value
	//put the first click index to the end of random array
	if(mine_index)
	{
		for(i=0;i<mine_num;i++)
		{
			if(mine_pos[i] === mine_index)
			{
				var cur_pos = mine_pos[i];
				mine_pos[i] = mine_pos[accumulate];
				mine_pos[accumulate] = cur_pos;
				break;
			}
		}
	}

	//set the mine's position
	for(i=0;i<mine_num;i++)
	{
		//mine's pos is define in the front (mine_num) indexes of mine_pos(array)
		mine_array[mine_pos[i]] = 9;
	}

	//(i-1,j-1) (i-1,j) (i-1,j+1)
	//(i,j-1)   (i,j)	(i,j+1)
	//(i+1,j-1) (i+1,j) (i+1,j+1)
	//generate the number beside a mine
	for(i=0;i<row;i++)
	{
		for(j=0;j<col;j++)
		{
			//(i-1,j-1) (i-1,j) (i-1,j+1)
			//(i,j-1)   (i,j)	(i,j+1)
			//(i+1,j-1) (i+1,j) (i+1,j+1)			
			index = col * i + j;
			//when ever there is a mine;
			if(mine_array[index] === 9)
			{
				//the row (i) 
				//(i,j-1)
				if((j-1) >= 0)
				{
					index = col * i + j - 1;
					if(mine_array[index] != 9) mine_array[index]++;
				}
				//(i,j+1)
				if((j+1) < col)
				{
					index = col * i + j + 1;
					if(mine_array[index] != 9) mine_array[index]++;
				}

				//the row (i-1)
				if((i-1) >= 0)
				{
					//(i-1,j)
					index = col * (i - 1) + j;
					if(mine_array[index] != 9) mine_array[index]++;
					//(i-1,j-1)
					if((j-1) >= 0)
					{
						index = col * (i - 1) + j - 1;
						if(mine_array[index] != 9) mine_array[index]++;
					}
					//(i-1,j+1)
					if((j+1) < col)
					{
						index = col * (i - 1) + j + 1;
						if(mine_array[index] != 9) mine_array[index]++;
					}
				}

				//the row (i+1)
				if((i+1) < row)
				{
					//(i+1,j)
					index = col * (i + 1) + j;
					if(mine_array[index] != 9) mine_array[index]++;
					//(i+1,j-1)
					if((j-1) >= 0)
					{
						index = col * (i+1) + j - 1;
						if(mine_array[index] != 9) mine_array[index]++;
					}
					//(i+1,j+1)
					if((j+1) < col)
					{
						index = col * (i+1) + j + 1;
						if(mine_array[index] != 9) mine_array[index]++;
					}
				}
			}
		}
	}

	return mine_array;
}

//Refresh the main frame and restart the game
function RefreshMainFrame()
{
	is_begin = false;
	is_end = false;
	time_count = 0;
	rest_mine = mine_count;
	is_first_click = false;
	window.clearInterval(timer_id);
	var oldFrame = oMainFrame;
	oMainFrame = new MainFrame(row_count,col_count,mine_count);
	document.getElementById("playground").replaceChild(oMainFrame, oldFrame);
}

//Smile face button
function FaceButton()
{
	var oButtonContainer = document.createElement("div");
	var oButtonSelf = document.createElement("div");
	oButtonContainer.className = "container_border";
	oButtonContainer.style.width = "30px";
	oButtonSelf.className = "img_button_up";
	oButtonSelf.style.width = "24px";
	oButtonSelf.style.height = "24px";
	//set whether the button is paused
	oButtonSelf.setAttribute("pushed", false);

	oImgFace = document.createElement("img");
	oImgFace.border = 0;
	oImgFace.src = "images/smile.gif";
	oImgFace.style.padding = "0px";
	oImgFace.style.margin = "2px 0 0 0px";
	
	with(oButtonSelf)
	{
		onmousedown = function()
		{
			oButtonSelf.className = "img_button_down";
			oButtonSelf.setAttribute("pushed", true);
		}

		onmouseout = function()
		{
			if(oButtonSelf.getAttribute("pushed") === K_TRUE)
			{
				oButtonSelf.className = "img_button_up";
				oButtonSelf.setAttribute("pushed", false);
			}
		}

		onmouseup = function()
		{
			//if the button hasn't been pushed, then onmouseup is disabled
			if(oButtonSelf.getAttribute("pushed") === K_FALSE)
			{
				return false;
			}
			oButtonSelf.className = "img_button_up";
			oButtonSelf.setAttribute("pushed", false);
			RefreshMainFrame();
		}
	}

	oButtonSelf.appendChild(oImgFace);
	oButtonContainer.appendChild(oButtonSelf);

	return oButtonContainer;
}

//Expand the main frame after game over
function ExpandAll()
{
	var i;
	var oMine,oBomb,oError;
	var accumulate = row_count * col_count;
	for(i=0;i<accumulate;i++)
	{
		oMine = document.getElementById("mine_" + i);
		if(oMine.getAttribute("expanded") === K_FALSE)
		{
			switch(parseInt(oMine.getAttribute("mine_value"), 10))
			{
				/*
				//expand the block that doesn't have a mine
				case 0:oMine.className = "mine_down";oMine.innerText = "";oMine.setAttribute("expanded",true);break;
				case 1:oMine.className = "mine_down_1";oMine.innerText = "1";oMine.setAttribute("expanded",true);break;
				case 2:oMine.className = "mine_down_2";oMine.innerText = "2";oMine.setAttribute("expanded",true);break;
				case 3:oMine.className = "mine_down_3";oMine.innerText = "3";oMine.setAttribute("expanded",true);break;
				case 4:oMine.className = "mine_down_4";oMine.innerText = "4";oMine.setAttribute("expanded",true);break;
				case 5:oMine.className = "mine_down_5";oMine.innerText = "5";oMine.setAttribute("expanded",true);break;
				case 6:oMine.className = "mine_down_6";oMine.innerText = "6";oMine.setAttribute("expanded",true);break;
				case 7:oMine.className = "mine_down_7";oMine.innerText = "7";oMine.setAttribute("expanded",true);break;
				case 8:oMine.className = "mine_down_8";oMine.innerText = "8";oMine.setAttribute("expanded",true);break;
				*/
				case 9:
					if(oMine.getAttribute("marked") === K_TRUE)
					{
						//keep the flag if tagged correctly
						oMine.className = "mine_down_bomb";
						break;
					}
					//else show a mine flag
					if(oMine.hasChildNodes())
					{
						oMine.removeChild(oMine.firstChild);
					}					
					oMine.className = "mine_down_bomb";
					oBomb = document.createElement("img");
					oBomb.style.width = "15px";
					oBomb.style.height = "15px";
					oBomb.style.padding = "0px";
					oBomb.style.margin = "0px";
					oBomb.src = "images/bomb.gif";
					oMine.appendChild(oBomb);
					oMine.setAttribute("expanded",true);
					break;
			}
			//if flag is wrong, then show error flag
			if(oMine.getAttribute("marked") === K_TRUE && oMine.getAttribute("mine_value") != "9")
			{	
				if(oMine.hasChildNodes())
				{
					oMine.removeChild(oMine.firstChild);
				}
				oMine.className = "mine_down_bomb";
				oMine.innerText = "";
				oError = document.createElement("img");
				oError.style.width = "15px";
				oError.style.height = "15px";
				oError.style.padding = "0px";
				oError.style.margin = "0px";
				oError.src = "images/error.gif";
				oMine.appendChild(oError);
				oMine.setAttribute("expanded",true);
			}
		}
	}
}

//Game over
function GameOver(result)
{
	switch(result)
	{
		//success
		case 0:
			oImgFace.src = "images/win.gif";
			alert("Perfekt! Du har rensat " + mine_count + " minor på bara  " + oRightBox.innerText + " sekunder!");
			window.clearInterval(timer_id)
			break;
		//failure
		case 1:
			ExpandAll();
			oImgFace.src = "images/blast.gif";
			alert("Du förlorade! Försök igen");
			window.clearInterval(timer_id)
			//RefreshMainFrame();
			break;
		//timeout
		case 2:
			alert("Du tog för lång tid på dig! Du förlorade. Försök igen!");
			oImgFace.src = "images/blast.gif";
			window.clearInterval(timer_id)
			//RefreshMainFrame();
			break;
	}
	is_begin = false;	//get ready to restart
	is_end = true;	//it's over
}

//Expand the relative blocks when click on a empty block
function ExpandMineArea(source)
{
	var i,j;
	j = source % col_count;
	i = Math.round((source-j) / col_count); 
	var index;
	var oMine = document.getElementById("mine_" + source);
	var temp_value;

	//don't expand blocks that already set the "mine" or "guess" flag
	if(oMine.getAttribute("marked") === K_TRUE || oMine.getAttribute("expanded") === K_TRUE || oMine.getAttribute("detected") === K_TRUE)
	{
		return false;
	}

	temp_value = parseInt(oMine.getAttribute("mine_value"), 10);
	switch (temp_value)
	{
		case 0:
		{
			oMine.className = "mine_down";
			expanded = oMine.getAttribute("expanded");
			if(expanded === K_TRUE)
			{
				return;
			}
			oMine.setAttribute("expanded",true);
			//(i-1,j-1) (i-1,j) (i-1,j+1)
			//(i,j-1)   (i,j)	(i,j+1)
			//(i+1,j-1) (i+1,j) (i+1,j+1)
			
			//whenever there is a spacing;

			//the row (i) 
			//(i,j-1)
			if((j-1) >= 0)
			{
				index = col_count * i + j - 1;
				ExpandMineArea(index);
			}
			//(i,j+1)
			if((j+1) < col_count)
			{
				index = col_count * i + j + 1;
				ExpandMineArea(index);
			}

			//the row (i-1)
			if((i-1) >= 0)
			{
				//(i-1,j)
				index = col_count * (i - 1) + j;
				ExpandMineArea(index);
				//(i-1,j-1)
				if((j-1) >= 0)
				{
					index = col_count * (i - 1) + j - 1;
					ExpandMineArea(index);
				}
				//(i-1,j+1)
				if((j+1) < col_count)
				{
					index = col_count * (i - 1) + j + 1;
					ExpandMineArea(index);
				}
			}

			//the row (i+1)
			if((i+1) < row_count)
			{
				//(i+1,j)
				index = col_count * (i + 1) + j;
				ExpandMineArea(index);
				//(i+1,j-1)
				if((j-1) >= 0)
				{
					index = col_count * (i+1) + j - 1;
					ExpandMineArea(index);
				}
				//(i+1,j+1)
				if((j+1) < col_count)
				{
					index = col_count * (i+1) + j + 1;
					ExpandMineArea(index);
				}
			}
			break;
		}
		case 1:oMine.className = "mine_down_1";oMine.innerText = "1";oMine.setAttribute("expanded",true);break;
		case 2:oMine.className = "mine_down_2";oMine.innerText = "2";oMine.setAttribute("expanded",true);break;
		case 3:oMine.className = "mine_down_3";oMine.innerText = "3";oMine.setAttribute("expanded",true);break;
		case 4:oMine.className = "mine_down_4";oMine.innerText = "4";oMine.setAttribute("expanded",true);break;
		case 5:oMine.className = "mine_down_5";oMine.innerText = "5";oMine.setAttribute("expanded",true);break;
		case 6:oMine.className = "mine_down_6";oMine.innerText = "6";oMine.setAttribute("expanded",true);break;
		case 7:oMine.className = "mine_down_7";oMine.innerText = "7";oMine.setAttribute("expanded",true);break;
		case 8:oMine.className = "mine_down_8";oMine.innerText = "8";oMine.setAttribute("expanded",true);break;
		//bomb blast
		case 9:break;	
	}
	return;
}

//Check whether the game finished
function CheckGameStatus()
{
	var i;
	var oMine;
	var is_win = false;
	//Condition of success:
	//1. All blocks that not a mine is opened 
	//2. All mines have been tagged correctly
	for(i=0;i<row_count * col_count;i++)
	{
		oMine = document.getElementById("mine_" + i);
		if(oMine.getAttribute("mine_value") === "9")
		{
			if(oMine.getAttribute("marked") === K_FALSE)
			{
				is_win = false;
				break;
			}
			else
			{
				is_win = true;
			}
		}
		else
		{
			if(oMine.getAttribute("expanded") === K_FALSE)
			{
				is_win = false;
				break;
			}
			else
			{
				is_win = true;
			}
		}
	}

	if(is_win)
	{
		GameOver(0);
	}
}

//Mine object
function MineButton(mine_value, mine_index) {
    var oMine = document.createElement("div");
    var temp_value; // value under current block
    var oBomb, oFlag; // object of "mine" and "mine flag"
    var source; // click source
    var expanded, marked, detected; // expanded, marked as mine, guess as a mine
    var touchTimer; // timer for detecting long touch

    oMine.id = "mine_" + mine_index;
    oMine.className = "mine_up";
    oMine.style.width = "18px";
    oMine.style.height = "18px";
    oMine.setAttribute("mine_value", mine_value);
    oMine.setAttribute("mine_index", mine_index);

    // set whether it is marked as a mine
    oMine.setAttribute("marked", false);

    // if this is a mine, then set whether it is expanded as exploded 
    oMine.setAttribute("opened", false); 

    // set whether it is expanded
    oMine.setAttribute("expanded", false);

    // set whether mouse button is pushed
    oMine.setAttribute("pushed", false);

    // set whether the guess flag is set
    oMine.setAttribute("detected", false);

    // oMine.innerText = mine_value;

    function markAsMine() {
        if (oMine.getAttribute("expanded") === "false") {
            detected = oMine.getAttribute("detected");
            marked = oMine.getAttribute("marked");
            oMine.className = "mine_up";
            if (marked === "false") {
                if (detected === "true") {
                    oMine.setAttribute("detected", false);
                    oMine.innerText = "";
                    return false;
                }

                // mark as a mine
                oFlag = document.createElement("img");
                oFlag.style.width = "15px";
                oFlag.style.height = "15px";
                oFlag.style.padding = "0px";
                oFlag.style.margin = "0px";
                oFlag.src = "images/flag.gif";
                // avoid recreate
                oMine.appendChild(oFlag);
                oMine.setAttribute("marked", true);

                // update remaining mine count
                rest_mine--;
                oLeftBox.innerText = rest_mine.toString();

                CheckGameStatus();
            } else {
                // set guess flag
                rest_mine++;
                oLeftBox.innerText = rest_mine.toString();
                // clear the mark
                oMine.removeChild(oMine.firstChild);
                oMine.setAttribute("marked", false);

                if (detected === "false") {
                    oMine.setAttribute("detected", true);
                    oMine.innerText = "?";
                    oMine.className = "mine_up";
                } else {
                    oMine.setAttribute("detected", false);
                }
            }
        }
    }

    oMine.onmousedown = function(event) {
        // if game already over then do nothing
        if (is_end)
            return false;
        // left mouse button
        if (event.button === 0) {
            // don't respond to "expanded" and "marked" case
            if (this.getAttribute("marked") === "true" || this.getAttribute("expanded") === "true") {
                return false;
            }
            this.setAttribute("pushed", true);
            this.className = "mine_down";
        }
        // right mouse button
        if (event.button === 2) {
            markAsMine();
        }
    }

    oMine.ontouchstart = function(event) {
        // if game already over then do nothing
        if (is_end)
            return false;

        touchTimer = setTimeout(function() {
            markAsMine();
        }, 500); // Long press duration (500ms)
    }

    oMine.ontouchend = function(event) {
        clearTimeout(touchTimer);
    }

    oMine.onmouseup = function(event) {
        if (is_end)
            return false;

        if (this.getAttribute("pushed") === "true") {
            this.className = "mine_up";
            this.setAttribute("pushed", false);
        }
    }

    oMine.onmouseout = function() {
        if (is_end)
            return false;

        if (this.getAttribute("pushed") === "true") {
            this.className = "mine_up";
            this.setAttribute("pushed", false);
        }
    }

    return oMine;
}

function FunctionBar(mine_num)
{
	var oFunctionBar = document.createElement("div");
	oFunctionBar.className = "function_bar_div";

	var oFunctionPanle = document.createElement("div");
	oFunctionPanle.className = "panle_down_div";

	oLeftBox = document.createElement("div");
	oLeftBox.className = "function_left_div";
	oLeftBox.innerText = mine_num;

	oRightBox = document.createElement("div");
	oRightBox.className = "function_right_div";
	oRightBox.innerText = "0";

	var oMidBox = document.createElement("div");
	oMidBox.className = "function_mid_div";

	var oFaceButton = new FaceButton();
	oMidBox.appendChild(oFaceButton);

	oFunctionPanle.appendChild(oLeftBox);
	oFunctionPanle.appendChild(oRightBox);
	oFunctionPanle.appendChild(oMidBox);
	oFunctionBar.appendChild(oFunctionPanle);

	return oFunctionBar;
}

function MineArea(row,col,mine_num)
{
	var i,j,index;

	var tempTr,tempTd,oMineButton;

	var oMinePanle = document.createElement("div");
	oMinePanle.className = "panle_down_nopadding_div";

	var oMineTable = document.createElement("table");
	oMineTable.className = "mine_area_table";
	
	var temp_array = InitMineArea(row,col,mine_num);

	var oMineTableBody = document.createElement("tbody");

	for(i=0;i<row;i++)
	{
		tempTr = document.createElement("tr");
		for(j=0;j<col;j++)
		{
			tempTd = document.createElement("td");	
			index = i * col + j;

			oMineButton = new MineButton(temp_array[index],index);
			tempTd.appendChild(oMineButton);
			tempTr.appendChild(tempTd);
		}
		oMineTableBody.appendChild(tempTr);
	}

	oMineTable.appendChild(oMineTableBody);
	oMinePanle.appendChild(oMineTable);
	return oMinePanle;
}

//main frame object
function MainFrame(row,col,mine_num)
{	
	//each mine 18px + panle'border 3px + main_container's border 6px;
	var all_width = 24 * col + 6;
	var oMainContainer = document.createElement("div");
	oMainContainer.className = "main_container";
	oMainContainer.style.width = all_width + "px";
	
	var oFunctionBar = new FunctionBar(mine_num);
	oMainContainer.appendChild(oFunctionBar);

	var oMineArea = new MineArea(row,col,mine_num);
	oMainContainer.appendChild(oMineArea);

	return oMainContainer;
}

function AvoidContextMenu() 
{
	event.cancelBubble = true
	event.returnValue = false;

	return false;
}

function AvoidRightClick(e) 
{
	if (window.Event) 
	{
		if (e.which == 2 || e.which == 3)
		return false;
	}
	else
	if (event.button == 2 || event.button == 3)
	{
		event.cancelBubble = true
		event.returnValue = false;
		return false;
	}
}

function DisableContextMenu()
{
	if (window.Event) 
		document.captureEvents(Event.MOUSEUP);
	document.oncontextmenu = AvoidContextMenu; // for IE5+
	document.onmousedown = AvoidRightClick; // for all others
}

//timer function
function CountTime()
{
	time_count++;
	if(time_count > 999)
	{
		//timeout
		GameOver(2);
	}
	else
	{
		oRightBox.innerText = time_count.toString();
	}
}

//start timer
function BeginTimer()
{
	if(is_begin === false)
	{
		timer_id = window.setInterval(CountTime,1000);
		is_begin = true;
	}
}

function startMinesweeper(row,col,mine_num)
{
	//first disable the context event	
	DisableContextMenu();

	row_count = row;
	col_count = col;
	mine_count = mine_num;
	rest_mine = mine_num;
	oMainFrame = new MainFrame(row,col,mine_num);
	document.getElementById("playground").appendChild(oMainFrame);
}