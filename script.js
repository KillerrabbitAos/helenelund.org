var today = new Date();
var dd = today.getDate();
var ww = today.getDay();
var mm = today.getMonth();
var yyyy = today.getFullYear();

let militaryTime = new Date().getHours() * 100 + new Date().getMinutes();
console.log(militaryTime);
console.log("↑ Den aktuella tiden om du undrar, annars inte.")

function createShortcut(pdf, klass) {
  console.log(listCookie); 
  console.log(document.cookie)
  var p = document.createElement('p');
  var a = document.createElement('a'); 
  var link = document.createTextNode(klass);
  a.appendChild(link); 
  a.href = pdf; 
  p.appendChild(a)
  document.getElementById("favorites").appendChild(p);
  }
  
function updateFavorites() {
  document.cookie = 0
  listCookie = document.cookie.split("!")
  console.log(listCookie)
  if (document.cookie){ 
    for (let x of listCookie){
    y = x.split(",")
    createShortcut(y[0], y[1])
  }
  }
  else{
  var p = document.createElement('p')
  p.innerHTML = "orm"
  document.getElementById("favorites").appendChild(p)
  }


}

function toggleFavorite(pdf, klass) {
  listCookie = document.cookie.split("!")
  let pattern = new RegExp(klass)

  if (document.cookie.match(pattern)){
    console.log("same")
    removeCookie(pattern)
  }

  else if (document.cookie && document.cookie != 0){
    document.cookie = document.cookie + "!" + pdf + "," + klass;
    console.log("orm1")
    createShortcut(pdf, klass)
  }
  else{
    document.cookie = ""
    document.cookie = pdf + "," + klass;
    console.log("orm2")
    createShortcut(pdf, klass)
  }
    
  
    }
  
    function removeCookie(pattern){
      console.log(pattern)
      listCookie = document.cookie.split("!")
      lastCookie = document.cookie
      document.cookie = "0;"
      console.log(document.cookie + "e")
      for (let x of listCookie){
        console.log(document.cookie)
        console.log(x)
        y = x.split(",")
        if (lastCookie.match(pattern)){
          console.log("same")
          
        }
        else if (document.cookie){
          document.cookie = document.cookie + "!" + y[0] + "," + y[1];
          console.log("orm1")
         
        }
        else{
          document.cookie = y[0] + "," + y[1];
          console.log("orm2")
          
          }
        }
      updateFavorites()
      }
  function clearFavorites(p){
    document.cookie = p
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


