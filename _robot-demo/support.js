 // Window resize
 window.onresize = function() {
   location.reload();
 }

function windowResized() {
  redraw();
}


// Key Presses
function keyPressed() {
  if (key === '1') {
    console.log("button press");
    window.location.reload();
  }
  // More Shapes
  if (key === '2') {
  }
  // Less Shapes
  if (key === '3') {
  }
  // More Objects
  if (key === '4') {
  }
  // Less Objects
  if (key === '5') {
  }
  // Save
  if (key === '6') {
  }
  if (keyCode === TAB) {
    showGrid();
  }
  if (keyCode === OPTION) {
    // pdf.save();
    console.log("printo?");
  }
}
