import { Deck } from "./deck.js";
import {ScoreTable} from "./scoretable.js";

class BlackJack {
  constructor(deckAmount = 6) {
    this.deckAmount = deckAmount;
    this.deck = new Deck(2).Create();
    this.scoretable = new ScoreTable().Create();
    this.playedCards = 0;
    this.scoreAceHigh = 0;
    this.scoreAceLow = 0;
    this.dealerScoreAceLow = 0;
    this.dealerScoreAceHigh = 0;
    this.currentCard = null;
    this.dealerCurrentCard = null;
  }

  SortDeck() {
    let i = this.deck.length,
      randomNum,
      randomNumIndex;
    while (--i > 0) {
      randomNum = Math.floor(Math.random() * (i + 1));
      randomNumIndex = this.deck[randomNum];
      this.deck[randomNum] = this.deck[i];
      this.deck[i] = randomNumIndex;
    }
    return this.deck;
  }

  TakeCard() {
    let card = blackjack.deck[this.playedCards];
    this.currentCard = card;
    if(typeof this.scoretable[card] === 'number'){
      this.scoreAceLow += this.scoretable[card];
      this.scoreAceHigh += this.scoretable[card];
    }
    else{
      this.scoreAceLow += this.scoretable[card][0];
      this.scoreAceHigh += this.scoretable[card][1];
    }
    this.playedCards++;
  }
}

const htmlCard = document.getElementById("card");
const blackjack = new BlackJack(6);
blackjack.SortDeck();
blackjack.TakeCard();
console.log(blackjack.currentCard);
console.log(blackjack.scoreAceHigh);
console.log(blackjack.scoreAceLow);
blackjack.TakeCard();
console.log(blackjack.currentCard);
console.log(blackjack.scoreAceHigh);
console.log(blackjack.scoreAceLow);
blackjack.TakeCard();
console.log(blackjack.currentCard);
console.log(blackjack.scoreAceHigh);
console.log(blackjack.scoreAceLow);
console.log(`${blackjack.currentCard}.png`);
console.log()
htmlCard.src = `./Images/Cards/${blackjack.currentCard}.png`;
