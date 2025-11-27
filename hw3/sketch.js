let charY;
let velocityY = 0;
let gravity = 0.6;
let jumpPower = -15;
let isMouthOpen = false;

let skinColor, hairColor, shirtColor, lineColor, backgroundColor;

function setup() {
  createCanvas(600, 400);
  
  frameRate(30); // 부드러운 움직임을 위해 프레임 좀 높였습니다 (원래 5였음)
  
  // 웹사이트 테러 방지를 위해 자동 저장은 껐습니다.
  // saveGif('myAnimation.gif', 50);
  
  skinColor = color(255, 230, 210);
  hairColor = color(70, 70, 70);
  shirtColor = color(100, 150, 220);
  lineColor = color(0);
  backgroundColor = color(220, 230, 220);
  
  charY = 250;
}

function draw() {
  background(backgroundColor);

  velocityY += gravity;
  charY += velocityY;
  
  if (charY > 250) {
    charY = 250;
    velocityY = 0;
  }
  
  let breath = sin(frameCount * 0.05) * 3;

  push();
  
  translate(width / 2, charY + breath);

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
  
  let pupilX = map(mouseX, 0, width, -6, 6);
  let pupilY = map(mouseY, 0, height, -4, 4);
  
  if (mouseIsPressed) {
    stroke(lineColor);
    strokeWeight(2);
    line(-60, -20, -20, -20);
    line(20, -20, 60, -20);
  } else {
    fill(lineColor);
    noStroke();
    ellipse(-40 + pupilX, -20 + pupilY, 15, 15);
    ellipse(40 + pupilX, -20 + pupilY, 15, 15);
  }

  fill(skinColor);
  stroke(lineColor);
  strokeWeight(2);
  beginShape();
  vertex(0, 0); 
  vertex(10, 30);
  vertex(-10, 30);
  endShape(CLOSE);
  
  if (isMouthOpen) {
    fill(lineColor);
    ellipse(0, 60, 25, 25);
  } else {
    fill(255, 150, 150);
    stroke(lineColor);
    strokeWeight(2);
    ellipse(0, 60, 55, 15); 
  }
  
  pop();

  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(14);
  text("MOUSE: Eyes follow cursor / CLICK: Blink", width / 2, 30);
  text("KEYBOARD: SPACE = Jump / C = Change Shirt / O = Open/Close Mouth", width / 2, 50);
}

function keyPressed() {
  if (key === ' ' && charY === 250) {
    velocityY = jumpPower;
  }
  
  if (key === 'c' || key === 'C') {
    shirtColor = color(random(255), random(255), random(255));
  }
  
  if (key === 'o' || key === 'O') {
    isMouthOpen = !isMouthOpen;
  }
}