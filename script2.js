document.getElementById("favouriteStatus").textContent = "Dina favoriter:";


function makeFavourite(className) {
    var favouriteStatus = document.getElementById("favouriteStatus");
    var favOne = document.getElementById("favOne");
    var favTwo = document.getElementById("favTwo");
    var favThree = document.getElementById("favThree");
    var favFour = document.getElementById("favFour");
    var favFive = document.getElementById("favFive");

    var classDiv = document.getElementsByClassName(className)[0];
    var img = classDiv.getElementsByTagName("img")[0];
    var filePath = "Pdf/Schema.pdf";

    if (img.src.includes("star2.png")) {
      if (favOne.innerHTML === "") {
        favOne.innerHTML = (className);
      } else if (favTwo.innerHTML === "") {
        favTwo.innerHTML = className;
      } else if (favThree.innerHTML === "") {
        favThree.innerHTML = className;
      } else if (favFour.innerHTML === "") {
        favFour.innerHTML = className;
      } else if (favFive.innerHTML === "") {
        favFive.innerHTML = className;
      } else {
        favouriteStatus.innerHTML = "Du har redan fem favoriter!";
        return;
      }

      img.src = "imgs/star1.png";
    } else {
      if (favOne.innerHTML === className) {
        favOne.innerHTML = "";
      } else if (favTwo.innerHTML === className) {
        favTwo.innerHTML = "";
      } else if (favThree.innerHTML === className) {
        favThree.innerHTML = "";
      } else if (favFour.innerHTML === className) {
        favFour.innerHTML = "";
      } else if (favFive.innerHTML === className) {
        favFive.innerHTML = "";
      }

      img.src = "imgs/star2.png";
    }

    favouriteStatus.innerHTML = "Dina favoriter:";
  }