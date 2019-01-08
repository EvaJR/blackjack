// Blackjack app
// by Eva van Rooden
// based on javascript-getting-started&author=mark-zamoyta

console.log("Welcome to blackjack!"); // my first JS code

// creating the deck of cards
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["Ace", "Two", "Three", "Four", "Five", "Six",
              "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
let deck = [];

for(let i = 0; i < suits.length; i++) {
  for(let j = 0; j < values.length; j++) {
    deck.push(values[j] + " of " + suits[i]);
  }

}
console.log(deck);

let playerCards = [deck[0], deck[2]];

console.log("You are dealt:");
console.log("  " + playerCards[0]);
console.log("  " + playerCards[1]);
