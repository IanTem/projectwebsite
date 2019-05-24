var score;
var playerCounter = 0;
var players = [];
var currentplayer;
var currentuserid = 0;
var specialScores = [];
specialScores[0] = 21;
specialScores[1] = 31;
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
    this.losePoints = 0; 
}
function createPlayers(){
    var amountPlayers = document.getElementById('amountplayers');
    var ap = parseInt(amountPlayers.value);

    
    
    
    for(var i = 0; i < ap; i++){
        players[i] = new Player(i, 'Player '+i);
    }
}
function startGame(){
   
    createPlayers();
    drawallusers();
    writecurrentuser(currentuserid);
    


}
  
var startGameButton = document.getElementById('startgame');
startGameButton.onclick = function(){
    createPlayers();
    drawallusers();
}
  
  //Prints dice roll to the page
  function printNumber(number, id) {
    var placeholder = document.getElementById(id);
    placeholder.innerHTML = number;
  }
  //calculate score
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

    //throwdicebutton
  var throwDiceButton = document.getElementById('throwdice');
  throwDiceButton.onclick = function() {
    var resultA = dice.roll();
    var resultB = dice.roll();
    printNumber(resultA, 'diceone');
    printNumber(resultB, 'dicetwo');

    score = calculatescore(resultA, resultB);
    printNumber(score, 'scoredice');


    
    

    //add the score
    players[currentuserid].score = score;

    
   
   if( players[currentuserid].timesThrown > 2){
       nextPlayer();
   }
   players[currentuserid].timesThrown += 1;
   
   
   console.log(players);
   drawallusers();
   writecurrentuser(currentuserid)
  }
  function nextPlayer(){
      
      currentuserid += 1;
      if(currentuserid > players.length -1){
        endGame();
    }
  }
  function writecurrentuser(id){
    var name = players[id].name;
    var score = players[id].score;
    var timesthrown = players[id].timesThrown;
    var currentuserfield = document.getElementById('currentuser');
    currentuserfield.innerHTML = "NAAM : "+name+" SCORE : "+ score + " TIMES THROWN: "+timesthrown+"<br><br>";
  }
  var nextplayerButton = document.getElementById('nextplayer');
  nextplayerButton.onclick = function(){
    currentuserid += 1;
    console.log(currentuserid);
    writecurrentuser(currentuserid);
  };
  function drawallusers(){
      var textfield= "";
      for(i=0;i<players.length; i++){
        textfield += "<p>  "+players[i].name+"  SCORE : "+players[i].score+"  TIMES THROWN: "+players[i].timesThrown+"LOSE POINTS"+players[i].losePoints+"</p>";
      }
      var scorebord = document.getElementById('scorebord');
      scorebord.innerHTML = textfield;
  }
  function endGame(){
      console.log("YOLO");
      checkallscores();
      resetscores();
      showWinner();
      drawallusers();

  }
  function checkallscores(){
    var largest = 600;
    var largestI = 0;
    for (i = 0; i < players.length; i++) {
        if(isSpecial(players[i].score) ){

        } else if (players[i].score < largest) {
            largest = players[i].score;
            largestI = i;
        }
  
    }
    players[largestI].losePoints += 1;
    
    //  console.log(largest);​
    //  console.log(largestI);​

  }
  function resetscores(){
    for(i=0;i<players.length; i++){
        players[i].score = 0;
        players[i].timesThrown = 0;
    }
    currentuserid = 0;
  }
  function showWinner(){

  }
  function isSpecial(specialpos){
      var isspecial = false;
        for(j=0; j<specialScores.length; j++)
            if (specialpos == specialScores[j]) {
                isspecial =  true;
            }
  
    return isspecial;
  }
  
  