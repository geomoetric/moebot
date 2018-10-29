var x;
var y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#f8f8f9');
  x = width/2;
  y = height/2;
  testo = new rand();
}

function windowResized() {
  //resizeCanvas(windowWidth, windowHeight);
  redraw();
}

function draw() {
  fill('#18181a')
  ellipse(56, 46, 55, 55);
  testo.display()

  downvote = createButton('&#128078;');
  downvote.position(width/2-30, height-40);
  downvote.mousePressed(testo)

  upvote = createButton('&#128077;');
  upvote.position(width/2+30, height-40);
  upvote.mousePressed(testo())
  //button.mousePressed(greet);
}

function rand() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(width/9, width/5);

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };

}

