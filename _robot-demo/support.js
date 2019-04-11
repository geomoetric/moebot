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

    //if the key is pressed, new values are created and saved
    // Get random shape
    randShape =  round(random(1, 5));
    localStorage.setItem("randShape", randShape);
    console.log('random shape set: ' + localStorage.getItem("randShape"));

    // Load design objects
    randAmount = round(random(7, 16));
    localStorage.setItem("randAmount", randAmount);
    console.log('random amount set: ' + localStorage.getItem("randAmount"));

    // Load random text
    slogan = round(random(0, (sloganText.length - 1)));
    localStorage.setItem("slogan", slogan);
    console.log('slogan set: ' + localStorage.getItem("slogan"));

    window.location.reload();
    }

    // More Shapes
    if (key === '2') {
      if (localStorage.getItem("randShape") >= 5) {
        console.log('at maximum: ' + localStorage.getItem("randShape"));
      } else {
        randShape = parseInt(localStorage.getItem("randShape")) + 1;
        // console.log('randShape = ' + randShape);
        localStorage.setItem("randShape", randShape);
        console.log('random shape set: ' + localStorage.getItem("randShape"));
      }
        window.location.reload();
    }
    // Less Shapes
    if (key === '3') {
      if (localStorage.getItem("randShape") <= 1) {
        console.log('at minimum: ' + localStorage.getItem("randShape"));
      } else {
        randShape = parseInt(localStorage.getItem("randShape")) - 1;
        localStorage.setItem("randShape", randShape);
        console.log('random shape set: ' + localStorage.getItem("randShape"));
      }
        window.location.reload();
    }
    // More Objects
    if (key === '4') {
      if (localStorage.getItem("randAmount") >= 16) {
        console.log('at maximum: ' + localStorage.getItem("randAmount"));
      } else {
        randAmount = parseInt(localStorage.getItem("randAmount")) + 1;
        // console.log('randAmount = ' + randAmount);
        localStorage.setItem("randAmount", randAmount);
        console.log('random amount set: ' + localStorage.getItem("randAmount"));
      }
        window.location.reload();
    }
    // Less Objects
    if (key === '5') {
      if (localStorage.getItem("randAmount") <= 1) {
        console.log('at minimum: ' + localStorage.getItem("randAmount"));
      } else {
        randAmount = parseInt(localStorage.getItem("randAmount")) - 1;
        localStorage.setItem("randAmount", randAmount);
        console.log('random amount set: ' + localStorage.getItem("randAmount"));
      }
        window.location.reload();
    }
    // Save
    if (key === '6') {
       saveCanvas( Date.now() + 'photo', 'png');

      // save(Date.now() + '.html');
      // html2canvas(document.getElementsByTagName("BODY")[0]).then(canvas => {
        // document.body.appendChild(canvas)
      // });
    }
    if (key === 'w' || key === 'd') {
      // console.log('NEXT');
      if (localStorage.getItem("slogan") >= (sloganText.length - 1)) {
        console.log('at max: ' + localStorage.getItem("slogan"));
      } else {
        slogan = parseInt(localStorage.getItem("slogan")) + 1;
        localStorage.setItem("slogan", slogan);
        console.log('slogan set: ' + localStorage.getItem("slogan"));
      }
        window.location.reload();
    }
    if (key === 's' || key === 'a') {
      // console.log('NEXT');
      if (localStorage.getItem("slogan") <= 0) {
        console.log('at min: ' + localStorage.getItem("slogan"));
      } else {
        slogan = parseInt(localStorage.getItem("slogan")) - 1;
        localStorage.setItem("slogan", slogan);
        console.log('slogan set: ' + localStorage.getItem("slogan"));
      }
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
