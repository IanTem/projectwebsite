var playerHold = false;

var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}
function Player(id, name){
    this.id = id;
    this.name = name;
    this.score = 0;
    this.timesThrown = 0; 
}


//Prints dice roll to the page

function printNumber(number, id) {
  var placeholder = document.getElementById(id);
  placeholder.innerHTML = number;
}
function calculatescore(a,b){
    var score;
    if(a == b){
        score = a * 100;
    } else if(a < b){
        score = b*10+a;
    }
    else{
        score = a*10+b;
    }
    return score;
}
var throwDiceButton = document.getElementById('throwdice');
var startGameButton = document.getElementById('startgame');
var counter = 0;
var playerCounter = 0;

throwDiceButton.onclick = function() {
  var resultA = dice.roll();
  var resultB = dice.roll();
  printNumber(resultA, 'diceone');
  printNumber(resultB, 'dicetwo');

  //calculate the score
  var score = calculatescore(resultA, resultB);
  printNumber(score, 'scoredice');

    //give current player the score
    //TODO ask if you want another throw

    var currentPlayer = player[playerCounter];
    currentPlayer.score = score;
    currentPlayer.timesThrown += 1;
    console.log(currentPlayer);

    var playername = document.getElementById('playername');
    playername.innerHTML = currentPlayer.name + " ID : " + currentPlayer.id;
    
    //hold the score?
    //is counter 3 or does player want to hold?

    if(playerHold = true ||counter > 2){
        currentPlayer.score = score;
        playerCounter += 1;
    }else{
        //another throw if you want and not total throws += 3 ;

    }
    //next player 
    if(counter % player.length == 1){
        counter = 0;
    }else{
        counter += 1;
    }
   


};
var player = new Array();
startGameButton.onclick = function(){
    var amountPlayers = document.getElementById('amountplayers');
    var ap = amountPlayers.value;
    
    
    for(var i = 0; i < ap; i++){
        player[i] = new Player(i, 'kees');
    }

};
var houvastButton = document.getElementById('houvast');
houvastButton.onclick = function(){
    playerHold = true;
};


