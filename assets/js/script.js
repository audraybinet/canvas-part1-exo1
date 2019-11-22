const canvas=document.querySelector("canvas");
const ctx= canvas.getContext("2d");

(function draw(){
  ctx.fillStyle = "#A7D7E7";
  ctx.fillRect(100 ,125, 200, 200);
})();

(function draw(){
  ctx.beginPath();
  ctx.moveTo(200,40);
  ctx.lineTo(300,125);
  ctx.lineTo(100,125);
  ctx.lineTo(200,40);
  ctx.fillStyle = "#D08536";
  ctx.fill();
  ctx.closePath();
})();

(function draw(){
  ctx.fillStyle = "grey";
  ctx.fillRect(110 ,135, 50, 50);
})();

(function draw(){
  ctx.fillStyle = "grey";
  ctx.fillRect(240,135, 50,50);
})();

(function draw(){
  ctx.fillStyle = "grey";
  ctx.fillRect(175,225, 50,100);
})();
