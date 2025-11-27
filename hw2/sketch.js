let skinColor, hairColor, shirtColor, lineColor, backgroundColor;

function setup() {
  createCanvas(600, 400);
  
  // 애니메이션, GIF 저장, 프레임 설정 등 모든 움직임 요소 삭제

  skinColor = color(255, 230, 210);
  hairColor = color(70, 70, 70);
  shirtColor = color(100, 150, 220);
  lineColor = color(0);
  backgroundColor = color(220, 230, 220);
}

function draw() {
  background(backgroundColor);

  // 움직임 변수(velocity, gravity, sin 등) 전부 제거하고 고정 좌표 사용
  let fixedX = width / 2;
  let fixedY = 250; 

  push();
  
  translate(fixedX, fixedY);

  // 몸통
  fill(skinColor);
  stroke(lineColor);
  strokeWeight(2);
  rect(-45, 15, 90, 70); 

  // 셔츠
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
  
  // 얼굴
  fill(skinColor);
  stroke(lineColor);
  strokeWeight(2);
  ellipse(0, 0, 180, 240); 

  // 귀
  arc(-90, -5, 25, 50, HALF_PI, PI + HALF_PI); 
  arc(90, -5, 25, 50, PI + HALF_PI, HALF_PI);

  // 머리카락
  fill(hairColor);
  noStroke();
  arc(0, -80, 180, 180, PI, TWO_PI); 
  triangle(-90, -80, 0, -80, -90, -50);

  // 눈 (흰자)
  fill(255);
  stroke(lineColor);
  strokeWeight(2);
  ellipse(-40, -20, 45, 28); 
  ellipse(40, -20, 45, 28);  
  
  // 눈동자 (마우스 추적 로직 삭제 -> 정중앙 고정)
  fill(lineColor);
  noStroke();
  ellipse(-40, -20, 15, 15);
  ellipse(40, -20, 15, 15);

  // 코
  fill(skinColor);
  stroke(lineColor);
  strokeWeight(2);
  beginShape();
  vertex(0, 0); 
  vertex(10, 30);
  vertex(-10, 30);
  endShape(CLOSE);
  
  // 입 (변수 삭제 -> 닫힌 입 모양으로 고정)
  fill(255, 150, 150);
  stroke(lineColor);
  strokeWeight(2);
  ellipse(0, 60, 55, 15); 
  
  pop();
  
  // 텍스트 설명(점프하세요 등)도 기능이 없어졌으므로 삭제했습니다.
}

// function keyPressed() 전체 삭제됨