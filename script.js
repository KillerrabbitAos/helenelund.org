var today = new Date();
var dd = today.getDate();
var ww = today.getDay();
var mm = today.getMonth();
var yyyy = today.getFullYear();
console.log("document.cookie")
if document.cookie{
    console.log("e");
}
else {
    document.cookie = 0;
}
function createCookie(value) {
    var expiration_date = new Date();
    var cookie_string = '';
    expiration_date.setFullYear(expiration_date.getFullYear() + 1);

    cookie_string = "cookieValue=" + "orm " + (value) + " orm" + "; expires=" + expiration_date.toUTCString();
    
    document.cookie = cookie_string;
}

function getCookieValue() {
    return (toString(document.cookie.split("orm")[1])).split(" ")[1]
    console.log(document.cookie.split("orm")[1])
}
console.log(getCookieValue())
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
  p.id = "favorite" + klass;
  a.href = pdf; 
  p.appendChild(a)
  document.getElementById("favorites").appendChild(p);
  
  }
  
function updateFavorites() {
  document.getElementById("favorites").innerHTML = ""
  if (getCookieValue() != 0){ 
    listCookie = getCookieValue().split("!")
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
  p.innerHTML = 'Du har inga favoriter än, tryck på "Favorit" för att skapa en.'
  document.getElementById("favorites").appendChild(p)
  console.log("o")
  }


}

function toggleFavorite(pdf, klass) {
  listCookie = getCookieValue().split("!")
  let pattern = new RegExp(klass)

  if (getCookieValue().match(pattern)){
    console.log("same")
    var element = document.getElementById("favorite" + klass)
    document.getElementById("favorites").removeChild(element)
    removeCookie(pattern)
    updateFavorites()
  
  }

  else if (getCookieValue() && getCookieValue() != 0){
    createCookie(getCookieValue() + "!" + pdf + "," + klass);
    console.log("orm1")
    createShortcut(pdf, klass)
  }
  else{
    createCookie(pdf + "," + klass);
    console.log("orm2")
    console.log(pdf + klass + "e")
    console.log(document.cookie)
    createShortcut(pdf, klass)
    document.getElementById("favorites").removeChild(document.getElementById("ingaFavoriter"))
  }
    
  
    }
  
    function removeCookie(pattern){
      console.log(pattern)
      listCookie = getCookieValue().split("!")
      lastCookie = getCookieValue()
      createCookie("")
      console.log(document.cookie + "e")
      for (let x of listCookie){
        console.log(document.cookie)
        console.log(x)
        y = x.split(",")
        if (y[1].match(pattern)){
          console.log("same")
          
        }
   
        else{
          document.cookie = y[0] + "," + y[1];
          console.log("orm2")
          
          }
        }
      
      }
  function clearFavorites(p){
    createCookie(0)
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


