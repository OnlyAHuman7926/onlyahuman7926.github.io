let canvas = document.createElement("canvas");
let width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight;
canvas.style = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; background-color: black; opacity: 0.6;";
document.body.append(canvas);
const ctx = canvas.getContext("2d");

/* interface for dots: 
{
  x: coordinate,
  y: coordinate,
  vel: angle
} */

const density = 60 ** 2;    // one dot per unit area
let dotAmount = Math.floor(width * height / density);
const dotSpeed = 36 / 60;
const linkDistance = 75;

let dots = [];
for (let i = 0; i < dotAmount; i++) {
  dots.push({
    x: Math.random() * width,
    y: Math.random() * height,
    vel: Math.random() * 2 * Math.PI
  })
}

function draw() {
  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
  for (let dot of dots) {
    dot.x += dotSpeed * Math.cos(dot.vel);
    dot.y += dotSpeed * Math.sin(dot.vel);
    if (dot.x < 0 || dot.x > width) {
      if (dot.x < 0) dot.x = 0;
      else dot.x = width;
      dot.vel = Math.PI - dot.vel;
    }
    if (dot.y < 0 || dot.y > height) {
      if (dot.y < 0) dot.y = 0;
      else dot.y = height;
      dot.vel = -dot.vel;
    }
    ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1)
  }
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      let d1 = dots[i], d2 = dots[j];
      let distance = Math.sqrt(
        (d1.x - d2.x) ** 2 +
        (d1.y - d2.y) ** 2
      );
      if (distance < linkDistance) {
        let a = (linkDistance - distance) / linkDistance * 255 * 2;
        ctx.strokeStyle = `rgb(${a}, ${a}, ${a})`;
        ctx.beginPath();
        ctx.moveTo(d1.x, d1.y);
        ctx.lineTo(d2.x, d2.y);
        ctx.stroke();
      }
    }
  }
}

requestAnimationFrame(function f() {
  ctx.clearRect(0, 0, width, height);
  draw();
  requestAnimationFrame(f);
})