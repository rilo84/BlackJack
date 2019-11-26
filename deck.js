export class Deck {
  constructor(amount) {
      this.amount =  amount;
    this.cardnumbers = {
      Two: 2,
      Three: 3,
      Four: 4,
      Five: 5,
      Six: 6,
      Seven: 7,
      Eight: 8,
      Nine: 9,
      Ten: 10,
      Jack: 10,
      Queen: 10,
      King: 10,
      Ace: [1, 14]
    };
    this.suits = ["Heart", "Spades", "Clubs", "Diamonds"];
  }

  Create() {
    let deck = [];
    for (let i = 0; i < this.amount; i++) {
      for (let j = 0; j < this.suits.length; j++) {
        for (let key of Object.keys(this.cardnumbers)) {
          let newkey = key + " " + this.suits[j];
          deck.push(newkey);
        }
      }
    }
    return deck;
  }
}
