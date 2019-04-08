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
  if (keyCode === TAB) {
    showGrid();
  }
  if (keyCode === OPTION) {
    // pdf.save();
    console.log("printo?");
  }
}
