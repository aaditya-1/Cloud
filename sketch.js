var circles = [];

function setup() {
createCanvas(windowWidth, windowHeight);  

}


function mouseDragged(){
    for(var i = 0; i < 1; i++){
    // var x1 = random(width);
    // var y1 = random(height);
    var r1 = random(50,10);
      
    var x1 = mouseX
    var y1 = mouseY;
      
    var c = new Circle(x1,y1,r1);
      
      circles.push(c)
  }
  
}

function draw() {

  
   resizeCanvas(windowWidth, windowHeight);
    background(0);
  
   for(var i = 0; i < circles.length; i++){

   circles[i].show();
   circles[i].move();     
     
  }
  

  // console.log(c1);
  
  fill("yellow");
  textSize(32);
  text("Drag to create",50,50);
  
  
}

