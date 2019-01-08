// Blackjack app
// by Eva van Rooden
// based on javascript-getting-started&author=mark-zamoyta

console.log("Welcome to blackjack!"); // my first JS code

// changing html

let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

hitButton.style.display = 'none';
stayButton.style.display = 'none';
newGameButton.addEventListener('click', function() {
  textArea.innerText = 'New game!';
  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
});

let okButton = document.getElementById('ok-button');
okButton.addEventListener('click', function() {
  paragraph.innerText = 'Button clicked!';
});

// creating the deck of cards
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["Ace", "Two", "Three", "Four", "Five", "Six",
              "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
let cards = [
    {
      suit: "Hearts",
      value: "Queen"
    }
];

let result = Math.random() * 52;

result = Math.trunc(result);

console.log("Random: " + result);


console.log(cards);

function createDeck() {
  let deck = [];
  for(let i = 0; i < suits.length; i++) {
    for(let j = 0; j < values.length; j++) {
      let card = {
        suit: suits[i],
        value: values[j]
      };
      deck.push(card);
    }
  }
  return deck;
}

function getNextCard() {
  return deck.shift();
}

function getCardString(card) {
  return card.value + " of " + card.suit;
}

let deck = createDeck();
console.log(deck);

let playerCards = [getNextCard(), getNextCard()];

console.log("You are dealt:");
console.log(getCardString(playerCards[0]));
console.log("  " + getCardString(playerCards[1]));
