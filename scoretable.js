export class ScoreTable{
    constructor(){
        this.cardnumbers = {Two: 2,Three: 3,Four: 4,Five: 5,Six: 6,Seven: 7,Eight: 8,Nine: 9,Ten: 10,Jack: 10,Queen: 10,King: 10,Ace: [1, 14]};
        this.suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    }

    Create(){
        let table = {};
        for(let j = 0; j < this.suits.length;j++){
          for (let key of Object.keys(this.cardnumbers)) {
              let value = this.cardnumbers[key];
              let newkey = key + " " + this.suits[j];
              table[newkey] = value;
          }
    }
    return table;
    }
}