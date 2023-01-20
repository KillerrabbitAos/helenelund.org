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
            return("Långrast");
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
            if (militaryTime > 0800 && militaryTime < 0920){
                return("Svenska");
            } else if (militaryTime > 0920 && militaryTime < 0940){
                return("Rast");
            } else if (militaryTime > 0940 && militaryTime < 1040){
               return("Matematik");
            } else if (militaryTime > 1040 && militaryTime < 1110){
              return("Lunch");
            } else if (militaryTime > 1110 && militaryTime < 1150){
              return("Rast");
            } else if (militaryTime > 1040 && militaryTime < 1110){
              return("Lunch");
            }
            else{
              return(militaryTime)
            } 
        }
    }