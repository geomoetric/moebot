var buttons = []; // Array of design objects
var workingGrid = [];
var gridTopLefts = [];
var gridCenters = [];
var shapes = [];
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
  //shape,
  shapeOptions,
  portrait,
  posGrid;
var randShape = 3;
  // for (var i = 0; i < round(random(1, 5)); i++) {
var randAmount = 7;
  // for (var j = 0; j < round(random(5, 16)); j++) {


function preload() {

  // randomSeed(1);
  // const seed = random(100);
  // randomSeed(seed);

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

  // Button Generator

  // Shape handler
  // Get random shape
  // replace
  for (var i = 0; i < randShape); i++) {
    shapes.push(random(shapeOptions));
  }
  console.log(localStorage.getItem("shapeOption"));

  // Load design objects
  for (var i = 0; i < shapes.length; i++) {
    // replace
    for (var j = 0; j < randAmount); j++) {
      buttons.push(new modShape(shapes[i]));
    }
  }
  console.log(localStorage.getItem("randAmount"));

  // Text
  h1  = new txt('Moebot', 'h1');

  h2 = new txt('by Eric Moe', 'h2');

  h3 = new txt('More info at moebot.design', 'h3');

  p = new txt('Moe-bot lets people design with machine intelligence on the web. Its algorithm models thinking, perception, and action to make designs. This proof-of-concept generates modernist layouts, typography, and geometry on the web', '');
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
function modShape(shape) {
  const pos = round(random(0, workingGrid.length - 1));
  this.x = round(workingGrid[pos].x);
  this.y = (round(workingGrid[pos].y)) + cellHeight;

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
  // Need to get values from array that can loose values
  // Makes WorkingGrid useless lol but I can optimize later
  let pos = random(posGrid);

  let textWidth = 0;
  this.x = workingGrid[pos].x;
  this.y = workingGrid[pos].y;
  this.text = createElement('textarea', string);
  this.text.position(this.x, this.y);
  // this.text.width = (cellWidth * 2) + baseWidth;

  if (!portrait) {
    if ([4, 9, 14, 19].includes(pos)) {
      posGrid.splice(pos - 1, 1);
      textWidth = cellWidth;
    } else {
      posGrid.splice(pos - 1, 2);
      textWidth = (cellWidth * 2) + (baseWidth * 1);
    }
  } else {
    if ([3, 7, 11, 15, 19].includes(pos)) {
      posGrid.splice(pos - 1, 1);
      textWidth = cellWidth;
    } else {
      posGrid.splice(pos - 1, 2);
      textWidth = (cellWidth * 2) + (baseWidth * 1);
    }
  }

  textWidth = textWidth + 'px';
  let textHeight = cellHeight + 'px';
  this.text.style('width', textWidth);
  this.text.style('height', textHeight);
  this.text.addClass(style);

  // delete workingGrid[pos];
  // delete workingGrid[pos + 1];
}

