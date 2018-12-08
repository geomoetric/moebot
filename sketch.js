var buttons = []; // Array of design objects
var workingGrid = [];
var gridTopLefts = [];
var gridCenters = [];
var localFont = ['HelveticaNeue', 'AkzidenzGroteskBQ-Reg', 'Baskerville', 'ClarendonURW-Lig', 'BodoniURW-Reg', 'CormorantGaramond-Medium', 'Times-Roman', 'UniversLTStd', 'ACaslonPro-Regular'];
var tesserae = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
var symbola = ['☮', '☯', '☹', '☺', '☻', '☽', '☾', '♻', '⚛', '♠', '♣', '♥', '♦', '✖', '✚', '✤', '✦', '✱', '✳', '✴', '✶', '✷', '✸', '✹', '✺', '✻', '✽', '❉', '❊', '❋', '❖', '❛', '❜', '❝', '❞', '❢', '❣', '❮', '❯', '❰', '❱', '➜', '➝', '➞', '➟', '➠', '➡', '➤', '➥', '➦', '➷', '➸', '➹', '➼', '🞴', '🞹', '🞾', '🟅', '🟆', '🟊', '🟐', '🠨', '🠩', '🠪', '🠫', '🡰', '🡱', '🡲', '🡳', '🡴', '🡵', '🡶', '🡷', '🚫'];
var sel,
  wWidth,
  wHeight,
  baseWidth,
  baseHeight,
  gridWidth,
  gridHeight,
  cellWidth,
  cellHeight,
  pdf,
  h1,
  h2,
  h3,
  p,
  myFont,
  shape,
  shapeOptions,
  portrait,
  posGrid;

function preload() {

  // const seed = random(100);
  // randomSeed(seed);
  // console.log('Random Seed: ' + seed);

  console.log(random(localFont));

  let css = 'textarea { font-family: \'' + random(localFont) + '\';}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet){
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);

  let x = round(random(1, 186));
  if (x > 37) {
    myFont = loadFont('Tesserae-Regular.otf');
    shapeOptions = tesserae;
  } else {
    myFont = loadFont('Symbola.ttf');
    shapeOptions = symbola;
  }
}

function setup() {
  // For SVG
  // createCanvas(windowWidth, windowHeight, SVG);

  // For faster loading
  createCanvas(windowWidth, windowHeight);

  // To use the p5.pdf.js method
  // pdf = createPDF();
  // pdf.beginRecord();

  background('#f8f8f9');

  // Create grid
  grid();

  // Shape handler
  // randomSeed(99);
  console.log(random(0, 2));
  // Get random shape
  // console.log(random(1, shapeOptions.length));
  shape = shapeOptions[round(random(0, shapeOptions.length))];
  // shape = random(shapeOptions);

  // Load design objects
  for (var i = 0; i < 5; i++) {
    buttons.push(new modShape());
  }

  h1  = new txt('Heading 1', 'h1');

  h2 = new txt('Heading 2', 'h2');

  h3 = new txt('Heading 3', 'h3');

  p = new txt('A paragraph (from the Greek paragraphos, “to write beside” or “written beside”) is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.', '');
}

function draw() {
  fill('#18181a');
  noStroke();
  sel = width/40;
  for (var i=0; i<buttons.length; i++) {
    buttons[i].display();
  }
}

// Object Template
function modShape() {
  const pos = round(random(0, workingGrid.length - 1));
  this.x = round(workingGrid[pos].x);
  this.y = (round(workingGrid[pos].y)) + cellHeight;

  // console.log(this.x + ', ' + this.y);

  let modSize = (cellWidth / 5) * (round(random(1, 5) * 2));
  this.diameter = modSize;
  this.liked = 0;

  this.display = function() {
    fill('#18181a');
    textFont(myFont);
    textSize(modSize);
    // text(shape, this.x, this.y);
    // test case
    text(shape, this.x, this.y);
  };
}

// Text Template
function txt(string, style) {
  // console.log(posGrid);
  // console.log(random(posGrid));
  // let pos = round(random(0, workingGrid.length - 1));
  let pos = random(posGrid);
  // let coords = workingGrid[pos];

  let textWidth = 0;
  this.x = workingGrid[pos].x;
  this.y = workingGrid[pos].y;
  this.text = createElement('textarea', string);
  this.text.position(this.x, this.y);
  // this.text.width = (cellWidth * 2) + baseWidth;

  if (!portrait) {
    console.log('landscape');
    if ([4, 9, 14, 19].includes(pos)) {
      posGrid.splice(pos - 1, 1);
      textWidth = cellWidth;
      console.log(style + ' width: ' + textWidth + ', pos: ' + pos);
    } else {
      posGrid.splice(pos - 1, 2);
      textWidth = (cellWidth * 2) + (baseWidth * 1);
      console.log(style + ' width: ' + textWidth + ', pos: ' + pos);
    }
  } else {
    console.log('portrait');
    if ([3, 7, 11, 15, 19].includes(pos)) {
      posGrid.splice(pos - 1, 1);
      textWidth = cellWidth;
      console.log(style + ' width: ' + textWidth + ', pos: ' + pos);
    } else {
      posGrid.splice(pos - 1, 2);
      textWidth = (cellWidth * 2) + (baseWidth * 1);
      console.log(style + ' width: ' + textWidth + ', pos: ' + pos);
    }
  }

  textWidth = textWidth + 'px';
  let textHeight = cellHeight + 'px';
  // console.log(typeof textWidth);
  this.text.style('width', textWidth);
  // console.log(textWidth);
  // console.log(textHeight);
  this.text.style('height', textHeight);
  this.text.addClass(style);

  // delete workingGrid[pos];
  // delete workingGrid[pos + 1];
}

// Object Template
function circ() {
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
