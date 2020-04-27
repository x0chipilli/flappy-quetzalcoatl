class Quetzalcoatl{
  constructor(png){
    this.x = 100
    this.y = height/2
    this.r = 70
    this.png = png
    this.speed = 0
    this.gravity = 0.7
    this.lift = -7
  }

  display(){
    image(this.png, this.x, this.y, this.r, this.r)
  }

  up(){
    this.speed = this.lift
  }

  move(){
    this.speed += this.gravity
    this.y += this.speed

    //prevent quetz getting out of the screen
    if (this.y >= height - this.r){
      this.y = height - this.r
    }
    if (this.y <= 0){
      this.y = 0
    }
  }
}