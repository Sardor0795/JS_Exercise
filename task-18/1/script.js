let ball = document.querySelector(".ball");
let box = document.querySelector(".box");

function position(e) {
  ball.style.cssText = `
        top: ${e.offsetY - 50}px;
        left: ${e.offsetX - 50}px;
    `;
  console.log(e.offsetY, e.offsetX);
}
