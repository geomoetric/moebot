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


  workingGrid = gridTopLefts.slice(0);
  console.log(gridTopLefts);
  console.log(gridCenters);
}

//-------------------------------------

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
