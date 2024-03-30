(function loadPage() {
  let splash = document.getElementsByClassName("splashscreen")[0];
  setTimeout(() => {
    splash.classList.add("splashscreen--is-hidden");
    setTimeout(() => {
      splash.classList.add("splashscreen--is-not-displayed");
    }, 300);
  }, 500);
})();

// https://github.com/irinamityugova/design-portfolio/blob/master/assets/img/unicorn-1.png?raw=true

var canvas = document.getElementById("bridge");
var ctx = canvas.getContext("2d"),
  img = new Image(),
  radius = 70;

img.onload = setup;
img.src =
  "https://github.com/irinamityugova/design-portfolio/blob/master/assets/img/unicorn-1.png?raw=true";

function setup() {
  // set image as pattern for strokeStyle
  let pattern = ctx.createPattern(this, "no-repeat");
  ctx.strokeStyle = pattern;
  ctx.lineWidth = 120;

  // for demo only, reveals image while mousing over canvas
  canvas.onmousemove = function (e) {
    var r = this.getBoundingClientRect(),
      x = e.clientX - r.left,
      y = e.clientY - r.top;

    ctx.beginPath();
    ctx.moveTo(x + Math.random() * 33 - 16, y + Math.random() * 33 - 16);
    ctx.lineTo(x + Math.random() * 33 - 16, y + Math.random() * 33 - 16);
    ctx.stroke();
  };
}
