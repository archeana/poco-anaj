let day;

switch (new Date().getDay()) {
  case 0:
    day = "Segunda-feira";
    break;
  case 1:
    day = "Terça-feira";
    break;
  case 2:
    day = "Quarta-feira";
    break;
  case 3:
    day = "Quinta-feira";
    break;
  case 4:
    day = "Sexta-feira";
    break;
  case 5:
    day = "Sabado";
    break;
  case 6:
    day = "Domingo";
}
console.log(day);
document.getElementById("dayofweek").innerText = "Today is " + day;

// const dayIndex = new Date().getDay();
// const currentDay = weekdays[dayIndex];

// document.getElementById("dayofweek").innerHTML = "Today is " + currentDay;
