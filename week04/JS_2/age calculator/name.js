let myAge = 25;
let userAge = +prompt("Please enter your age");

if(myAge === userAge) {
    alert("Hurray smae age");

}else if (myAge> userAge){
    alert("");
}

else if (myAge< userAge){
    alert("Poor you");
}
else {
    alert("you did not enter a number")
}