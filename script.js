var today = new Date();
var dd = today.getDate();
var ww = today.getDay();
var mm = today.getMonth();
var yyyy = today.getFullYear();

let militaryTime = new Date().getHours() * 100 + new Date().getMinutes();
console.log(militaryTime);
console.log("↑ Den aktuella tiden om du undrar, annars inte.")

function toggleFavorite(pdf, klass) {
  listCookie = document.cookie.split("!")
  let pattern = new RegExp(klass)

  if (document.cookie.match(pattern)){
    console.log("same")
  }
  else if (document.cookie){
    document.cookie = document.cookie + "!" + pdf + "," + klass;
    console.log("orm1")
    createShortcut = true
  }
  else{
    document.cookie = pdf + "," + klass;
    console.log("orm2")
    createShortcut = true
  }
    if (createShortcut){
    console.log(listCookie) 
    
    var p = document.createElement('p');
    var a = document.createElement('a'); 
    var link = document.createTextNode(klass);
    a.appendChild(link); 
    a.href = pdf; 
    p.appendChild(a)
    document.getElementById("favorites").appendChild(p);
    createShortcut = false
    }
  }

  function clearCookies(){
    document.cookie = 0
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


