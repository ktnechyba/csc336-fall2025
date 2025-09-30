 // any intialization should be done in setip function for p5
let why = [];
function setup() {
 // put setup code here
  createCanvas(600, 400);
  noStroke();
  for (let i = 0; i<7;i++){
    let dot =  new Dot(width/2, height/2, i);
    why.push(dot);
  }
 //can change colorMode(HSB);
}


//update function
function draw() {
  // put drawing code here
  background(255,255,255,1); //pass in red green blue values
  for (let dot of why){
    dot.draw();
  }
  
  // fill(255,255,255);
  // strokeWeight(1);

  // ellipse(mouseX, mouseY,80,80);
}

class Dot{
  constructor(x,y,i){
    this.x =x;
    this.y =y;
    this.hue = Math.random()*360;
    this.id = i;
    this.radius = 30+ why.length - this.id *2;
    this.velocityx = random(-5,5);
    this.velcoityy = random(-5,5);
  }

  draw(){
    // this.x += -0.5 + Math.random();
    // this.y += -0.5 + Math.random();

    this.x = this.velocityx;
    this.y = this.velcoityy;

    if (this.x > width || this.x<0){
      this.velocityx *-1
    }
    if (this.y > height|| this.y<0){
      this.velcoityy*-1
    }
    fill(this.hue, 60, 12);
    ellipse(this.x, this.y, this.radius);
  }
}
