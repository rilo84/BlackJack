import {BlackJack} from "./blackjack.js";

const dealerCardImages = document.querySelectorAll(".dcard");
const playerCardImages = document.querySelectorAll(".card");
const startBtn = document.querySelector("#start");
const takeCardBtn = document.querySelector("#takeCard");
const dealerScoreLow = document.querySelector("#dealerScoreLow");
const dealerScoreHigh = document.querySelector("#dealerScoreHigh");
const playerScoreLow = document.querySelector("#playerScoreLow");
const playerScoreHigh = document.querySelector("#playerScoreHigh");
const bj = new BlackJack(6);

startBtn.addEventListener('click', () => {
    bj.SortDeck();
    bj.DealerTakeCard();
    dealerScoreLow.textContent = `Score low: ${bj.dealerScoreAceLow}`;
    dealerScoreHigh.textContent = `Score high: ${bj.dealerScoreAceHigh}`;
    DealerImages(bj);
});

takeCardBtn.addEventListener('click', () =>{
    bj.PlayerTakeCard();
    playerScoreLow.textContent = `Score low: ${bj.scoreAceLow}`;
    playerScoreHigh.textContent = `Score high: ${bj.scoreAceHigh}`;
    PlayerImages(bj);
})

const DealerImages = () => {
    let count = 0;
    dealerCardImages.forEach(item => {
      if(count < bj.dealerCards.length){
        item.src = `./Images/Cards/${bj.dealerCards[count]}.png`;
      }
      count++;
    });
};

const PlayerImages = () => {
    let count = 0;
    playerCardImages.forEach(item => {
      if(count < bj.playerCards.length){
        item.src = `./Images/Cards/${bj.playerCards[count]}.png`;
      }
      count++;
    });
};


