var today = new Date();
var dd = today.getDate();
var ww = today.getDay();
var mm = today.getMonth();
var yyyy = today.getFullYear();

let militaryTime = new Date().getHours() * 100 + new Date().getMinutes();
console.log(militaryTime);

var month = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
var day = ["e", "MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];


function displayLesson(klass) {
  if (klass == "2A"){
    if (day[ww] == "MONDAY"){
          if (militaryTime > 0800 && militaryTime < 0920){
              return("Svenska");
          } else if (militaryTime > 0920 && militaryTime < 0940){
              return("Rast");
          } else if (militaryTime > 0940 && militaryTime < 1055){
             return("Matematik");
          } else if (militaryTime > 1055 && militaryTime < 1125){
            return("Lunch");
          } else if (militaryTime > 1125 && militaryTime < 1205){
            return("Lunchrast");
          } else if (militaryTime >1205 && militaryTime < 1325){
            return("Övrigt/Studievägledning");
          } else if (militaryTime >1325 && militaryTime < 1330){
            return("Svenska");
          }
          else{
            return("Klassen har slutat. Börjar klockan 8:00")
          }
        }
          if (day[ww] == "TUESDAY"){
            if (militaryTime > 0800 && militaryTime < 0900){
                return("Naturorienterande ämnen (NO)");
            } else if (militaryTime > 0900 && militaryTime < 0920){
                return("Matematik");
            } else if (militaryTime > 0920 && militaryTime < 0940){
               return("Rast");
            } else if (militaryTime > 0940 && militaryTime < 1055){
              return("Svenska");
            } else if (militaryTime > 1055 && militaryTime < 1125){
              return("Lunch");
            } else if (militaryTime > 1125 && militaryTime < 1205){
              return("Lunchrast");
            } else if (militaryTime > 1205 && militaryTime < 1255){
              return("Samhällsorienterande ämnen(SO)");
            } else if (militaryTime > 1255 && militaryTime < 1340){
              return("Matematik");
            } 
            else{
              return("Klassen har slutat. Börjar klockan 8:00")
            } 
        
          }
          if (day[ww] == "WEDNESDAY"){
            if (militaryTime > 0800 && militaryTime < 0900){
                return("Blockerad tid elever");
            } else if (militaryTime > 0900 && militaryTime < 0910){
                return("Rast");
            } else if (militaryTime > 0910 && militaryTime < 0920){
               return("Svenska");
            } else if (militaryTime > 0920 && militaryTime < 1000){
              return("Idrott och hälsa");
            } else if (militaryTime > 1000 && militaryTime < 1010){
              return("Rast");
            } else if (militaryTime > 1010 && militaryTime < 1040){
              return("Engelska");
            } else if (militaryTime > 1040 && militaryTime < 1055){
              return("Svenska");
            } else if (militaryTime > 1055 && militaryTime < 1125){
              return("Lunch");
            } else if (militaryTime > 1125 && militaryTime < 1205){
              return("Lunchrast");
            } else if (militaryTime > 1205 && militaryTime < 1245){
              return("Mentorstid/Olweus");
            } else if (militaryTime > 1245 && militaryTime < 1315){
              return("Bild");
            } else if (militaryTime > 1315 && militaryTime < 1340){
              return("Svenska");
            } 
            else{
              return("Klassen har slutat. Börjar klockan 8:00")
            } 
        }
        if (day[ww] == "THURSDAY"){
          if (militaryTime > 0800 && militaryTime < 0900){
              return("Matematik");
          } else if (militaryTime > 0900 && militaryTime < 0920){
              return("Rast");
          } else if (militaryTime > 0920 && militaryTime < 0940){
             return("Samhällsorienterande ämnen(SO)");
          } else if (militaryTime > 0940 && militaryTime < 1055){
            return("Matematik");
          } else if (militaryTime > 1055 && militaryTime < 1125){
            return("Lunch");
          } else if (militaryTime > 1125 && militaryTime < 1205){
            return("Lunchrast");
          } else if (militaryTime > 1205 && militaryTime < 1310){
            return("Svenska");
          } else if (militaryTime > 1310 && militaryTime < 1320){
            return("Rast");
          } else if (militaryTime > 1320 && militaryTime < 1400){
            return("Idrott och hälsa");
          } 
          else{
            return("Klassen har slutat. Börjar klockan 8:00")
          } 
      }  
    if (day[ww] == "FRIDAY"){
      if (militaryTime > 0800 && militaryTime < 0920){
          return("Svenska");
      } else if (militaryTime > 0920 && militaryTime < 0940){
          return("Rast");
      } else if (militaryTime > 0940 && militaryTime < 1040){
         return("Naturorienterade ämnen");
      } else if (militaryTime > 1040 && militaryTime < 1055){
        return("Svenska");
      } else if (militaryTime > 1055 && militaryTime < 1125){
        return("Lunch");
      } else if (militaryTime > 1125 && militaryTime < 1205){
        return("Lunchrast");
      } else if (militaryTime > 1205 && militaryTime < 1245){
        return("Musik/Matematik");
      } else if (militaryTime > 1245 && militaryTime < 1250){
        return("Rast");
      } else if (militaryTime > 1250 && militaryTime < 1330){
        return("MAtematik/musik");
      } else if (militaryTime > 1330 && militaryTime < 1340){
        return("Svenska");
      } 
      else{
        return("Klassen har slutat. Börjar klockan 8:00")
      } 
    }
else{
  return("Helg, börjar igen på måndag klockan 8:00")
}

}    

}

