/*
    Paste the code for your week 5 exercise below.
*/
var words = ["Lake", "Roundabout", "Trafficlights", "Capital", "Mint"];

var index = 0;

function setup() {
    createCanvas(500, 400);
}
  
  function draw() {
    background(0);
  
    fill('#fae')
    textSize(32);
    text(words[index], 180, 200);
  }
  
  function mousePressed() {
    index = index + 1;
  
    if (index == words.length) {
      index = 0;
    }
  }
  