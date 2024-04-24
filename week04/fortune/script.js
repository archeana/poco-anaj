console.log("Hello, World!")


// return integer between min and below max
function randomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

window.onload = function() {
    console.log("The page has been loaded!");
}

function fortuneTeller(name) {
    let numberOfChildren = 0;
    let partnerName = "";
    let geographicLocation = "";
    let jobTitle = "";

    let numberOfChildernOptions = [0, 1, 2, 3];
    let partnerNameOptions = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Hank"];
    let geographicLocationOptions = ["New York", "Los Angeles", "Chicago", "Miami"];
    let jobTitleOptions = ["Doctor", "Lawyer", "Teacher", "Engineer"];

    console.log("[LOG] created list of options");

    numberOfChildren = numberOfChildernOptions[randomInt(0, numberOfChildernOptions.length)];
    partnerName = partnerNameOptions[randomInt(0, partnerNameOptions.length)];
    geographicLocation = geographicLocationOptions[randomInt(0, geographicLocationOptions.length)];
    jobTitle = jobTitleOptions[randomInt(0, jobTitleOptions.length)];

    
    let fortune_text = `Hi ${name}, you will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with`;
    
    if (numberOfChildren == 0) {
        fortune_text += " no kids.";
    }
    else if (numberOfChildren == 1) {
        fortune_text += " one kid.";
    }
    else {
        fortune_text += ` ${numberOfChildren} kids.`;
    }

    console.log(fortune_text)
    // alert(fortune_text);

    document.getElementById("content").innerText = fortune_text;


}

function test() {
    let name = document.getElementById("name").value;
    fortuneTeller(name); // Call the function
}

function dateDiff() {
    let startDate = new Date(document.getElementById("start_date").value);
    let endDate = new Date(document.getElementById("end_date").value);

    let diff = (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24; // ms -> days

    console.log(`Start Date: ${startDate}; End Date: ${endDate}`);

    document.getElementById("dateDiff").innerText = `${diff} days between those two dates.`;

}