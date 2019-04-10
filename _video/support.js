 // Window resize-----Disable for print
 // window.onresize = function() {
 //   location.reload();
 // }

// function windowResized() {
 //  redraw();
// }

// // Mouse Presses
// function mousePressed() {
//   for (var i=0; i<buttons.length; i++) {
//     buttons[i].display();
//     // console.log(mouseX + ', ' + mouseY);
//     console.log(mouseX);
//     console.log(buttons[i].w1 + ', ' + buttons[i].w2 + ', ' + buttons[i].h1 + ', ' + buttons[i].h2) 
//     if ( mouseX >= parseFloat(buttons[i].w1) && mouseX <= parseFloat(buttons[i].w2) && mouseY >= parseFloat(buttons[i].h1) && mouseY <= parseFloat(buttons[i].h2)) {
//       buttons[i].click();
//       console.log('click');
//     } else {
//       // console.log('empty');
//     }
//   }
// }

// Key Presses
function keyPressed() {
  // Reload
  if (key === '1') {
    console.log("reload");
    window.location.reload();
  }
  if (keyCode === TAB) {
    showGrid();
  }
  if (key === '9') {
    pdf.save();
    console.log("printo?");
  }
}
