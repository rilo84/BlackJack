import { Deck } from "./deck.js";
import {ScoreTable} from "./scoretable.js";

export class BlackJack {
  constructor(deckAmount = 6) {
    this.deckAmount = deckAmount;
    this.deck = new Deck(2).Create();
    this.scoretable = new ScoreTable().Create();
    this.playedCards = 0;
    this.scoreAceHigh = 0;
    this.scoreAceLow = 0;
    this.dealerScoreAceLow = 0;
    this.dealerScoreAceHigh = 0;
    this.playerCards =[];
    this.dealerCards = [];
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

  PlayerTakeCard() {
    let card = this.deck[this.playedCards];
    this.playerCards.push(card);
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

  DealerTakeCard() {
    let card = this.deck[this.playedCards];
    this.dealerCards.push(card);
    if(typeof this.scoretable[card] === 'number'){
      this.dealerScoreAceLow += this.scoretable[card];
      this.dealerScoreAceHigh += this.scoretable[card];
    }
    else{
      this.dealerScoreAceLow += this.scoretable[card][0];
      this.dealerScoreAceHigh += this.scoretable[card][1];
    }
    this.playedCards++;
  }
}



