// 1. assign the global variable in order to call h1 form the html
const heading = document.querySelector("h1");
const input = document.querySelector("#new_item");
const clearButton = document.getElementById("clearBtn");
// 2. global array
const groceries = [ "milk", "eggs", "sugar", "chocolate"];

// 3. Events
// you can also use input or change event - input is not good it add letter by letter
input.addEventListener("change", addItemToGroceries);
clearButton.addEventListener("click", deleteItemFromGroceries)
populateItems();

// addItemToGroceries(input.value)

// 4. functions at the end  or  anywhere
function createGroceryList(){
    deleteOldGroceryLists();

    const list = document.createElement("ul");
    heading.append(list);
    return list;
    // populateItems(list);
}

function deleteOldGroceryLists(){
    const ulTags = document.querySelectorAll("ul");
    for (const ul of ulTags){
        ul.remove();
    }
}

// pass the other argument to the next function

function populateItems() {
    const list = createGroceryList();

    for(const item of groceries){
        let listItem = document.createElement("li");
        listItem.textContent = item;
        
        list.appendChild(listItem);
    
    }
    
}

function addItemToGroceries(e){
    groceries.push(e.target.value);
    populateItems();
}

function deleteItemFromGroceries(){
    groceries.shift();
    populateItems();
    // deleteItemFromGroceries(list);
}