var buttons = []; // Array of design objects
var workingGrid = [];
var gridTopLefts = [];
var gridCenters = [];
var shapes = [];
var localFont = ['HelveticaNeue', 'AkzidenzGroteskBQ-Reg', 'Baskerville', 'ClarendonURW-Lig', 'BodoniURW-Reg', 'CormorantGaramond-Medium', 'Times-Roman', 'UniversLTStd', 'ACaslonPro-Regular'];
var tesserae = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
var symbola = ['☮', '☯', '☹', '☺', '☻', '☽', '☾', '♻', '⚛', '♠', '♣', '♥', '♦', '✖', '✚', '✤', '✦', '✱', '✳', '✴', '✶', '✷', '✸', '✹', '✺', '✻', '✽', '❉', '❊', '❋', '❖', '❛', '❜', '❝', '❞', '❢', '❣', '❮', '❯', '❰', '❱', '➜', '➝', '➞', '➟', '➠', '➡', '➤', '➥', '➦', '➷', '➸', '➹', '➼', '🞴', '🞹', '🞾', '🟅', '🟆', '🟊', '🟐', '🠨', '🠩', '🠪', '🠫', '🡰', '🡱', '🡲', '🡳', '🡴', '🡵', '🡶', '🡷', '🚫'];
var sloganText = ["More info at moebot.design.", 
"Need a website that changes and adapts for users? Try Moebot! More info at moebot.design.",
"Running out of room and patience for your print layout? Let Moebot figure it out! Page through more at moebot.design.",
"See a shape that you like? Why not use Moebot to generate logo ideas? Take a closer look at moebot.design.",
"If you have to print a bunch of posters, why not mix it up? Add some variety with Moebot at moebot.design.",
"Will it take your job? No way—Moebot works best as a tool to augment human designers. Read more at moebot.design.",
"Built off of generative juggernaut P5.js, Moebot is open source and runs in the browser. Check it out at moebot.design.",
"Meet man and Moebot on Eric Moe's portfolio—ericmoe.co. Follow @geomoetric to see some of the designs generated tonight!"];
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
  randShape,
  randAmount,
  slogan,
  posGrid;

function preload() {

  // randomSeed(1);
  // const seed = random(100);
  // randomSeed(seed);

  // console.log(random(localFont));

  let css = 'body { font-family: \'' + random(localFont) + '\';}',
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

  // Get Values

  if (localStorage.getItem("randShape") === "null") {
    randShape = 3;
    randAmount = 7;
    slogan = 0;
  } else {
    randShape = parseInt(localStorage.getItem('randShape'));
    randAmount = parseInt(localStorage.getItem('randAmount'));
    slogan = parseInt(localStorage.getItem('slogan'));
  }
  // Button Generator

  // Shape handler
  // Get random shape
  // replace
  for (var i = 0; i < randShape; i++) {
    shapes.push(random(shapeOptions));
  }
  // console.log(localStorage.getItem('randShape'));
  console.log('random shape: ' + localStorage.getItem("randShape"));
  
  // Load design objects
  for (var i = 0; i < shapes.length; i++) {
    // replace
    for (var j = 0; j < randAmount; j++) {
      buttons.push(new modShape(shapes[i]));
    }
  }
  // console.log(localStorage.getItem('randAmount'));
  console.log('random amount: ' + localStorage.getItem("randAmount"));

  // Text
  h1  = new txt('Moebot', 'h1');

  h2 = new txt('by Eric Moe', 'h2');

  h3 = new txt(sloganText[slogan], 'h3');
  console.log(sloganText[slogan])
  console.log(localStorage.getItem('slogan'));

  p = new txt('<i class="fas fa-sync"></i>&nbsp;New—Generate random design.<br><i class="fas fa-plus-circle"></i>&nbsp;Variety—Increases types of shapes.<br><i class="fas fa-minus-circle"></i>&nbsp;Variety—Decreases types of shapes.<br><i class="fas fa-plus"></i>&nbsp;Volume—Increases number of objects.<br><i class="fas fa-minus"></i>&nbsp;Volume—Increases number of objects.<br><i class="fas fa-arrow-circle-down"></i>&nbsp;Save—Downloads code and screenshot.', 'p');
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
  this.text = createElement(style, string);
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

