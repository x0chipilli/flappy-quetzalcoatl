var pipes = []
var q_coatl
var q_coatl_png
var bg
var bgX = 0
var points = 0
var gameOverScreen
var gameOver
var speed = 2
var framesChange = 140

function preload(){
  q_coatl_png = loadImage('./img/quet.png')
  bg = loadImage('./img/tenochtitlan.png')
}

function setup() {
  createCanvas(400,600)
  pipes.push(new Pipe(speed))
  q_coatl = new Quetzalcoatl(q_coatl_png)

  gameOverScreen = createGraphics(width, height) 
  gameOver = false 
}

function draw() {
  //background
  image(bg,bgX,0,1000,height)

  //Pipes animation
  for(let i = pipes.length-1; i >= 0; i--){
    pipes[i].display()
    pipes[i].move()

    //check if the quetzal has hittted the pipes
    //pipes[i].hit(q_coatl)
    //if quetzalcoatl has passed tru the pipes, add points
    pipes[i].addPoints(q_coatl)

    //delete pipe from the array if it get out of the screen
    if (pipes[i].offscreen()){
      pipes.splice(i, 1)
    }
  }

  //add new pipes each 140 frames
  if (frameCount % framesChange == 0){
    pipes.push(new Pipe(speed))
  }
  //add difficulty each 1000 frames
  if (frameCount % 1000 == 0){
    speed ++
  }

  //quetzalcoatl animation
  q_coatl.display()
  q_coatl.move()

  //points counter
  push()
  fill(255,255,0)
  textSize(30)
  text(points.toString(), 330, 40)
  pop()

  //background movement
  bgX -= 0.05

  //--GAMEOVER--
  if (gameOver){
    gameOverScreen.background(255,0,0, 100)
    gameOverScreen.fill(0,0,255)
    gameOverScreen.textSize(32)
    gameOverScreen.text('GAME OVER', 100,200)
    gameOverScreen.text(`score: ${points.toString()}`, 100, 250)
    image(gameOverScreen,0,0)
    noLoop()
  }
}

function keyPressed(){
  if (key == ' '){
    q_coatl.up()
  }
}

function touchStarted(){
  if (key == ' '){
    q_coatl.up()
  }
}