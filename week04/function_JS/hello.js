// // Prompt the user to enter their name
// var userName = prompt("Please enter your name:");

// // Check if the user entered a name (!==null - checks if the username is not equal to null and !==" " to not be an empty string )
// if (userName !== null && userName !== "") {
//     // Print a greeting message using the user's name
//     alert("Hello, " + userName + "! Welcome to our website.");
// } else {
//     // If the user didn't enter a name
//     alert("Hello stranger! Welcome to our website.");
// }

function userName() {
    // Prompt the user to enter their name
    var userName = prompt("Please enter your name:");

    // Check if the user entered a name
    if (userName !== null && userName !== "") {
        //  greeting 
        alert("Hello, " + userName + "! Welcome to our website.");
    } else {
        // If the user didn't enter a name
        alert("Hello stranger! Welcome to our website.");
    }
}

// Call the function to greet the user
userName();
