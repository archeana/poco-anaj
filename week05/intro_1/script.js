// Live coding monday 29-04-2024
// 1.login data will be submitted
// 2. validate the passwprd - check the user exists
// 3. view for user is changin logout/ wrong mesage
// list of objects  email and user

// Define a list of users with their corresponding passwords
const users = [
    {
        username: "user1",
        password: "password1",
        email: "user1@email.com"
    },
    {
        username: "user2",
        password: "password2",
        email: "user2@email.com"
    },
    {
        username: "user3",
        password: "password3",
        email: "user3@email.com"
    }
];
// Global scope should be outside so is not inside of the scope of the other funcion
const loginForm = document.querySelector("form");
loginForm.addEventListener("submit", gatherUserInput);


function gatherUserInput(event) {
    event.preventDefault();
    // complicated way: let formData = new FormData(loginForm);
    // const data =Object.formEntries(formData)
    // console.table(data);

    let email = document.getElementById("user").value;

    let password = document.getElementById("psw").value;
    checkIfLoginExists(email, password);
}


function checkIfLoginExists(email, password) {
    // missing this
    let userExists = false;
    // check the login user existes in (array)user list  
    users.forEach(function (user) {
        if (user.email === email) {
            userExists = true;
            // if exists  check if the password is the same as the login password
            if (user.password === password) {
                // if password is correct cal changeViewIfLoggedIn 
                changeViewIfLoggedIn(user);
            } else {
                // else call ShowErrorMessage 
                showErrorMessage("Incorrect password.");
            }

        } 
    });
 if(!userExists)  {
    // else alert user password does not exist call show errorMessage
    showErrorMessage("User not found.");
}
}

function changeViewIfLoggedIn(user) {
    // You can do something here like redirecting to a new page or updating the UI
    console.log("Logged In as " + user.username);
}

function showErrorMessage(message) {
    // Display error message to the user
    console.log("Error: " + message);
}