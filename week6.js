/*
    Paste the code for your week 6 exercise below.
*/
let x = 50;
let y = 100;

function setup() {
  createCanvas(500, 500);
    background('red');
  fill('#fae');
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  clear();
  ellipse(x, y, 20, 20);
}