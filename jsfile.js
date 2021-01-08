function move() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 67) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function move2() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar2");
    var width = 0;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 93) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function move3() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar3");
    var width = 0;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 97) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function move4() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar4");
    var width = 0;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 65) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function move5() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar5");
    var width = 0;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

window.onload = function () {
  move();
  move2();
  move3();
  move4();
  move5();
};
