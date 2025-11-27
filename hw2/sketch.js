let skinColor, hairColor, shirtColor, lineColor, backgroundColor;

function setup() {
  createCanvas(600, 400);
  

  skinColor = color(255, 230, 210);
  hairColor = color(70, 70, 70);
  shirtColor = color(100, 150, 220);
  lineColor = color(0);
  backgroundColor = color(220, 230, 220);
}

function draw() {
  background(backgroundColor);

  let fixedX = width / 2;
  let fixedY = 250; 

  push();
  
  translate(fixedX, fixedY);

  fill(skinColor);
  stroke(lineColor);
  strokeWeight(2);
  rect(-45, 15, 90, 70); 

  fill(shirtColor);
  stroke(lineColor);
  strokeWeight(2);
  beginShape();
  vertex(-150, 150); 
  vertex(150, 150);  
  vertex(150, 85);   
  vertex(0, 100);    
  vertex(-150, 85);  
  endShape(CLOSE);
  
  fill(skinColor);
  stroke(lineColor);
  strokeWeight(2);
  ellipse(0, 0, 180, 240); 

  arc(-90, -5, 25, 50, HALF_PI, PI + HALF_PI); 
  arc(90, -5, 25, 50, PI + HALF_PI, HALF_PI);

  fill(hairColor);
  noStroke();
  arc(0, -80, 180, 180, PI, TWO_PI); 
  triangle(-90, -80, 0, -80, -90, -50);

  fill(255);
  stroke(lineColor);
  strokeWeight(2);
  ellipse(-40, -20, 45, 28); 
  ellipse(40, -20, 45, 28);  
  
  fill(lineColor);
  noStroke();
  ellipse(-40, -20, 15, 15);
  ellipse(40, -20, 15, 15);

  fill(skinColor);
  stroke(lineColor);
  strokeWeight(2);
  beginShape();
  vertex(0, 0); 
  vertex(10, 30);
  vertex(-10, 30);
  endShape(CLOSE);
  
  fill(255, 150, 150);
  stroke(lineColor);
  strokeWeight(2);
  ellipse(0, 60, 55, 15); 
  
  pop();

}

