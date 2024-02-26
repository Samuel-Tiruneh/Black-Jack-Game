player={
    name: "Samuel",
    cash: 120
}

let messageEl=document.getElementById('message-el');
let sumEl=document.getElementById('sum-el');
let cardsEl=document.getElementById('cards-el');
let firstCard=getRandomCard();
let secondCard=getRandomCard();
let cards=[firstCard];
let sum=cards[0];
let hasBlackJack=false;
let isAlive=true;
function startGame(){
    renderGame();
}
function renderGame(){
    cardsEl.textContent="Cards: ";
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent=cardsEl.textContent+" "+cards[i];

    }
    sumEl.textContent="Sum: "+sum;
    if(sum<=20){
        message="Do you want to Draw a new card?"
    }
    else if(sum===21){
        message="Wohoo! you've got BlackJack!";
        hasBlackJack=true
    }

    else{
        message="you are out of the game!";
        isAlive=false
    }
    messageEl.textContent=message;
}
 
function newCard(){
    if(isAlive===true && hasBlackJack===false){
let card=getRandomCard();
cards.push(card);
sum+=cards[cards.length-1];
// cardsEl.textContent=cardsEl.textContent+" - "+ card;
renderGame();
    }
}

function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*12)+1;
    if(randomNumber>10){
        randomNumber=10;
    }
    else if(randomNumber===1){
        randomNumber=11;

    }

    return randomNumber;
}

let playerEl=document.getElementById('player-el');
playerEl.textContent=player.name + ": $" + player.cash;

function cashManage(){
    if(hasBlackJack===true){
        player.cash+=20;
        playerEl.textContent=player.name + ": $" + player.cash;
    
    }
    else if(isAlive===false){
        player.cash-=20;
    playerEl.textContent=player.name + ": $" + player.cash-20;
    
    }
    }

    cashManage();