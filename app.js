const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drawing = false;

function getPos(e) {
  if (e.touches) {
    return {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  }
  return {
    x: e.clientX,
    y: e.clientY
  };
}

function start(e) {
  drawing = true;
  draw(e);
}

function end() {
  drawing = false;
}

function draw(e) {
  if (!drawing) return;

  const pos = getPos(e);

  ctx.fillStyle = document.getElementById("color").value;
  const size = document.getElementById("size").value;

  ctx.beginPath();
  ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
  ctx.fill();
}

canvas.addEventListener("mousedown", start);
canvas.addEventListener("mouseup", end);
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("touchstart", start);
canvas.addEventListener("touchend", end);
canvas.addEventListener("touchmove", draw);
document.getElementById("clear").addEventListener("click", () => {
ctx.clearRect(0, 0, canvas.width, canvas.height);
});