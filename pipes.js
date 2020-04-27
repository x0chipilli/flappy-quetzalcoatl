class Pipe{
  constructor(speed){
    this.x = width
    this.w = 80
    this.gap = 150
    this.top = random(height/6, height*.75)
    this.bottom = height - (this.top + this.gap)
    this.speed = speed
    this.highlight = false
    this.pointsAdded = false
  }

  display(){
    fill(0,255,0)

    if(this.highlight){
      fill(255,0,0)
    }
  
    rect(this.x, 0, this.w, this.top)
    rect(this.x, this.top + this.gap, this.w, this.bottom)
  }

  move(){
    this.x -= this.speed
  }

  //cheks if the pipes has get out of the screen
  offscreen(){
    return (this.x < -this.w)
  }

  //game over if quetzalcoatl has hitted the pipes
  hit(q_coatl){
    if (q_coatl.y < this.top || q_coatl.y + q_coatl.r > height - this.bottom){
      if (q_coatl.x + q_coatl.r > this.x && q_coatl.x < this.x + this.w){
        gameOver = true
      }
    }
  }

  //add points if quetzalcoatl has passed tru the pipes
  addPoints(q_coatl){
    if (q_coatl.x > this.x + this.w && this.pointsAdded == false){
      points += 100
      this.pointsAdded = true
    }
  }
}