
// // first approach simple way not dynamic
// function calculateSum(){
    
//     const num1 = parseInt(document.getElementById("firstbox").value);
//     const num2 = parseInt(document.getElementById("secondbox").value);
    
//     let result = num1 + num2;

// document.getElementById("sum").innerHTML = "The sum of all numbers is: " + result ;
// }


// second approach still not dynamic but more complicated 

const heading = document.querySelector("h1");
const inputContainer = document.querySelector("#inputs");

function addInput() {
    const newInput = document.createElement("input");
    newInput.type = "number";
    newInput.classList.add("number-input");
    inputContainer.appendChild(newInput);
}

// not the correct way and does not look like the exercise but I  m not at that level.. so I need buttons
function calculateSum() {
    const numberInputs = document.querySelectorAll(".number-input");
    let sum = 0;
    numberInputs.forEach(input => {
        sum += parseInt(input.value) || 0; // If input is empty or non-numeric, default to 0
    });
    document.getElementById("sum").innerHTML = "The sum of all numbers is: " + sum;
}