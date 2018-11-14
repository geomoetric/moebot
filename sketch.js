var sel; // Selection area
var buttons = []; // Array of design objects
var gridTopLefts = [];
var gridCenters = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#f8f8f9');

  // Create grid
  //grid();
  // Load design objects
  for (var i = 0; i < 5; i++) {
    buttons.push(new rand());
  }

  testo = new rand();
}

function windowResized() {
  redraw();
}

function draw() {
  fill('#18181a');
  noStroke();
  testo.display();
  sel = width/40;

  for (var i=0; i<buttons.length; i++) {
    buttons[i].display();
  }
  
  // downvote = createButton('&#128078;');
  // downvote.position(width/2-30, height-40);
  // downvote.mousePressed(testo);

  // upvote = createButton('&#128077;');
  // upvote.position(width/2+30, height-40);
  // upvote.mousePressed(testo());
}

// Grid Function
function grid() {

  function storeCoordinate(xVal, yVal, array) {
    array.push({x: xVal, y: yVal});
  }

  var wWidth = windowWidth;
  var wHeight = windowHeight;
  var baseWidth, baseHeight, gridWidth, gridHeight, cellWidth, cellHeight;

  if (width < height) {
    baseWidth = wWidth / 30;
    baseHeight = wHeight / 40;

    gridWidth = wWidth - (4 * baseWidth);
    gridHeight = wHeight - (6 * baseHeight);

    cellWidth = (gridWidth - (3 * baseWidth)) / 4;
    cellHeight = (gridHeight - (4 * baseHeight)) / 5;

    startX = baseWidth * 2;
    startY = baseHeight * 2;

    while (y <= 5) {
      yVal = (y * (cellHeight + baseHeight)) + startY;
      while (x <= 4) {
        xVal = (x * (cellWidth + baseWidth)) + startX;
        storeCoordinate(xVal, yVal, gridTopLefts);
      }
    }
  } else {
    baseWidth = wWidth / 40;
    baseHeight = wHeight / 30;

    gridWidth = wWidth - (6 * baseWidth);
    gridHeight = wHeight - (4 * baseHeight);

    cellWidth = (gridWidth - (4 * baseWidth)) / 5;
    cellHeight = (gridHeight - (3 * baseHeight)) / 4;

    startX = baseWidth * 2;
    startY = baseHeight * 2;

    var y = 0;
    var x = 0;

    while (y <= 5) {
      yVal = (y * (cellHeight + baseHeight)) + startY;
      while (x <= 4) {
        xVal = (x * (cellWidth + baseWidth)) + startX;
        storeCoordinate(xVal, yVal, gridTopLefts);
      }
    }
  }

  // var coords = [];
  // storeCoordinate(3, 5, coords);
  // storeCoordinate(19, 1000, coords);
  // storeCoordinate(-300, 4578, coords);

  // coords[0].x == 3   // x value
  // coords[0].y == 5   // y value

  // // to loop through coordinate values
  // for (var i = 0; i < coords.length; i++) {
  //   var x = coords[i].x;
  //   var y = coords[i].y;
  // }

  // Check proportions
  // console.log('width: ' + wWidth + ', height: ' + wHeight + ', baseWidth: ' + baseWidth + ', baseHeight: ' + baseHeight);
  //console.log('width: ' + wWidth + ', height: ' + wHeight + ', gridWidth: ' + gridWidth + ', gridHeight: ' + gridHeight);
  //console.log('width: ' + wWidth + ', height: ' + wHeight + ', gridWidth: ' + gridWidth + ', gridHeight: ' + gridHeight + ', cellWidth: ' + cellWidth + ', cellHeight: ' + cellHeight);
  console.log(gridTopLefts);

}
// Object Template
function rand() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(width/9, width/5);
  this.liked = 0;

  this.w1 = this.x - (this.diameter / 2);
  this.w2 = this.x + (this.diameter / 2);
  this.h1 = this.y - (this.diameter / 2);
  this.h2 = this.y + (this.diameter / 2);

  this.click = function() {

    if (this.liked < 2) {
      this.liked += 1;
    } else {
      this.liked = 0;
    }

    if (this.liked == 1) {
      this.like();
    } else if (this.liked == 2) {
      this.dislike();
    } else {
      fill('#f8f8f9');
      ellipse(this.x, this.y, this.diameter + sel + 10, this.diameter + sel + 10);
      this.display();
    }

  }

  this.like = function() {
    fill('#40826d');
    ellipse(this.x, this.y, this.diameter + sel, this.diameter + sel);
    this.display();
    console.log('INSERT INTO `table_name`(time, element, liked, x, y, w, h) VALUES (' + Date.now() + ', circle, TRUE, ' + this.x + ', ' + this.y + ', ' + this.diameter + ', ' + this.diameter + ');');
  };

  this.dislike = function() {
    fill('#e32636');
    ellipse(this.x, this.y, this.diameter + sel, this.diameter + sel);
    this.display();
    console.log('INSERT INTO `table_name`(time, element, liked, x, y, w, h) VALUES (' + Date.now() + ', circle, FALSE, ' + this.x + ', ' + this.y + ', ' + this.diameter + ', ' + this.diameter + ');');
  };

  this.display = function() {
    fill('#18181a');
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

function mousePressed() {

  if ( mouseX >= testo.w1 && mouseX <= testo.w2 && mouseY >= testo.h1 && mouseY <= testo.h2) {
    testo.click();
  }
}
