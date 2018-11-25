var sel; // Selection area
var buttons = []; // Array of design objects
var gridTopLefts = [];
var gridCenters = [];
var wWidth, wHeight, baseWidth, baseHeight, gridWidth, gridHeight, cellWidth, cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#f8f8f9');

  // Create grid
  grid();

  // Load design objects
  for (var i = 0; i < 5; i++) {
    buttons.push(new rand());
  }

  //testo = new rand();
}

function windowResized() {
  redraw();
}

function draw() {
  fill('#18181a');
  noStroke();
  //testo.display();
  sel = width/40;

  for (var i=0; i<buttons.length; i++) {
    buttons[i].display();
  }
}

// Grid Function
function grid() {

  function storeCoordinate(xVal, yVal, array) {
    array.push({ x: xVal, y: yVal });
  }

  wWidth = windowWidth;
  wHeight = windowHeight;

  // Portrait mode
  if (width < height) {
    baseWidth = wWidth / 30;
    baseHeight = wHeight / 40;

    gridWidth = wWidth - (4 * baseWidth);
    gridHeight = wHeight - (6 * baseHeight);

    cellWidth = (gridWidth - (3 * baseWidth)) / 4;
    cellHeight = (gridHeight - (4 * baseHeight)) / 5;

    startX = baseWidth * 1;
    startY = baseHeight * 1;

    y = 0;
    x = 0;

    while (y < 5) {
      yVal = ((y * (cellHeight + baseHeight)) + startY).toFixed(2);
      while (x < 4) {
        xVal = ((x * (cellWidth + baseWidth)) + startX).toFixed(2);
        storeCoordinate(xVal, yVal, gridTopLefts);
        x = x + 1;
      }
      y = y + 1;
      x = 0;
    }

    // Landscape Mode
  } else {
    baseWidth = wWidth / 40;
    baseHeight = wHeight / 30;

    gridWidth = wWidth - (4 * baseWidth);
    gridHeight = wHeight - (6 * baseHeight);

    cellWidth = (gridWidth - (4 * baseWidth)) / 5;
    cellHeight = (gridHeight - (3 * baseHeight)) / 4;

    startX = baseWidth * 2;
    startY = baseHeight * 2;

    y = 0;
    x = 0;

    while (y < 4) {
      yVal = ((y * (cellHeight + baseHeight)) + startY).toFixed(2);
      while (x < 5) {
        xVal = ((x * (cellWidth + baseWidth)) + startX).toFixed(2);
        storeCoordinate(xVal, yVal, gridTopLefts);
        x = x + 1;
      }
      y = y + 1;
      x = 0;
    }
  }

  // Center Grid
  for (var i = 0; i < gridTopLefts.length; i++) {
    tempx = (parseFloat(gridTopLefts[i].x) + parseFloat(cellWidth / 2)).toFixed(2);
    tempy = (parseFloat(gridTopLefts[i].y) + parseFloat(cellHeight / 2)).toFixed(2);
    storeCoordinate(tempx, tempy, gridCenters);
  }

  console.log(gridTopLefts);
  console.log(gridCenters);
}

// Object Template
function rand() {
  let pos = round(random(0, 19));
  //console.log(position);
  this.x = gridCenters[pos].x;
  this.y = gridCenters[pos].y;

  // For largest width...
  // this.diameter = random(baseWidth, largest);
  // Really Big
  // let largest = (cellWidth * 3) + (baseWidth * 2);
  // Slightly Big
  // let largest = (cellWidth * 2) + (baseWidth * 1);

  // Very Orderly
  // this.diameter = random(baseWidth, cellWidth);
  // Interesting scales
  // let modSize = (cellWidth / 5) * round(random(1, 10));
  let modSize = (cellWidth / 5) * (round(random(1, 5) * 2));
  this.diameter = modSize;
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
      ellipse(this.x, this.y, this.diameter + sel + 0.35, this.diameter + sel + 0.35);
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
  for (var i=0; i<buttons.length; i++) {
    buttons[i].display();
    if ( mouseX >= parseFloat(buttons[i].w1) && mouseX <= parseFloat(buttons[i].w2) && mouseY >= parseFloat(buttons[i].h1) && mouseY <= parseFloat(buttons[i].h2)) {
      buttons[i].click();
      console.log('click');
    }
  }

  // if ( mouseX >= buttons[1].w1 && mouseX <= buttons[1].w2 && mouseY >= buttons[1].h1 && mouseY <= buttons[1].h2) {
    // buttons[1].click();
    // console.log('click');
  // }

  // if ( mouseX >= testo.w1 && mouseX <= testo.w2 && mouseY >= testo.h1 && mouseY <= testo.h2) {
  //   testo.click();
  // }

  // console.log(buttons[1].w1);
  // if ( mouseX >= parseFloat(buttons[1].w1) && mouseX <= parseFloat(buttons[1].w2) && mouseY >= parseFloat(buttons[1].h1) && mouseY <= parseFloat(buttons[1].h2)) {
  //   buttons[1].click();
  // }

  
  // if ( mouseX >= buttons[1].w1 && mouseX <= buttons[1].w2 && mouseY >= buttons[1].h1 && mouseY <= buttons[1].h2) {
}

function showGrid() {

  let cellFullWidth = cellWidth + baseWidth;
  let cellFullHeight = cellHeight + baseHeight;


  stroke('#75DDDD');

  // Landscape Mode
  // Vertical
  line(gridTopLefts[0].x, gridTopLefts[0].y, gridTopLefts[15].x, parseFloat(gridTopLefts[16].y) + cellHeight);
  line(gridTopLefts[1].x, gridTopLefts[1].y, gridTopLefts[16].x, parseFloat(gridTopLefts[16].y) + cellHeight);
  line(gridTopLefts[2].x, gridTopLefts[2].y, gridTopLefts[17].x, parseFloat(gridTopLefts[16].y) + cellHeight);
  line(gridTopLefts[3].x, gridTopLefts[3].y, gridTopLefts[18].x, parseFloat(gridTopLefts[16].y) + cellHeight);
  line(gridTopLefts[4].x, gridTopLefts[4].y, gridTopLefts[19].x, parseFloat(gridTopLefts[16].y) + cellHeight);

  // Vertical guidelines
  line(parseFloat(gridTopLefts[1].x) - baseWidth, parseFloat(gridTopLefts[1].y), parseFloat(gridTopLefts[16].x) - baseWidth, parseFloat(gridTopLefts[16].y) + cellHeight);
  line(parseFloat(gridTopLefts[2].x) - baseWidth, parseFloat(gridTopLefts[2].y), parseFloat(gridTopLefts[17].x) - baseWidth, parseFloat(gridTopLefts[17].y) + cellHeight);
  line(parseFloat(gridTopLefts[3].x) - baseWidth, parseFloat(gridTopLefts[3].y), parseFloat(gridTopLefts[18].x) - baseWidth, parseFloat(gridTopLefts[18].y) + cellHeight);
  line(parseFloat(gridTopLefts[4].x) - baseWidth, parseFloat(gridTopLefts[4].y), parseFloat(gridTopLefts[19].x) - baseWidth, parseFloat(gridTopLefts[19].y) + cellHeight);

  // Extra end line
  line(parseFloat(gridTopLefts[4].x) + cellWidth, parseFloat(gridTopLefts[4].y), parseFloat(gridTopLefts[19].x) + cellWidth, parseFloat(gridTopLefts[15].y) + cellHeight);

  //----------
  // Horizontal
  line(gridTopLefts[0].x, gridTopLefts[0].y, parseFloat(gridTopLefts[4].x) + cellWidth, gridTopLefts[4].y);
  line(gridTopLefts[5].x, gridTopLefts[5].y, parseFloat(gridTopLefts[9].x) + cellWidth, gridTopLefts[9].y);
  line(gridTopLefts[10].x, gridTopLefts[10].y, parseFloat(gridTopLefts[14].x) + cellWidth, gridTopLefts[14].y);
  line(gridTopLefts[15].x, gridTopLefts[15].y, parseFloat(gridTopLefts[19].x) + cellWidth, gridTopLefts[19].y);

  // Horizontal Guidelines
  line(parseFloat(gridTopLefts[5].x), parseFloat(gridTopLefts[5].y) - baseHeight, parseFloat(gridTopLefts[9].x) + cellWidth, parseFloat(gridTopLefts[9].y) - baseHeight);
  line(parseFloat(gridTopLefts[10].x), parseFloat(gridTopLefts[10].y) - baseHeight, parseFloat(gridTopLefts[14].x) + cellWidth, parseFloat(gridTopLefts[14].y) - baseHeight);
  line(parseFloat(gridTopLefts[15].x), parseFloat(gridTopLefts[15].y) - baseHeight, parseFloat(gridTopLefts[19].x) + cellWidth, parseFloat(gridTopLefts[19].y) - baseHeight);

  // Extra end line
  line(parseFloat(gridTopLefts[15].x), parseFloat(gridTopLefts[15].y) + cellHeight, parseFloat(gridTopLefts[19].x) + cellWidth, parseFloat(gridTopLefts[19].y) + cellHeight);
}

  // // Portrait Mode
  // // Vertical
  // line(gridTopLefts[0].x, gridTopLefts[0].y, gridTopLefts[16].x, parseFloat(gridTopLefts[16].y) + cellFullHeight);
  // line(gridTopLefts[1].x, gridTopLefts[1].y, gridTopLefts[17].x, parseFloat(gridTopLefts[17].y) + cellFullHeight);
  // line(gridTopLefts[2].x, gridTopLefts[2].y, gridTopLefts[18].x, parseFloat(gridTopLefts[18].y) + cellFullHeight);
  // line(gridTopLefts[3].x, gridTopLefts[3].y, gridTopLefts[19].x, parseFloat(gridTopLefts[19].y) + cellFullHeight);
  // line(parseFloat(gridTopLefts[3].x) + cellFullWidth, gridTopLefts[3].y, parseFloat(gridTopLefts[19].x) + cellFullWidth, parseFloat(gridTopLefts[19].y) + cellFullHeight); // extra one

  // // Horizontal
  // line(gridTopLefts[0].x, gridTopLefts[0].y, gridTopLefts[3].x, gridTopLefts[3].y);
  // line(gridTopLefts[4].x, gridTopLefts[4].y, gridTopLefts[7].x, gridTopLefts[7].y);
  // line(gridTopLefts[8].x, gridTopLefts[8].y, gridTopLefts[11].x, gridTopLefts[11].y);
  // line(gridTopLefts[12].x, gridTopLefts[12].y, gridTopLefts[15].x, gridTopLefts[15].y);
  // line(gridTopLefts[16].x, gridTopLefts[16].y, gridTopLefts[19].x, gridTopLefts[19].y);
  // line(parseFloat(gridTopLefts[3].x) + cellFullWidth, gridTopLefts[3].y, parseFloat(gridTopLefts[19].x) + cellFullWidth, parseFloat(gridTopLefts[19].y) + cellFullHeight); // extra one
// }
