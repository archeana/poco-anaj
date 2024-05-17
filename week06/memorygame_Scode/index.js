// 36 cards - 18 matching pairs
//shuffle
// get matching pair gets disable (remove or hide)
//click handler to flip the card around 
// the cards need to be shown face down on the board
// score - low priority 
// Bonus:multiple players at least 2 low priority 

class Card {
    constructor(id, pair_id, face, bgcolor, visible = false, matched = false) {
        this.id = id;
        this.pair_id = pair_id;
        this.face = face;
        this.bgcolor = bgcolor;
        this.visible = visible;
        this.matched = matched;
    }

    // two possible methods 
    // this method to see if is visible - toggle you declare before in classe it is false or true 
    flipCard() {
        this.visible = !this.visible;
    }

    foundMatch() {
        this.matched = true;
    }
}

const cards = [];
const pairs = 18;
const pTag = document.querySelector("p");
const CSS_COLOR_NAMES = ['#F0F8FF', '#FAEBD7', '#00FFFF', '#7FFFD4', '#F0FFFF', '#F5F5DC', '#FFE4C4', '#000000', '#FFEBCD', '#0000FF','#8A2BE2', '#A52A2A', '#DEB887', '#5F9EA0', '#7FFF00', '#D2691E', '#FF7F50', '#6495ED'];


generateCards();
shuffleCards();
setBoard();

function generateCards() {
    // loop to create the pairs
    for(let i=1; i<=pairs; i++){
        // creating a new card for the array
        for(let y=0; y<2; y++){
            // making unique id
            cards.push(new Card(`${y}_${i}`, i, i, CSS_COLOR_NAMES[i]));
        }
    }
}

function shuffleCards(){
    //Fisher-Yates algorithm
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}


function setBoard(){
    const ulTag = document.createElement("ul");
    pTag.after(ulTag);

    for(const card of cards){
        const liTag = document.createElement("li");
        
        const front = document.createElement("div");
        front.textContent = card.face;
        front.style.backgroundColor = card.bgcolor;
        front.classList.add("front");

        const back = document.createElement("div");
        back.classList.add("back");

        liTag.addEventListener("click",e => {
            //check for disabled
            if(!card.matched){
                card.flipCard();
                liTag.classList.toggle("flipped");
                trackFlippedCards(card);
            }
        });

        liTag.appendChild(front);
        liTag.appendChild(back);
        ulTag.appendChild(liTag);
    }
}

function trackFlippedCards(card){
    if(card.visible){
        flippedCards.push(card);
        if(flippedCards.length==2){
            setTimeout(checkForMatch, 1000);            
        } 
        // to do ELSE - if more than 2, remove and unflip first 2 
    } 
    //to do ELSE - if it is in there, remove it
}


function checkForMatch(){
    //check for pair id, face, bgcolor objects
    //or check for flipped elements in dom and compare front div
    if(flippedCards[0].pair_id === flippedCards[1].pair_id){
        //score +1
        flippedCards[0].foundMatch();
        flippedCards[1].foundMatch();
        flippedCards = [];
    } else {
        flippedCards[0].flipCard();
        trackFlippedCards(flippedCards[0]);
        flippedCards[1].flipCard();
        trackFlippedCards(flippedCards[1]);
        flippedCards = [];

        //find the flipped elements in DOM and remove class
        let flippedElms = document.querySelectorAll(".flipped:not(.disabled)");
        for(elm of flippedElms){
            elm.classList.remove("flipped");
        }
    }
}
