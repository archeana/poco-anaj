// assign the varible in order to call h1 form the html
const heading = document.querySelector("h1");
const list = document.createElement("ul");

const groceries = [ "milk", "eggs", "sugar", "chocolate"];

// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

// to remove only the milk from the list
// you can also add at the end but you have to keep both at the end but you have to put both in JS and HTML (check comment end)
groceries.shift();
// groceries.splice(1,1)



// // Create an empty string to store the list items
// let listItems = "";

// Iterate over each item in the groceries array you can have either foreach or
// for
groceries.forEach(function(item) {
    // Add a new list item for each item in the array
    let listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
});



for(const item of groceries){
    let listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);

}

// if you want to add just after append  
// heading.insertAdjacentHTML("afterend", list);
heading.append(list);


// remove frpom the list from the output

// list.firstElementChild.remove();

// if we can combine both it will work if not just take from the top next ot the list and before the function
// groceries.splice(1,1)


// other way of doing with functions - more organize



