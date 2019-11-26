const cardnumbers = {Two: 2,Three: 3,Four: 4,Five: 5,Six: 6,Seven: 7,Eight: 8,Nine: 9,Ten: 10,Jack: 10,Queen: 10,King: 10,Ace: [1, 14]};
const suits = ["Heart", "Spades", "Clubs", "Diamonds"];

export const ScoreTable = () => {
    let deck = {};
        for(let j = 0; j < suits.length;j++){
          for (let key of Object.keys(cardnumbers)) {
              let value = cardnumbers[key];
              let newkey = key + " " + suits[j];
              deck[newkey] = value;
          }
    }
    return deck;
  };

export const CreateDecks = (amount) => {
  let deck = [];
  for (let i = 0; i < amount; i++) {
      for(let j = 0; j < suits.length;j++){
        for (let key of Object.keys(cardnumbers)) {
            let newkey = key + " " + suits[j];
            deck.push(newkey);
        }
      }
  }
  return deck;
};




