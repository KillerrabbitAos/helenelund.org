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
  p.id = "favorite" + klass;
  a.href = pdf; 
  p.appendChild(a)
  document.getElementById("favorites").appendChild(p);
  document.getElementById("favorites").removeChild(document.getElementById("ingaFavoriter"))
  }
  
function updateFavorites() {

  if (document.cookie != 0){ 
    listCookie = document.cookie.split("!")
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
  listCookie = document.cookie.split("!")
  let pattern = new RegExp(klass)

  if (document.cookie.match(pattern)){
    console.log("same")
    var element = document.getElementById("favorite" + klass)
    document.getElementById("favorites").removeChild(element)
    removeCookie(pattern)
    updateFavorites()
  
  }

  else if (document.cookie && document.cookie != 0){
    document.cookie = document.cookie + "!" + pdf + "," + klass;
    console.log("orm1")
    createShortcut(pdf, klass)
  }
  else{
    document.cookie = pdf + "," + klass;
    console.log("orm2")
    console.log(pdf + klass + "e")
    console.log(document.cookie)
    createShortcut(pdf, klass)
  }
    
  
    }
  
    function removeCookie(pattern){
      console.log(pattern)
      listCookie = document.cookie.split("!")
      lastCookie = document.cookie
      document.cookie = "0"
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
    document.cookie = p
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


