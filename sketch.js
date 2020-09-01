var  database, canvas;
var gameState;
var playerCount;
var form,game,player;
var allPlayers;

function setup(){
  database = firebase.database();
 
  canvas = createCanvas(400,400);

gameState = 0
game = new Game();
game.getState();
game.start();

 
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
} 


