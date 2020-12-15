class Circle {
  constructor(x,y,r) {

    
    this.x = x;
    this.y = y;
    this.r = r
    
  }

   move(){
    this.x = this.x + random(3,-3);
    this.y = this.y + random(3,-3);
  
 }
  
  show(){
    // stroke("white");
    // strokeWeight(2);
    noStroke();
    fill(255,10);
    // noFill();
    ellipse(this.x,this.y,this.r,this.r);
  }
}
