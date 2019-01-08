// Blackjack app
// by Eva van Rooden
// based on javascript-getting-started&author=mark-zamoyta

// card variables
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["Ace", "Two", "Three", "Four", "Five", "Six",
              "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]

// changing html
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

// game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
newGameButton.addEventListener('click', function() {
  gameStarted = true;
  gameOver = false;
  playerWon = false;

  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];
  textArea.innerText = 'New game!';
  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showStatus();
});

hitButton.addEventListener('click', function() {
  playerCards.push(getNextCard());
  checkForEndOfGame();
  showStatus();
});

stayButton.addEventListener('click', function() {
  gameOver = true;
  checkForEndOfGame();
  showStatus();
});

// game functions
function createDeck() {
  deck = [];
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

function showStatus() {
  if (!gameStarted) {
    textArea.innerText = 'Welcome to blackjack!';
    return;
  }

  let dealerCardString = '';
  for(let i = 0; i < dealerCards.length; i++) {
    dealerCardString += getCardString(dealerCards[i]) + '\n';
  }

  let playerCardString = '';
  for(let i = 0; i < playerCards.length; i++) {
    playerCardString += getCardString(playerCards[i]) + '\n';
  }

  updateScores();

  textArea.innerText =
    'Dealer has:\n' +
    dealerCardString +
    'score: ' + dealerScore + '\n\n' +
    'Player has:\n' +
    playerCardString +
    'score: ' + playerScore + '\n\n'

    if(gameOver) {
      if(playerWon) {
        textArea.innerText += 'YOU WIN!';
      } else {
        textArea.innerText += 'Dealer wins'
      }
      newGameButton.style.display = 'block';
      hitButton.style.display = 'none';
      stayButton.style.display = 'none';
    }
}

function updateScores() {
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

function getScore(cardArray) {
  let score = 0;
  let hasAce = false;
  for (let i = 0; i < cardArray.length; i++) {
    let card = cardArray[i];
    score += getCardNumericValue(card);
    if(card.value === 'Ace') {
      hasAce = true;
    }
    if (hasAce && score + 10 <= 21) {
      score + 10;
    }
  }
  return score;
}

function getCardNumericValue(card) {
  let value = 0;
  switch(card.value) {
    case 'Ace':
      value = 1;
      break;
    case 'Two':
      value = 2;
      break;
    case 'Three':
      value = 3;
      break;
    case 'Four':
      value = 4;
      break;
    case 'Five':
      value = 5;
      break;
    case 'Six':
      value = 6;
      break;
    case 'Seven':
      value = 7;
      break;
    case 'Eight':
      value = 8;
      break;
    case 'Nine':
      value = 9;
      break;
    default:
      value = 10;
      break;
  }

  return value;

}

function getCardString(card) {
  return card.value + " of " + card.suit;
}

function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let swap = Math.trunc(Math.random() * deck.length);
    let tmp = deck[swap];
    deck[swap] = deck[i];
    deck[i] = tmp;
  }
}

function checkForEndOfGame() {
  updateScores();

  if(gameOver) {
    while(dealerScore < playerScore &&
      playerScore <= 21 &&
      dealerScore <= 21) {
        dealerCards.push(getNextCard());
        updateScores();
      }
  }

  if(playerScore > 21) {
    playerWon = false;
    gameOver = true;
  } else if (dealerScore > 21 ) {
    playerWon = true;
    gameOver = true;
  } else if (gameOver) {
    if (playerScore > dealerScore) {
      playerWon = true;
    } else {
      playerWon = false;
    }
  }

}
