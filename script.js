var today = new Date();
var dd = today.getDate();
var ww = today.getDay();
var mm = today.getMonth();
var yyyy = today.getFullYear();
//orm
let militaryTime = new Date().getHours() * 100 + new Date().getMinutes();
console.log(militaryTime);
console.log("↑ Den aktuella tiden om du undrar, annars inte.")

function toggleFavorite(pdf, klass) {
  if (document.cookie){
    document.cookie = document.cookie + "!" + pdf + "," + klass;
    console.log("orm1")
  }
  else{
    document.cookie = pdf + "," + klass;
    console.log("orm2")
  }
  
  listCookie = document.cookie.split("!")
  console.log(listCookie)
    var p = document.createElement('p');
    var a = document.createElement('a'); 
    var link = document.createTextNode(klass);
    a.appendChild(link); 
    a.href = pdf; 
    p.appendChild(a)
    document.getElementById("favorites").appendChild(p);
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

function isplayLesson(klass) {
  if (klass == "1A") {
    if (day[ww] == "MONDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1040) {
        return "Matematik";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Rast";
      } else if (militaryTime > 1150 && militaryTime < 1310) {
        return "Samhällsorienterande ämnen(SO)";
      } else {
        return "Klassen har slutat. Börjar kl 8:00.";
      }
    }

    if (day[ww] == "TUESDAY") {
      if (militaryTime > 0800 && militaryTime < 0840) {
        return "Matematik/Musik";
      } else if (militaryTime > 0840 && militaryTime < 0920) {
        return "Matematik/Musik";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1040) {
        return "Svenska";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1250) {
        return "Matematik";
      } else if (militaryTime > 1250 && militaryTime < 1315) {
        return "Bild";
      } else if (militaryTime > 1315 && militaryTime < 1320) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar kl 8:00.";
      }
    }

    if (day[ww] == "WEDNESDAY") {
        if (militaryTime > 0800 && militaryTime < 0900) {
        return "Blockerad tid elever";
      } else if (militaryTime > 0900 && militaryTime < 0910) {
        return "Rast";
      } else if (militaryTime > 0910 && militaryTime < 1020) {
        return "Naturorienterande ämnen (NO)";
      } else if (militaryTime > 1020 && militaryTime < 1040) {
        return "Svenska";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1230) {
        return "EV";
      } else if (militaryTime > 1230 && militaryTime < 1240) {
        return "Rast";
      } else if (militaryTime > 1240 && militaryTime < 1320) {
        return "Idrott och Hälsa";
      } else {
        return "Klassen har slutat. Börjar kl 8:00.";
      }
    }

    if (day[ww] == "THURSDAY") {
        if (militaryTime > 0800 && militaryTime < 0900) {
        return "Matematik";
      } else if (militaryTime > 0900 && militaryTime < 0920) {
        return "Samhällsorienterande ämnen(SO)";
      } else if (militaryTime > 0920 && militaryTime < 1040) {
        return "Rast";
      } else if (militaryTime > 1040 && militaryTime < 1005) {
        return "Engelska";
      } else if (militaryTime > 1005 && militaryTime < 1040) {
        return "Svenska";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1155) {
        return "Svenska";
      } else if (militaryTime > 1155 && militaryTime < 1200) {
        return "Rast";
      } else if (militaryTime > 1200 && militaryTime < 1240) {
        return "Idrott och Hälsa";
      } else if (militaryTime > 1240 && militaryTime < 1250) {
        return "Rast";
      } else if (militaryTime > 1250 && militaryTime < 1320) {
        return "SVenska";
      } else {
        return "Klassen har slutat. Börjar kl 8:00.";
      }
    }

    if (day[ww] == "FRIDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1020) {
        return "Matematik";
      } else if (militaryTime > 1020 && militaryTime < 1040) {
        return "Svenska";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1230) {
        return "Mentorstid/Olweus";
      } else if (militaryTime > 1230 && militaryTime < 1320) {
        return "EV";
      } else {
        return "Klassen har slutat. Börjar kl 8:00.";
      }
    } else {
      return "Helg, börjar igen på måndag klockan 8:00";
    }
  }
  if (klass == "1B") {
    if (day[ww] == "MONDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1040) {
        return "Matematik";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1310) {
        return "Samhällsorienterande ämnen(SO)O";
      } else {
        return "Klassen har slutat. Börjar kl 8:00.";
      }
    }

    if (day[ww] == "TUESDAY") {
      if (militaryTime > 0800 && militaryTime < 0900) {
        return "Matematik";
      } else if (militaryTime > 0900 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1020) {
        return "Matematik/Musik";
      } else if (militaryTime > 1020 && militaryTime < 1040) {
        return "Svenska";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1215) {
        return "Svenska";
      } else if (militaryTime > 1215 && militaryTime < 1255) {
        return "Musik/Matematik";
      } else if (militaryTime > 1255 && militaryTime < 1320) {
        return "Bild";
      } else {
        return "Klassen har slutat. Börjar kl 8:00.";
      }
    }

    if (day[ww] == "WEDNESDAY") {
      if (militaryTime > 0800 && militaryTime < 0900) {
        return "Blockerad tid elever";
      } else if (militaryTime > 0900 && militaryTime < 0910) {
        return "Rast";
      } else if (militaryTime > 0910 && militaryTime < 1020) {
        return "Naturorienterande ämnen (NO)";
      } else if (militaryTime > 1020 && militaryTime < 1040) {
        return "Svenska";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1155) {
        return "Svenska";
      } else if (militaryTime > 1155 && militaryTime < 1200) {
        return "Rast";
      } else if (militaryTime > 1200 && militaryTime < 1240) {
        return "Idrott och Hälsa";
      } else if (militaryTime > 1240 && militaryTime < 1250) {
        return "Rast";
      } else if (militaryTime > 1250 && militaryTime < 1320) {
        return "EV";
      } else {
        return "Klassen har slutat. Börjar kl 8:00.";
      }
    }

    if (day[ww] == "WEDNESDAY") {
      if (militaryTime > 0800 && militaryTime < 0900) {
        return "Blockerad tid elever";
      } else if (militaryTime > 0900 && militaryTime < 0910) {
        return "Rast";
      } else if (militaryTime > 0910 && militaryTime < 1020) {
        return "Naturorienterande ämnen (NO)";
      } else if (militaryTime > 1020 && militaryTime < 1040) {
        return "Svenska";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1155) {
        return "Svenska";
      } else if (militaryTime > 1155 && militaryTime < 1200) {
        return "Rast";
      } else if (militaryTime > 1200 && militaryTime < 1240) {
        return "Idrott och Hälsa";
      } else if (militaryTime > 1240 && militaryTime < 1250) {
        return "Rast";
      } else if (militaryTime > 1250 && militaryTime < 1320) {
        return "EV";
      } else {
        return "Klassen har slutat. Börjar kl 8:00.";
      }
    }

    if (day[ww] == "THURSDAY") {
      if (militaryTime > 0800 && militaryTime < 0900) {
        return "Matematik";
      } else if (militaryTime > 0900 && militaryTime < 0920) {
        return "Samhällsorienterande ämnen(SO)";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1005) {
        return "Engelska";
      } else if (militaryTime > 1005 && militaryTime < 1040) {
        return "Svenska";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1120) {
        return "Rast";
      } else if (militaryTime > 1120 && militaryTime < 1200) {
        return "Idrott och Hälsa";
      } else if (militaryTime > 1200 && militaryTime < 1210) {
        return "Rast";
      } else if (militaryTime > 1210 && militaryTime < 1320) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar kl 8:00.";
      }
    }

    if (day[ww] == "FRIDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1020) {
        return "Matematik";
      } else if (militaryTime > 1020 && militaryTime < 1040) {
        return "Svenska";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1230) {
        return "Mentorstid/Olweus";
      } else if (militaryTime > 1230 && militaryTime < 1320) {
        return "EV";
      } else if (militaryTime > 1320 && militaryTime < 2359) {
        return "Klassen har slutat. Börjar kl 8:00.";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    } else {
      return "Helg, börjar igen på måndag klockan 8:00";
    }
  }

  if (klass == "1C") {
    if (day[ww] == "MONDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1040) {
        return "Matematik";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1310) {
        return "Samhällsorienterande ämnen(SO)";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "TUESDAY") {
      if (militaryTime > 0800 && militaryTime < 0840) {
        return "Idrott och Hälsa";
      } else if (militaryTime > 0840 && militaryTime < 0850) {
        return "Rast";
      } else if (militaryTime > 0850 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1040) {
        return "Svenska";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1250) {
        return "Matematik";
      } else if (militaryTime > 1250 && militaryTime < 1315) {
        return "Bild";
      } else if (militaryTime > 1315 && militaryTime < 1400) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "WEDNESDAY") {
      if (militaryTime > 0800 && militaryTime < 0900) {
        return "Blockerad tid elever";
      } else if (militaryTime > 0900 && militaryTime < 0910) {
        return "Rast";
      } else if (militaryTime > 0910 && militaryTime < 1020) {
        return "Naturorienterande ämnen (NO)";
      } else if (militaryTime > 1020 && militaryTime < 1040) {
        return "Svenska";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1250) {
        return "Matematik";
      } else if (militaryTime > 1250 && militaryTime < 1315) {
        return "Bild";
      } else if (militaryTime > 1315 && militaryTime < 1400) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "THURSDAY") {
      if (militaryTime > 0800 && militaryTime < 0840) {
        return "Musik/Matematik";
      } else if (militaryTime > 0840 && militaryTime < 0920) {
        return "Matematik/Musik";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1005) {
        return "Engelska";
      } else if (militaryTime > 1005 && militaryTime < 1040) {
        return "Svenska";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1210) {
        return "Samhällsorienterande ämnen(SO)";
      } else if (militaryTime > 1210 && militaryTime < 1250) {
        return "EV";
      } else if (militaryTime > 1250 && militaryTime < 1320) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "FRIDAY") {
      if (militaryTime > 0800 && militaryTime < 0855) {
        return "Svenska";
      } else if (militaryTime > 0855 && militaryTime < 0915) {
        return "Rast";
      } else if (militaryTime > 0915 && militaryTime < 0955) {
        return "Idrott och Hälsa";
      } else if (militaryTime > 0955 && militaryTime < 1000) {
        return "Rast";
      } else if (militaryTime > 1000 && militaryTime < 1040) {
        return "Matematik";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1230) {
        return "Mentorstid/Olweus";
      } else if (militaryTime > 1230 && militaryTime < 1320) {
        return "EV";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    } else {
      return "Helg, börjar igen på måndag klockan 8:00";
    }
  }

  if (klass == "1D") {
    if (day[ww] == "MONDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1040) {
        return "Matematik";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1310) {
        return "Samhällsorienterande ämnen(SO)";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "TUESDAY") {
      if (militaryTime > 0800 && militaryTime < 0830) {
        return "Svenska";
      } else if (militaryTime > 0830 && militaryTime < 0920) {
        return "Idrott och Hälsa";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Svenska";
      } else if (militaryTime > 0940 && militaryTime < 1040) {
        return "Svenska";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1250) {
        return "Matematik";
      } else if (militaryTime > 1250 && militaryTime < 1315) {
        return "Bild";
      } else if (militaryTime > 1315 && militaryTime < 1320) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "WEDNESDAY") {
      if (militaryTime > 0800 && militaryTime < 0900) {
        return "Blockerad tid elever";
      } else if (militaryTime > 0900 && militaryTime < 0910) {
        return "Rast";
      } else if (militaryTime > 0910 && militaryTime < 1020) {
        return "Naturorienterande ämnen (NO)";
      } else if (militaryTime > 1020 && militaryTime < 1040) {
        return "Svenska";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1230) {
        return "Matematik";
      } else if (militaryTime > 1230 && militaryTime < 1310) {
        return "EV";
      } else if (militaryTime > 1310 && militaryTime < 1320) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "THURSDAY") {
      if (militaryTime > 0800 && militaryTime < 0900) {
        return "Matematik";
      } else if (militaryTime > 0900 && militaryTime < 0920) {
        return "Samhällsorienterande ämnen(SO)";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1020) {
        return "Matematik/Musik";
      } else if (militaryTime > 1020 && militaryTime < 1040) {
        return "Svenska";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1155) {
        return "Rast";
      } else if (militaryTime > 1155 && militaryTime < 1235) {
        return "Musik/Matematik";
      } else if (militaryTime > 1235 && militaryTime < 1300) {
        return "Engelska";
      } else if (militaryTime > 1300 && militaryTime < 1320) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "FRIDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 0945) {
        return "Svenska";
      } else if (militaryTime > 0945 && militaryTime < 0955) {
        return "Rast";
      } else if (militaryTime > 0955 && militaryTime < 1035) {
        return "Idrott och Hälsa";
      } else if (militaryTime > 1035 && militaryTime < 1040) {
        return "Rast";
      } else if (militaryTime > 1040 && militaryTime < 1110) {
        return "Lunch";
      } else if (militaryTime > 1110 && militaryTime < 1150) {
        return "Lunchrast";
      } else if (militaryTime > 1150 && militaryTime < 1230) {
        return "Mentorstid/Olweus";
      } else if (militaryTime > 1230 && militaryTime < 1320) {
        return "EV";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    } else {
      return "Helg, börjar igen på måndag klockan 8:00";
    }
  }

  if (klass == "2A") {
    if (day[ww] == "MONDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1055) {
        return "Matematik";
      } else if (militaryTime > 1055 && militaryTime < 1125) {
        return "Lunch";
      } else if (militaryTime > 1125 && militaryTime < 1205) {
        return "Lunchrast";
      } else if (militaryTime > 1205 && militaryTime < 1325) {
        return "Övrigt/Studievägledning";
      } else if (militaryTime > 1325 && militaryTime < 1330) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "TUESDAY") {
      if (militaryTime > 0800 && militaryTime < 0900) {
        return "Naturorienterande ämnen (NO)";
      } else if (militaryTime > 0900 && militaryTime < 0920) {
        return "Matematik";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1055) {
        return "Svenska";
      } else if (militaryTime > 1055 && militaryTime < 1125) {
        return "Lunch";
      } else if (militaryTime > 1125 && militaryTime < 1205) {
        return "Lunchrast";
      } else if (militaryTime > 1205 && militaryTime < 1255) {
        return "Samhällsorienterande ämnen(SO)";
      } else if (militaryTime > 1255 && militaryTime < 1340) {
        return "Matematik";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "WEDNESDAY") {
      if (militaryTime > 0800 && militaryTime < 0900) {
        return "Blockerad tid elever";
      } else if (militaryTime > 0900 && militaryTime < 0910) {
        return "Rast";
      } else if (militaryTime > 0910 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 1000) {
        return "Idrott och hälsa";
      } else if (militaryTime > 1000 && militaryTime < 1010) {
        return "Rast";
      } else if (militaryTime > 1010 && militaryTime < 1040) {
        return "Engelska";
      } else if (militaryTime > 1040 && militaryTime < 1055) {
        return "Svenska";
      } else if (militaryTime > 1055 && militaryTime < 1125) {
        return "Lunch";
      } else if (militaryTime > 1125 && militaryTime < 1205) {
        return "Lunchrast";
      } else if (militaryTime > 1205 && militaryTime < 1245) {
        return "Mentorstid/Olweus";
      } else if (militaryTime > 1245 && militaryTime < 1315) {
        return "Bild";
      } else if (militaryTime > 1315 && militaryTime < 1340) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "THURSDAY") {
      if (militaryTime > 0800 && militaryTime < 0900) {
        return "Matematik";
      } else if (militaryTime > 0900 && militaryTime < 0920) {
        return "Rast";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Samhällsorienterande ämnen(SO)";
      } else if (militaryTime > 0940 && militaryTime < 1055) {
        return "Matematik";
      } else if (militaryTime > 1055 && militaryTime < 1125) {
        return "Lunch";
      } else if (militaryTime > 1125 && militaryTime < 1205) {
        return "Lunchrast";
      } else if (militaryTime > 1205 && militaryTime < 1310) {
        return "Svenska";
      } else if (militaryTime > 1310 && militaryTime < 1320) {
        return "Rast";
      } else if (militaryTime > 1320 && militaryTime < 1400) {
        return "Idrott och hälsa";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "FRIDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1040) {
        return "Naturorienterade ämnen";
      } else if (militaryTime > 1040 && militaryTime < 1055) {
        return "Svenska";
      } else if (militaryTime > 1055 && militaryTime < 1125) {
        return "Lunch";
      } else if (militaryTime > 1125 && militaryTime < 1205) {
        return "Lunchrast";
      } else if (militaryTime > 1205 && militaryTime < 1245) {
        return "Musik/Matematik";
      } else if (militaryTime > 1245 && militaryTime < 1250) {
        return "Rast";
      } else if (militaryTime > 1250 && militaryTime < 1330) {
        return "MAtematik/musik";
      } else if (militaryTime > 1330 && militaryTime < 1340) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    } else {
      return "Helg, börjar igen på måndag klockan 8:00";
    }
  }

  if (klass == "2B") {
    if (day[ww] == "MONDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1055) {
        return "Matematik";
      } else if (militaryTime > 1055 && militaryTime < 1125) {
        return "Lunch";
      } else if (militaryTime > 1125 && militaryTime < 1205) {
        return "Lunchrast";
      } else if (militaryTime > 1205 && militaryTime < 1325) {
        return "Övrigt/Studievägledning";
      } else if (militaryTime > 1325 && militaryTime < 1330) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "TUESDAY") {
      if (militaryTime > 0800 && militaryTime < 0900) {
        return "Naturorienterande ämnen (NO)";
      } else if (militaryTime > 0900 && militaryTime < 0920) {
        return "Matematik";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1055) {
        return "Svenska";
      } else if (militaryTime > 1055 && militaryTime < 1125) {
        return "Lunch";
      } else if (militaryTime > 1125 && militaryTime < 1205) {
        return "Lunchrast";
      } else if (militaryTime > 1205 && militaryTime < 1255) {
        return "Idrott och hälsa";
      } else if (militaryTime > 1255 && militaryTime < 1340) {
        return "Samhällsorienterande ämnen(SO)";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "WEDNESDAY") {
      if (militaryTime > 0800 && militaryTime < 0900) {
        return "Blockerad tid elever";
      } else if (militaryTime > 0900 && militaryTime < 0910) {
        return "Rast";
      } else if (militaryTime > 0910 && militaryTime < 0950) {
        return "Musik/Matematik";
      } else if (militaryTime > 0950 && militaryTime < 1005) {
        return "Rast";
      } else if (militaryTime > 1000 && militaryTime < 1010) {
        return "Musik/Matematik";
      } else if (militaryTime > 1045 && militaryTime < 1055) {
        return "Svenska";
      } else if (militaryTime > 1055 && militaryTime < 1125) {
        return "Lunch";
      } else if (militaryTime > 1125 && militaryTime < 1205) {
        return "Lunchrast";
      } else if (militaryTime > 1205 && militaryTime < 1245) {
        return "Mentorstid/Olweus";
      } else if (militaryTime > 1245 && militaryTime < 1315) {
        return "Bild";
      } else if (militaryTime > 1315 && militaryTime < 1340) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "THURSDAY") {
      if (militaryTime > 0800 && militaryTime < 0900) {
        return "Matematik";
      } else if (militaryTime > 0900 && militaryTime < 0920) {
        return "Rast";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Samhällsorienterande ämnen(SO)";
      } else if (militaryTime > 0940 && militaryTime < 1055) {
        return "Matematik";
      } else if (militaryTime > 1055 && militaryTime < 1125) {
        return "Lunch";
      } else if (militaryTime > 1125 && militaryTime < 1205) {
        return "Lunchrast";
      } else if (militaryTime > 1205 && militaryTime < 1305) {
        return "Svenska";
      } else if (militaryTime > 1305 && militaryTime < 1340) {
        return "Matematik";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "FRIDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1040) {
        return "Naturorienterade ämnen";
      } else if (militaryTime > 1040 && militaryTime < 1055) {
        return "Svenska";
      } else if (militaryTime > 1055 && militaryTime < 1125) {
        return "Lunch";
      } else if (militaryTime > 1125 && militaryTime < 1205) {
        return "Lunchrast";
      } else if (militaryTime > 1205 && militaryTime < 1235) {
        return "Musik/Matematik";
      } else if (militaryTime > 1235 && militaryTime < 1250) {
        return "Rast";
      } else if (militaryTime > 1250 && militaryTime < 1330) {
        return "Idrott ogch hälsa";
      } else if (militaryTime > 1330 && militaryTime < 1340) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    } else {
      return "Helg, börjar igen på måndag klockan 8:00";
    }
  }

  if (klass == "2C") {
    if (day[ww] == "MONDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1055) {
        return "Matematik";
      } else if (militaryTime > 1055 && militaryTime < 1125) {
        return "Lunch";
      } else if (militaryTime > 1125 && militaryTime < 1205) {
        return "Lunchrast";
      } else if (militaryTime > 1205 && militaryTime < 1325) {
        return "Övrigt/Studievägledning";
      } else if (militaryTime > 1325 && militaryTime < 1330) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "TUESDAY") {
      if (militaryTime > 0800 && militaryTime < 0900) {
        return "Naturorienterande ämnen (NO)";
      } else if (militaryTime > 0900 && militaryTime < 0920) {
        return "Matematik";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1055) {
        return "Svenska";
      } else if (militaryTime > 1055 && militaryTime < 1125) {
        return "Lunch";
      } else if (militaryTime > 1125 && militaryTime < 1205) {
        return "Lunchrast";
      } else if (militaryTime > 1205 && militaryTime < 1255) {
        return "Samhällsorienterande ämnen(SO)";
      } else if (militaryTime > 1255 && militaryTime < 1340) {
        return "Matematik";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "WEDNESDAY") {
      if (militaryTime > 0800 && militaryTime < 0900) {
        return "Blockerad tid elever";
      } else if (militaryTime > 0900 && militaryTime < 0910) {
        return "Rast";
      } else if (militaryTime > 0910 && militaryTime < 0940) {
        return "English";
      } else if (militaryTime > 0940 && militaryTime < 0950) {
        return "Svenska";
      } else if (militaryTime > 0950 && militaryTime < 1000) {
        return "Rast";
      } else if (militaryTime > 1000 && militaryTime < 1040) {
        return "Idrott och hälsa";
      } else if (militaryTime > 1040 && militaryTime < 1050) {
        return "Rast";
      } else if (militaryTime > 1050 && militaryTime < 1055) {
        return "Svenska";
      } else if (militaryTime > 1055 && militaryTime < 1125) {
        return "Lunch";
      } else if (militaryTime > 1125 && militaryTime < 1205) {
        return "Lunchrast";
      } else if (militaryTime > 1205 && militaryTime < 1245) {
        return "Mentorstid/Olweus";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "THURSDAY") {
      if (militaryTime > 0800 && militaryTime < 0900) {
        return "Matematik";
      } else if (militaryTime > 0900 && militaryTime < 0920) {
        return "Rast";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Samhällsorienterande ämnen(SO)";
      } else if (militaryTime > 0940 && militaryTime < 1055) {
        return "Matematik";
      } else if (militaryTime > 1055 && militaryTime < 1125) {
        return "Lunch";
      } else if (militaryTime > 1125 && militaryTime < 1205) {
        return "Lunchrast";
      } else if (militaryTime > 1205 && militaryTime < 1305) {
        return "Svenska";
      } else if (militaryTime > 1230 && militaryTime < 1240) {
        return "Rast";
      } else if (militaryTime > 1240 && militaryTime < 1320) {
        return "Idrott och hälsa";
      } else if (militaryTime > 1320 && militaryTime < 1340) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
    if (day[ww] == "FRIDAY") {
      if (militaryTime > 0800 && militaryTime < 0840) {
        return "Musik/Matematik";
      } else if (militaryTime > 0840 && militaryTime < 0920) {
        return "Musik/Matematik";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1055) {
        return "Naturorienterade ämnen";
      } else if (militaryTime > 1055 && militaryTime < 1125) {
        return "Lunch";
      } else if (militaryTime > 1125 && militaryTime < 1205) {
        return "Lunchrast";
      } else if (militaryTime > 1205 && militaryTime < 1340) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    } else {
      return "Helg, börjar igen på måndag klockan 8:00";
    }
  }

  if (klass == "3A") {
    if (day[ww] == "MONDAY") {
      if (militaryTime > 0800 && militaryTime < 0840) {
        return "Svenska";
      } else if (militaryTime > 0840 && militaryTime < 0920) {
        return "Matematik/Musik";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1020) {
        return "Matematik/Musik";
      } else if (militaryTime > 1020 && militaryTime < 1110) {
        return "Svenska";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Rast";
      } else if (militaryTime > 1220 && militaryTime < 1310) {
        return "Engelska";
      } else if (militaryTime > 1310 && militaryTime < 1400) {
        return "Samhällsorienterande ämnen(SO)";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }

  
    if (day[ww] == "TUESDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "EV";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1020) {
        return "Idrott och Hälsa";
      } else if (militaryTime > 1020 && militaryTime < 1035) {
        return "Rast";
      } else if (militaryTime > 1035 && militaryTime < 1110) {
        return "Samhällsorienterande ämnen(SO)";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1250) {
        return "Samhällsorienterande ämnen(SO)";
      } else if (militaryTime > 1250 && militaryTime < 1410) {
        return "Naturorienterade ämnen(NO)";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }

    if (day[ww] == "WEDNESDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0935) {
        return "Rast";
      } else if (militaryTime > 0935 && militaryTime < 1055) {
        return "Trä- och textilslöjd";
      } else if (militaryTime > 1055 && militaryTime < 1110) {
        return "Rast";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1330) {
        return "Matematik";
      } else if (militaryTime > 1330 && militaryTime < 1410) {
        return "Naturorienterade ämnen(NO)";
      } else {
        return "Klassen har slutat. Börjar klockan 9:10";
      }
    }

    if (day[ww] == "THURSDAY") {
      if (militaryTime > 0910 && militaryTime < 0950) {
        return "Idrott och Hälsa";
      } else if (militaryTime > 0950 && militaryTime < 1010) {
        return "Rast";
      } else if (militaryTime > 1010 && militaryTime < 1110) {
        return "Bild/Svenska";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1245) {
        return "Svenska";
      } else if (militaryTime > 1245 && militaryTime < 1300) {
        return "Matematik";
      } else if (militaryTime > 1300 && militaryTime < 1340) {
        return "Mentorstid/Olweus";
      } else if (militaryTime > 1340 && militaryTime < 1410) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }

    if (day[ww] == "FRIDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1100) {
        return "Matematik";
      } else if (militaryTime > 1100 && militaryTime < 1110) {
        return "Svenska";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1320) {
        return "Matematik";
      } else if (militaryTime > 1320 && militaryTime < 1345) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
  }
  
  if (klass == "3B") {
    if (day[ww] == "MONDAY") {
      if (militaryTime > 0800 && militaryTime < 0830) {
        return "Matematik";
      } else if (militaryTime > 0830 && militaryTime < 0920) {
        return "Engelska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1025) {
        return "Svenska";
      } else if (militaryTime > 1025 && militaryTime < 1030) {
        return "Rast";
      } else if (militaryTime > 1030 && militaryTime < 1110) {
        return "Matematik/Musik";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1225) {
        return "Rast";
      } else if (militaryTime > 1225 && militaryTime < 1305) {
        return "Matematik/Musik";
      } else if (militaryTime > 1305 && militaryTime < 1400) {
        return "Samhällsorienterande ämnen(SO)";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }

  
    if (day[ww] == "TUESDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "EV";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1010) {
        return "Svenska";
      } else if (militaryTime > 1010 && militaryTime < 1020) {
        return "Rast";
      } else if (militaryTime > 1020 && militaryTime < 1100) {
        return "Idrott och Hälsa";
      } else if (militaryTime > 1100 && militaryTime < 1110) {
        return "Rast";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1250) {
        return "Bild";
      } else if (militaryTime > 1250 && militaryTime < 1410) {
        return "Naturorienterade ämnen(NO)";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }

    if (day[ww] == "WEDNESDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0935) {
        return "Rast";
      } else if (militaryTime > 0935 && militaryTime < 1055) {
        return "Trä- och textilslöjd";
      } else if (militaryTime > 1055 && militaryTime < 1110) {
        return "Rast";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1300) {
        return "Matematik";
      } else if (militaryTime > 1300 && militaryTime < 1330) {
        return "Svenska";
      } else if (militaryTime > 1330 && militaryTime < 1410) {
        return "Naturorienterade ämnen(NO)";
      } else {
        return "Klassen har slutat. Börjar klockan 9:10";
      }
    }

    if (day[ww] == "THURSDAY") {
      if (militaryTime > 0910 && militaryTime < 0935) {
        return "Svenska";
      } else if (militaryTime > 0935 && militaryTime < 0950) {
        return "Rast";
      } else if (militaryTime > 0950 && militaryTime < 1030) {
        return "Idrott och Hälsa";
      } else if (militaryTime > 1030 && militaryTime < 1050) {
        return "Rast";
      } else if (militaryTime > 1050 && militaryTime < 1110) {
        return "Svenska";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1245) {
        return "Samhällsorienterande ämnen(SO)";
      } else if (militaryTime > 1245 && militaryTime < 1310) {
        return "Svenska";
      } else if (militaryTime > 1310 && militaryTime < 1410) {
        return "Matematik";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }

    if (day[ww] == "FRIDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Matematik";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1110) {
        return "Svenska";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1300) {
        return "Mentorstid/Olweus";
      } else if (militaryTime > 1300 && militaryTime < 1345) {
        return "Samhällsorienterande ämnen(SO)";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
  }

  if (klass == "3C") {
    if (day[ww] == "MONDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1030) {
        return "Engelska";
      } else if (militaryTime > 1030 && militaryTime < 1110) {
        return "Samhällsorienterande ämnen(SO)";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1240) {
        return "Samhällsorienterande ämnen(SO)";
      } else if (militaryTime > 1240 && militaryTime < 1315) {
        return "Svenska";
      } else if (militaryTime > 1315 && militaryTime < 1355) {
        return "Musik/Matematik";
      } else if (militaryTime > 1355 && militaryTime < 1410) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }

  
    if (day[ww] == "TUESDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "EV";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 0945) {
        return "Rast";
      } else if (militaryTime > 0945 && militaryTime < 1105) {
        return "Trä- och textilslöjd";
      } else if (militaryTime > 1105 && militaryTime < 1110) {
        return "Rast";
      } else if (militaryTime > 1100 && militaryTime < 1110) {
        return "Rast";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1250) {
        return "Bild";
      } else if (militaryTime > 1250 && militaryTime < 1315) {
        return "Svenska";
      } else if (militaryTime > 1315 && militaryTime < 1355) {
        return "Musik/Matematik";
      } else if (militaryTime > 1355 && militaryTime < 1410) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }

    if (day[ww] == "WEDNESDAY") {
      if (militaryTime > 0800 && militaryTime < 0840) {
        return "Idrott och Hälsa";
      } else if (militaryTime > 0840 && militaryTime < 0850) {
        return "Rast";
      } else if (militaryTime > 0850 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1110) {
        return "Naturorienterade ämnen(NO)";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1330) {
        return "Matematik";
      } else if (militaryTime > 1330 && militaryTime < 1410) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 9:10";
      }
    }

    if (day[ww] == "THURSDAY") {
      if (militaryTime > 0910 && militaryTime < 0950) {
        return "Idrott och Hälsa";
      } else if (militaryTime > 0950 && militaryTime < 1010) {
        return "Rast";
      } else if (militaryTime > 1010 && militaryTime < 1045) {
        return "Naturorienterade ämnen(NO)";
      } else if (militaryTime > 1045 && militaryTime < 1110) {
        return "Svenska";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1300) {
        return "Mentorstid/Olweus";
      } else if (militaryTime > 1300 && militaryTime < 1410) {
        return "Samhällsorienterande ämnen(SO)";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }

    if (day[ww] == "FRIDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1100) {
        return "Matematik";
      } else if (militaryTime > 1100 && militaryTime < 1110) {
        return "Svenska";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1320) {
        return "Matematik";
      } else if (militaryTime > 1320 && militaryTime < 1345) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
  }

  if (klass == "3D") {
    if (day[ww] == "MONDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1030) {
        return "Engelska";
      } else if (militaryTime > 1030 && militaryTime < 1110) {
        return "Naturorienterade ämnen(NO)";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1320) {
        return "Samhällsorienterande ämnen(SO)";
      } else if (militaryTime > 1320 && militaryTime < 1400) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }

  
    if (day[ww] == "TUESDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "EV";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 0945) {
        return "Rast";
      } else if (militaryTime > 0945 && militaryTime < 1105) {
        return "Trä- och textilslöjd";
      } else if (militaryTime > 1105 && militaryTime < 1110) {
        return "Rast";
      } else if (militaryTime > 1100 && militaryTime < 1110) {
        return "Rast";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1250) {
        return "Bild";
      } else if (militaryTime > 1250 && militaryTime < 1410) {
        return "Naturorienterade ämnen(NO)";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }

    if (day[ww] == "WEDNESDAY") {
      if (militaryTime > 0800 && militaryTime < 0830) {
        return "Svenska";
      } else if (militaryTime > 0830 && militaryTime < 0840) {
        return "Rast";
      } else if (militaryTime > 0840 && militaryTime < 0920) {
        return "Idrott och Hälsa";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1110) {
        return "Matematik";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1225) {
        return "Svenska";
      } else if (militaryTime > 1225 && militaryTime < 1305) {
        return "Matematik/Musik";
      } else if (militaryTime > 1305 && militaryTime < 1310) {
        return "Rast";
      } else if (militaryTime > 1310 && militaryTime < 1350) {
        return "Matematik/Musik";
      } else if (militaryTime > 1350 && militaryTime < 1410) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 9:10";
      }
    }

    if (day[ww] == "THURSDAY") {
      if (militaryTime > 0910 && militaryTime < 0935) {
        return "Svenska";
      } else if (militaryTime > 0935 && militaryTime < 0950) {
        return "Rast";
      } else if (militaryTime > 0950 && militaryTime < 1030) {
        return "Idrott och Hälsa";
      } else if (militaryTime > 1030 && militaryTime < 1050) {
        return "Rast";
      } else if (militaryTime > 1050 && militaryTime < 1110) {
        return "Svenska";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1300) {
        return "Mentorstid/Olweus";
      } else if (militaryTime > 1300 && militaryTime < 1410) {
        return "Samhällsorienterande ämnen(SO)";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }

    if (day[ww] == "FRIDAY") {
      if (militaryTime > 0800 && militaryTime < 0920) {
        return "Svenska";
      } else if (militaryTime > 0920 && militaryTime < 0940) {
        return "Rast";
      } else if (militaryTime > 0940 && militaryTime < 1100) {
        return "Matematik";
      } else if (militaryTime > 1100 && militaryTime < 1110) {
        return "Svenska";
      } else if (militaryTime > 1110 && militaryTime < 1140) {
        return "Lunch";
      } else if (militaryTime > 1140 && militaryTime < 1220) {
        return "Lunchrast";
      } else if (militaryTime > 1220 && militaryTime < 1320) {
        return "Matematik";
      } else if (militaryTime > 1320 && militaryTime < 1345) {
        return "Svenska";
      } else {
        return "Klassen har slutat. Börjar klockan 8:00";
      }
    }
  }

    if (klass == "4A") {
      if (day[ww] == "MONDAY") {
        if (militaryTime > 0800 && militaryTime < 0920) {
          return "Matematik";
        } else if (militaryTime > 0920 && militaryTime < 0940) {
          return "Rast";
        } else if (militaryTime > 0940 && militaryTime < 0955) {
          return "Matematik";
        } else if (militaryTime > 0955 && militaryTime < 1005) {
          return "Rast";
        } else if (militaryTime > 1005 && militaryTime < 1155) {
          return "Trä- och textilslöjd";
        } else if (militaryTime > 1120 && militaryTime < 1220) {
          return "Lunch";
        } else if (militaryTime > 1220 && militaryTime < 1310) {
          return "Samhällsorienterande ämnen(SO)";
        } else if (militaryTime > 1325 && militaryTime < 1330) {
          return "Rast";
        } else if (militaryTime > 1320 && militaryTime < 1405) {
          return "Bild";
        } else if (militaryTime > 1405 && militaryTime < 1415) {
          return "Rast";
        } else if (militaryTime > 1415 && militaryTime < 1515) {
          return "Studietid";
        } else {
          return "Klassen har slutat. Börjar klockan 8:00";
        }
      }
      //härifrån är under bearbetning och ska inte röras
      if (day[ww] == "TUESDAY") {
        if (militaryTime > 0800 && militaryTime < 0840) {
          return "Olweus/Klassråd";
        } else if (militaryTime > 0840 && militaryTime < 0850) {
          return "Rast";
        } else if (militaryTime > 0850 && militaryTime < 0850) {
          return "Svenska";
        } else if (militaryTime > 09203 && militaryTime < 0940) {
          return "Rast";
        } else if (militaryTime > 0940 && militaryTime < 1025) {
          return "Musik/Naturorienterade ämnen(NO)";
        } else if (militaryTime > 1025 && militaryTime < 1035) {
          return "Rast";
        } else if (militaryTime > 1055 && militaryTime < 1125) {
          return "Lunch";
        } else if (militaryTime > 1125 && militaryTime < 1205) {
          return "Lunchrast";
        } else if (militaryTime > 1205 && militaryTime < 1255) {
          return "Samhällsorienterande ämnen(SO)";
        } else if (militaryTime > 1255 && militaryTime < 1340) {
          return "Matematik";
        } else {
          return "Klassen har slutat. Börjar klockan 8:00";
        }
      }
      if (day[ww] == "WEDNESDAY") {
        if (militaryTime > 0800 && militaryTime < 0900) {
          return "Blockerad tid elever";
        } else if (militaryTime > 0900 && militaryTime < 0910) {
          return "Rast";
        } else if (militaryTime > 0910 && militaryTime < 0940) {
          return "English";
        } else if (militaryTime > 0940 && militaryTime < 0950) {
          return "Svenska";
        } else if (militaryTime > 0950 && militaryTime < 1000) {
          return "Rast";
        } else if (militaryTime > 1000 && militaryTime < 1040) {
          return "Idrott och hälsa";
        } else if (militaryTime > 1040 && militaryTime < 1050) {
          return "Rast";
        } else if (militaryTime > 1050 && militaryTime < 1055) {
          return "Svenska";
        } else if (militaryTime > 1055 && militaryTime < 1125) {
          return "Lunch";
        } else if (militaryTime > 1125 && militaryTime < 1205) {
          return "Lunchrast";
        } else if (militaryTime > 1205 && militaryTime < 1245) {
          return "Mentorstid/Olweus";
        } else {
          return "Klassen har slutat. Börjar klockan 8:00";
        }
      }
      if (day[ww] == "THURSDAY") {
        if (militaryTime > 0800 && militaryTime < 0900) {
          return "Matematik";
        } else if (militaryTime > 0900 && militaryTime < 0920) {
          return "Rast";
        } else if (militaryTime > 0920 && militaryTime < 0940) {
          return "Samhällsorienterande ämnen(SO)";
        } else if (militaryTime > 0940 && militaryTime < 1055) {
          return "Matematik";
        } else if (militaryTime > 1055 && militaryTime < 1125) {
          return "Lunch";
        } else if (militaryTime > 1125 && militaryTime < 1205) {
          return "Lunchrast";
        } else if (militaryTime > 1205 && militaryTime < 1305) {
          return "Svenska";
        } else if (militaryTime > 1230 && militaryTime < 1240) {
          return "Rast";
        } else if (militaryTime > 1240 && militaryTime < 1320) {
          return "Idrott och hälsa";
        } else if (militaryTime > 1320 && militaryTime < 1340) {
          return "Svenska";
        } else {
          return "Klassen har slutat. Börjar klockan 8:00";
        }
      }
      if (day[ww] == "FRIDAY") {
        if (militaryTime > 0800 && militaryTime < 0840) {
          return "Musik/Matematik";
        } else if (militaryTime > 0840 && militaryTime < 0920) {
          return "Musik/Matematik";
        } else if (militaryTime > 0920 && militaryTime < 0940) {
          return "Rast";
        } else if (militaryTime > 0940 && militaryTime < 1055) {
          return "Naturorienterade ämnen";
        } else if (militaryTime > 1055 && militaryTime < 1125) {
          return "Lunch";
        } else if (militaryTime > 1125 && militaryTime < 1205) {
          return "Lunchrast";
        } else if (militaryTime > 1205 && militaryTime < 1340) {
          return "Svenska";
        } else {
          return "Klassen har slutat. Börjar klockan 8:00";
        }
      } else {
        return "Helg, börjar igen på måndag klockan 8:00";
      }
    } else {
      return "Helg, börjar igen på måndag klockan 8:00";
    }
  }
