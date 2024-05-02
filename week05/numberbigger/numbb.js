// declare 2 variables

// function compnumber() {
//   let bignumber = 10;
// //   var smallnumber = 5;

//   let smallnumber = 5(document.getElementById("numb").value);
//   if (bignumber > smallnumber) {
//     prompt("The greater number of 5 and 10 is 10.");
//     return;
//   } else {
//     bignumber > smallnumber;
//     prompt("The smaller number of 5 and 10 is 5.");
//   }
//   document.getElementById("output").innerHTML = prompt;

// }

// function compnumber() {
//     let bignumber = 10;
//     let smallnumber = parseInt(document.getElementById("numb").value);

//     if (bignumber > smallnumber) {
//       alert("The smaller number of 5 and 10 is 5");
//     } else {
//       alert("The greater number of 5 and 10 is 10.");
//     }
//   }

// The parseInt method parses a value as a string and returns the first integer.

function compnumber() {
  let bignumber = 10;
  let smallnumber = parseInt(document.getElementById("numb").value);

  if (bignumber > smallnumber) {
    document.getElementById("output").innerHTML =
      "The smaller number of 5 and 10 is 5.";
  } else {
    document.getElementById("output").innerHTML =
      "The greater number of 5 and 10 is 10.";
  }
}
