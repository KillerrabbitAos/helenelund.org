var today = new Date();
var dd = today.getDate();
var ww = today.getDay();
var mm = today.getMonth();
var yyyy = today.getFullYear();

var month = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
var day = ["e", "MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];


function displayLesson(klass) {

    if (klass == "1A"){
      if (day[ww] == "MONDAY"){
            if (militaryTime > 0800 && militaryTime < 0920){
                return("Svenska");
            } else if (militaryTime > 0920 && militaryTime < 0940){
                return("Rast");
            } else if (militaryTime > 0940 && militaryTime < 1200){
               return("Matematik");
            }
          } 
       }
  else{
    return("hej");
  }
    }
