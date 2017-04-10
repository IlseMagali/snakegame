//alert("hola");

document.addEventListener("keydown", goAhead); // ----


var layout = document.getElementById("layout");
var snakeHead = document.getElementById("snakeHead");
var button = document.getElementById("restart");

button.addEventListener("click", start);

var positionInitialX = 0;
var positionInitialY = 0;
var go = 21;
var limit = 470;




function goAhead(game){

  switch (game.keyCode){
    case 38: // top
      positionInitialY -= go;
      if (positionInitialY < 0){
        gameOver();
      }
      else{
        snakeHead.style.marginTop = positionInitialY + "px";
      }
      break;

    case 40: // down
      positionInitialY += go;
      if (positionInitialY > limit){
        gameOver();
      }
      else {
        snakeHead.style.marginTop = positionInitialY + "px";
      }
      break;

    case 37: // left
      positionInitialX -= go;
      if (positionInitialX < 0){
        gameOver();
      }
      else {
        snakeHead.style.marginLeft = positionInitialX + "px";
      }
      break;

    case 39: // right
      positionInitialX += go;
      if (positionInitialX > limit) {
        gameOver();
      }
      else {
        snakeHead.style.marginLeft = positionInitialX + "px";
      }
      break;

    default:
      alert("Pulsaste una tecla inválida");

      break;
  }

}

function start() {
  positionX = 0;
  positionY = 0;
  snakeHead.style.marginTop = positionY;
  snakeHead.style.marginLeft = positionX;
  document.addEventListener("keydown", goAhead);
}

function gameOver() {
  alert("Game Over, try again.");
  document.removeEventListener("keydown", goAhead);
}







/*
function goAheadLeft(){
  for (var i = 0; i < limit; i++){
    positionInitialX += goX;
  }

}

teclas["left"].addEventListener("keypress", goAheadLeft);
*/
