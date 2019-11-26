import { Deck } from "./deck.js";
import {ScoreTable} from "./scoretable.js";

class BlackJack {
  constructor(deckAmount) {
    this.deckAmount = deckAmount;
    this.deck = new Deck(2).Create();
    this.scoretable = new ScoreTable().Create();
    this.playedCards = 0;
    this.scoreAceHigh = 0;
    this.scoreAceLow = 0;
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

  PlayCard() {
    let card = blackjack.deck[this.playedCards];
    if(typeof this.scoretable[card] === 'number'){
      this.scoreAceLow = this.scoreAceHigh += this.scoretable[card];
    }
    else{
      this.scoreAceLow += this.scoretable[card][0];
      this.scoreAceHigh += this.scoretable[card][1];
    }
    this.playedCards++;
  }
}

const blackjack = new BlackJack(6);
blackjack.SortDeck();
blackjack.PlayCard();
console.log(blackjack.scoreAceHigh);
console.log(blackjack.scoreAceLow);
blackjack.PlayCard();
console.log(blackjack.scoreAceHigh);
console.log(blackjack.scoreAceLow);
blackjack.PlayCard();
console.log(blackjack.scoreAceHigh);
console.log(blackjack.scoreAceLow);
