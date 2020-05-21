const SIZE = 180; //player and obstacle height/width
const PX = SIZE + 20; //player position, must not draw over this position with obstacle image or canvas background
const SPEED = 15; //milliseconds in between calls of the update() function when the game begins

//Canvas-related variables
var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  width = 900,
  height = 500;


//Called repeatedly to update visuals and check for input or the game ending
function update()
{
  //If we receive audio in the adequate frequency/volume range, remove and redraw a random obstacle, reset variables as appropriate
  //TODO


  //Otherwise we continue to redraw the currently approaching obstacle and check if the player lost the game

  ctx.fillStyle = "skyblue";
  ctx.fillRect(PX,0,canvas.width-PX,canvas.height);
  if (obsx > PX)
  {
    ctx.drawImage(obs,obsx-1,obsy,SIZE,SIZE);
    obsx = obsx - 1;
  }
  else
    alert("GAME OVER");
}


/**********************************************************************************************************************************/


//Set the canvas height and width
canvas.width = width;
canvas.height = height;


//Create the obstacle image, set its properties
var obs = new Image();
obs.onload = function()
{
  ctx.drawImage(obs,width-PX,height-PX,SIZE,SIZE);   
  obsx = width;
  obsy = height-PX;
};
//TODO randomly pick from an assortment of possible obstacle images, then set properties as appropriate (must make additional vars)
//For now, it's just this picture of tony the tiger and no properties because we can't receive audio input yet
obs.src = "./tony.jpg";


//Create the player image, set its properties
var playerImg = new Image();
playerImg.onload = function()
{
  ctx.drawImage(playerImg,PX-SIZE,canvas.height-PX,SIZE,SIZE);
}
playerImg.src = "./player.jpeg";


//Call the update function every 15 milliseconds
setInterval(update, SPEED); //TODO make this speed gradually increase, possibly with another setInterval call and another function

