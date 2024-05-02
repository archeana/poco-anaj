// Function to calculate retirement details
function calculateRetirement() {
    // Get the current age and retirement age from input fields 
    // The parseInt method parses a value as a string and returns the first integer.
    let currentAge = parseInt(document.getElementById("currentAge").value);
    let retireAge = parseInt(document.getElementById("retireAge").value);
    
    // We check if current age is less than retirement age
    if (currentAge >= retireAge) {
        // Display error if current age is not less than retirement age
        alert("Invalid input: Current age must be less than retire age.");
        return;
    }
    
    // Get current date of today
    // getFullYear() Use this method instead of the getYear() method.
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    
    // Calculate years left until retirement and the retirement year
    let yearsLeft = retireAge - currentAge;
    let retireYear = currentYear + yearsLeft;
    // let retirementDate = new Date( currentDate.getDate() - retireYear);
   // Display the result
   document.getElementById("result").innerHTML = "You have " + yearsLeft + " years, " + "left until retirement. You can retire in " + retireYear + ".";

}
// year and date miliseconds I need to compare between two bvalues  date diference 
    // // Create a retirement date 
    // let retirementDate = new Date(retireYear, currentDate.getMonth(), currentDate.getDate());
    // let timeLeft = retirementDate.getTime() - currentDate.getTime();
    
// // Calculate days and months left until retirement - timeleft
// timeLeft: yearsLeft    12 monthsLeft 365daysLeft days 60 hours 



// Math.floor()
// Returns the largest integer less than or equal to x.
    
//     // Display the result
//     document.getElementById("result").innerHTML = "You have " + yearsLeft + " years, " + monthsLeft + " months, and " + daysLeft + " days left until retirement. You can retire in " + retireYear + ".";
// }











