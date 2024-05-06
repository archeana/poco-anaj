const heading = document.querySelector("h1");
// create  a ul
const list = document.createElement("ul");

var read = false;
var unread = false;


var books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false,
        url: "https://images.thalia.media/00/-/775ea7b5db1740b9b501d478c93a5f15/design-of-everyday-things-taschenbuch-don-norman-englisch.jpeg"
    }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true,
        url: "https://images.thalia.media/00/-/27a9a66bf7c745bd87f603cf0c6e1609/the-most-human-human-what-artificial-intelligence-teaches-us-about-being-alive-taschenbuch-brian-christian-englisch.jpeg"
    }
];

function displayBooks() {
    list.innerText = ""; // Clear existing list

    books.forEach(function (item) {
        // Add a new list item for each item in the array
        let listItem = document.createElement("li");
        // acess the object and add 
        listItem.textContent = item.title + " by " + item.author + " Read: " + item.alreadyRead;
        // Apply styles to the list item
        listItem.style.color = "brown"; //  style

        // Apply styles based on whether the book is read or not
        if (item.alreadyRead) {
            listItem.classList.add("read");
        } else {
            listItem.classList.add("unread");
        }


        // Append the list item to the list
        list.appendChild(listItem);
        // add image
        const imgList = document.createElement("img");
        imgList.classList.add("image");
        imgList.src = item.url;
        imgList.alt = "Image of the book";
        // append the image to each list item
        listItem.appendChild(imgList);
    });

    // if you want to add just after append  
    // heading.insertAdjacentHTML("afterend", list);
    heading.append(list);
}
// add new books

function addBook(title, author, alreadyRead, url) {
    var newBook = {
        title: title,
        author: author,
        alreadyRead: alreadyRead,
        url: url
    };

    books.push(newBook);

    displayBooks(); // Update the display after adding the new book
}

// Display existing books
displayBooks();

addBook('Clean Code', 'Robert Cecil Martin', false, 'https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UF1000,1000_QL80_.jpg');
