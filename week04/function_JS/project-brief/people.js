let participants = [
  {
    name: "Alona",
    hobby: ["hiking", "coding"],
    age: "-",
    eyecolor: "green",
    itfiel: "Full-Stack",
    img: "img/Alona-6.jpg",
  },
  {
    name: "Ana",
    hobby: ["coding"],
    age: "-",
    eyecolor: "brown",
    itfiel: "Full-Stack",
    img: "img/Ana.jpg",
  },
  {
    name: "Kateryna",
    hobby: ["coding"],
    age: "-",
    eyecolor: "brown",
    itfiel: "Full-Stack",
    img: "img/Kateryna.jpg",
  },
  {
    name: "Khalid",
    hobby: ["coding"],
    age: "-",
    eyecolor: "brown",
    itfiel: "Full-Stack",
    img: "img/Khalid.jpg",
  },
  {
    name: "Lu",
    hobby: ["coding"],
    age: "-",
    eyecolor: "brown",
    itfiel: "Full-Stack",
    img: "img/Lu.jpg",
  },
  {
    name: "Maksym",
    hobby: ["coding"],
    age: "-",
    eyecolor: "brown",
    itfiel: "Full-Stack",
    img: "img/Maksym.jpg",
  },
  {
    name: "Mariia",
    hobby: ["coding"],
    age: "-",
    eyecolor: "brown",
    itfiel: "Full-Stack",
    img: "img/Mariia.jpg",
  },
  {
    name: "Olesia",
    hobby: ["coding"],
    age: "-",
    eyecolor: "brown",
    itfiel: "Full-Stack",
    img: "img/Olesia.jpg",
  },
  {
    name: "Taha",
    hobby: ["coding"],
    age: "-",
    eyecolor: "brown",
    itfiel: "Full-Stack",
    img: "img/Taha.jpg",
  },
  {
    name: "Burak",
    hobby: ["coding"],
    age: "-",
    eyecolor: "brown",
    itfiel: "Full-Stack",
    img: "img/Burak.jpg",
  },
];
// console.log(list[0].name);

// loop

function listPeople() {
  for (let index = 0; index < participants.length; index++) {
    const listCard = document.createElement("li");
    listCard.classList.add("card");

  

    const imgList = document.createElement("img");
    imgList.classList.add("card-image");
    imgList.src = participants[index].img;
    imgList.alt = "Participant Photo";

    const contentCard = document.createElement("div");
    contentCard.classList.add("card-content");
    const namePart = document.createElement("h3");
    namePart.innerText = "Name: " + participants[index].name;
    const hobbyPart = document.createElement("p");
    hobbyPart.innerText = "Hobby: " + participants[index].hobby;
    const agePart = document.createElement("p");
    agePart.innerText = "Age: " + participants[index].age;

    const eyecolorPart = document.createElement("p");
    eyecolorPart.innerText = "Eye color: " + participants[index].eyecolor;

    const itPart = document.createElement("p");
    itPart.innerText = "It field: " + participants[index].itfiel;

    // append

    listCard.appendChild(imgList);
    listCard.appendChild(contentCard);
    contentCard.appendChild(namePart);
    contentCard.appendChild(agePart);
    contentCard.appendChild(hobbyPart);
    contentCard.appendChild(itPart);
    contentCard.appendChild(eyecolorPart);

    // liElement.addEventListener("click", () => {
    //   alert("Hi" + participants.age);
    // });

    document.getElementById("page").appendChild(listCard);
  }
}
listPeople();
