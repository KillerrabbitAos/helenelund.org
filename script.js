
function getCookie(){
  return document.cookie.split("=")[1];
}

function createShortcut(pdf, klass) {
  
  var p = document.createElement('p');
  var a = document.createElement('a'); 
  var link = document.createTextNode(klass);
  a.appendChild(link); 
  p.id = "favorite" + klass;
  a.href = pdf; 
  p.appendChild(a)
  document.getElementById("favorites").appendChild(p);
  
  }
  function setCookie(value) { 
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 365 * 86400000;
    now.setTime(expireTime);
    console.log(time)
    document.cookie = 'cookie='+value+';expires='+now.toUTCString()+';path=/';
    console.log(document.cookie);
  }
  
function updateFavorites() {
  document.getElementById("favorites").innerHTML = ""
  if (getCookie() != 0 && document.cookie){ 
    listCookie = getCookie().split("!");
    for (let x of listCookie){
    y = x.split(",")
    createShortcut(y[0], y[1])
    console.log("lapis")
  }
  console.log("lapis2")
  }
  else{
  var p = document.createElement('p')
  p.id = "ingaFavoriter"
  p.innerHTML = "Du har inga favoriter än, tryck på favorite för att skapa en."
  document.getElementById("favorites").appendChild(p)
  console.log("o")
  }


}

function toggleFavorite(pdf, klass) {
  let pattern = new RegExp(klass)

  if (document.cookie.match(pattern)){
    console.log("same")
    var element = document.getElementById("favorite" + klass)
    document.getElementById("favorites").removeChild(element)
    removeCookie(pattern)
    updateFavorites()
  
  }

  else if (getCookie() && getCookie() != 0){
    setCookie(getCookie() + "!" + pdf + "," + klass);
    console.log("orm1")
    createShortcut(pdf, klass)
  }
  else{
    setCookie(pdf + "," + klass);
    console.log("orm2")
    console.log(pdf + klass + "e")
    console.log(document.cookie)
    createShortcut(pdf, klass)
    document.getElementById("favorites").removeChild(document.getElementById("ingaFavoriter"))
  }
    
  
    }
  
    function removeCookie(pattern){
      console.log(pattern)
      listCookie2 = getCookie().split("!")
      lastCookie = getCookie()
      setCookie('0')
      console.log(document.cookie + "e")
      var newCookie = "";
      for (let x of listCookie2){
        console.log(document.cookie)
        console.log(x)
        y = x.split(",")
        if (y[1].match(pattern)){
          console.log("same")
          
        }
   
        else{
          if (newCookie){
          newCookie = (newCookie + "!" + y[0] + "," + y[1]);
          console.log("orm2")
          }
        else{
          newCookie = (y[0] + "," + y[1]);
        }
          }
        }
      setCookie(newCookie)
      
      }
  function clearFavorites(p){
    setCookie(0)
    updateFavorites()
  }

var month = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
var day = [
  "e",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];
function displayLesson(){
  return ""
}


//test