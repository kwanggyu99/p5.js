function setup() {
  createCanvas(600, 400);
  // 애니메이션 관련 설정(frameRate, saveGif) 전부 삭제
}

function draw() {
  background(220);
  noStroke();

  // 1. 배경 원 (색상 고정: 딱 중간색)
  let c1 = color(255, 180, 180);
  let c2 = color(200, 100, 255);
  let changeColor = lerpColor(c1, c2, 0.5); // 변화 없이 중간색 고정

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

  // 2. 녹색 선 (흔들림 제거)
  stroke(0, 255, 0);
  strokeWeight(5);
  line(0, 400, 600, 0); // y좌표 변동 없이 직선

  strokeWeight(3);

  // 3. 도형들 위치 고정 (변수들을 0 또는 고정값으로 변경)
  let yPos = 8; // 위아래 움직임 고정

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

  let xPos = 0; // 좌우 움직임 0으로 고정

  stroke(0, 100, 100);
  fill(80, 220, 180); // 반짝이는 효과 제거하고 단색 고정
  
  triangle(195, 102, 180, 182, 135, 153);

  stroke(180, 100, 0);
  fill(240, 170, 50);
  rect(195, 58, 75, 36);

  stroke(100, 0, 150);
  fill(180, 80, 255);
  ellipse(240, 102, 60, 36);

  let s = 0; // 크기 변화(숨쉬기) 0으로 고정

  stroke(150, 50, 0);
  fill(230, 130, 80);
  rect(412, 58, 67, 44);

  stroke(0, 50, 150);
  fill(100, 180, 255);
  triangle(472, 73, 525, 116, 442, 138);
  
  stroke(180, 180, 0);
  fill(250, 230, 100);
  ellipse(495, 51, 82, 44);

  let slide = 15; // 미끄러지는 움직임 고정값

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