
// data as list of objects
// display data in our DOM
// manipulate data through the user aka events
// store data back in our list of objects
//TO Do wish list in a gift store for a wedding
// create ul and add the gifts as li

// add a checkbox in the li to change the status (bought or not)
//database - list of objects
// list of objects
// const gifts = [
//     {
//         name: "",
//         price: "",
//         selected: false,
//         img:"",
//         shoppingUrl: "",
//         guestWhoPicked: ""
//     }];

// Class definition for Gift
class createGift {
    // to add a dinamically we need a object constructor or class
    constructor(name, price = 0, img = "", shoppingUrl = "") {
        this.name = name; // h2 -2
        this.price = price; // p - 3
        this.img = img; //img - 1 if no phot give default
        this.shoppingUrl = shoppingUrl; //link -4 if no link show no link
        this.selected = false; //button/checkbox - 5
        this.guestWhoPicked = "";//input text before
    }
    // if we dont know we add a parameter
    changeGiftStatus(guest) {
        this.selected = !this.selected;
        this.guestWhoPicked = guest;
    }
}
const pTag = document.querySelector("p");
const inputTag = document.querySelector("#guest");
// Default image URL
const fallbackImg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Ferror-icon-vector-illustration-vector-id922024224%3Fk%3D6%26m%3D922024224%26s%3D612x612%26w%3D0%26h%3DLXl8Ul7bria6auAXKIjlvb6hRHkAodTqyqBeA6K7R54%3D&f=1&nofb=1&ipt=03c2ec5a0509ea89efbae96073420ca035420fb8a6e4267804fa13ae174c10ad&ipo=images";

// List of gifts
// so if you make a constructor and class you have to before the list before initialize it
const gifts = [
    new createGift("Mixer", 89.90, "https://i.ebayimg.com/images/g/fGsAAOSw8e5lFqWo/s-l1200.jpg"),
    new createGift("Coffee machine", 69.90, "https://www.coffeeb.com/media/7a/80/82/1713366907/CoffeeB-naked_Red_Front_ohneDampf_PDP.jpg"),
    new createGift("Toy car", 125.50, "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinoyguyguide.com%2Fwp-content%2Fuploads%2F2017%2F09%2FLamborghini-Aventador-LP700-4-Roadster-Orange-Petron-Supercars-2017-2.jpg&f=1&nofb=1&ipt=c449bba2c6ed28fbf1f2ef517a24dfdce23fb7af4dd205e75a338fed3597f9b7&ipo=images"),
    new createGift("Bed linen set", 60)
];


// Function to add gifts to the DOM
function addGiftsToDOM() {
    const ulTag = document.createElement("ul");
// map returns a new array and we have to store in a variable
    /* const markup = gifts.map(gift => `<li><h2>${gift.name}</h2><p>CHF ${gift.price}</p>${gift.shoppingURL?`<a href="${gift.shoppingURL}" target="_blank">Buy now</a>`:``}<img src="${!gift.img?fallbackImg:gift.img}" alt="${gift.name}"><button>Select this gift</button></li>`).join("");
   ulTag.insertAdjacentHTML("beforeend",markup); */
    gifts.forEach(gift => {
        let liTag = document.createElement("li");
        ulTag.appendChild(liTag);

        let h2Tag = document.createElement("h2");
        h2Tag.textContent = gift.name;
        liTag.appendChild(h2Tag);

        let pTag = document.createElement("p");
        pTag.textContent = `CHF ${gift.price}`;
        liTag.appendChild(pTag);

        if (gift.shoppingUrl !== "") {
            let aTag = document.createElement("a");
            aTag.textContent = "Buy now";
            aTag.setAttribute("href", gift.shoppingUrl);
            aTag.setAttribute("target", "_blank");
            liTag.appendChild(aTag);
        }

        let imgTag = document.createElement("img");
        if (gift.img === "") {
            imgTag.setAttribute("src", fallbackImg);
        } else {
            imgTag.setAttribute("src", gift.img);
        }
        imgTag.setAttribute("alt", gift.name);
        liTag.appendChild(imgTag);

        let btnTag = document.createElement("button");
        btnTag.textContent = "Select this gift";
        btnTag.addEventListener("click", e => {
            gift.changeGiftStatus(inputTag.value);
            liTag.classList.toggle("selected");
            console.table(gift);
        });
        liTag.appendChild(btnTag);
    });
    pTag.after(ulTag);
}




// // we have tofunction to add gifts to the DOM
addGiftsToDOM();
