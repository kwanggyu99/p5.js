function setup() {
  createCanvas(600, 400);
  frameRate(10);
  // saveGif는 웹사이트 테러 방지를 위해 주석 처리했습니다.
  // saveGif('final_project.gif', 10, { units: 'seconds' });
}

function draw() {
  let time = millis() / 1000.0;
  let step = frameCount * 0.3;

  background(220);

  noStroke();

  let c1 = color(255, 180, 180);
  let c2 = color(200, 100, 255);
  let value = (sin(time) + 1) / 2;
  let changeColor = lerpColor(c1, c2, value);

  fill(changeColor);
  circle(0, 0, 350);

  fill(255, 100, 100);
  circle(0, 0, 210);
  fill(255, 0, 0);
  circle(0, 0, 110);

  fill(180, 180, 255);
  circle(600, 400, 350);
  fill(100, 100, 255);
  circle(600, 400, 210);
  fill(50, 50, 200);
  circle(600, 400, 110);

  stroke(0, 255, 0);
  strokeWeight(5);
  let greenLineY = sin(step * 2) * 15;
  line(0, 400 + greenLineY, 600, greenLineY);

  strokeWeight(3);

  let yPos = cos(step) * 8;

  stroke(150, 50, 0);
  fill(255, 150, 50);
  triangle(22, 380 + yPos, 90, 380 + yPos, 37, 290 + yPos);

  stroke(0, 50, 150);
  fill(70, 150, 240);
  rect(112, 335 + yPos, 90, 44);

  stroke(180, 180, 0);
  fill(240, 230, 80);
  ellipse(112, 277 + yPos, 75, 36);

  stroke(180, 0, 50);
  fill(255, 100, 130);
  rect(75, 219 + yPos, 97, 44);

  stroke(0, 100, 50);
  fill(80, 200, 120);
  triangle(142, 262 + yPos, 232, 240 + yPos, 172, 190 + yPos);

  let xPos = sin(step) * 8;

  stroke(0, 100, 100);
  
  if (frameCount % 6 < 3) {
    fill(80 + random(-30, 30), 220, 180);
  } else {
    fill(80, 220, 180);
  }
  
  triangle(195 + xPos, 102 + xPos, 180 + xPos, 182 + xPos, 135 + xPos, 153 + xPos);

  stroke(180, 100, 0);
  fill(240, 170, 50);
  rect(195 + xPos, 58 + xPos, 75, 36);

  stroke(100, 0, 150);
  fill(180, 80, 255);
  ellipse(240 + xPos, 102 + xPos, 60, 36);

  let s = map(sin(step * 3), -1, 1, -4, 4);

  stroke(150, 50, 0);
  fill(230, 130, 80);
  rect(412 - s, 58 - s, 67 + s * 2, 44 + s * 2);

  stroke(0, 50, 150);
  fill(100, 180, 255);
  triangle(472, 73 - s, 525 + s, 116 + s, 442 - s, 138 + s);
  
  stroke(180, 180, 0);
  fill(250, 230, 100);
  ellipse(495, 51, 82 + s * 2, 44 + s * 2);

  let slide = cos(time * 2) * 15;

  stroke(0, 50, 150);
  fill(80, 180, 240);
  ellipse(375 + slide, 255, 45, 25);

  stroke(100, 0, 100);
  fill(160, 80, 200);
  rect(412 + slide, 219, 105, 36);

  stroke(120, 80, 0);
  fill(255, 200, 120);
  triangle(435 + slide, 262, 517 + slide, 255, 465 + slide, 196);
}