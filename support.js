window.onresize = function() {
  location.reload();
  // insert a message
  //alert('reloaded');
}

function keyPressed() {
  if (keyCode === ESCAPE) {
    console.log("button press");
    window.location.reload();
  }
  if (keyCode === TAB) {
    showGrid();
  }
}
