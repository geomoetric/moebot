var x,
y,
w1
w2,
h1,
h2;

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

  this.w1 = this.x - (this.diameter / 2);
  this.w2 = this.x + (this.diameter / 2);
  this.h1 = this.y - (this.diameter / 2);
  this.h2 = this.y + (this.diameter / 2);

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

function mousePressed() {
  // if ( mouseX >= bounds.x && mouseX <= bounds.x + bounds.w &&
  //var c = testo.diameter/2;
  //console.log('diameter: ' + testo.diameter);
  //var d = dist(mouseX, mouseY, c, c);
  //console.log('distance: ' + d);

  console.log('Width: ' + testo.w1 + '-' + testo.w2)
  console.log('Height: ' + testo.h1 + '-' + testo.h2)
  console.log('Mouse: x=' + mouseX + ', y=' + mouseY)

  //if (d < testo.diameter) {
  
  if ( mouseX >= testo.w1 && mouseX <= testo.w2 && mouseY >= testo.h1 && mouseY <= testo.h2) {
    alert('click');
  }
  // }
}
