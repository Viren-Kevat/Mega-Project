let circle = document.querySelector(".circle");
let cir = document.querySelector(".cir");

window.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  cir.style.left = `${x}px`;
  cir.style.top = `${y}px`;
});
