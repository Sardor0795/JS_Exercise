let ball = document.querySelector(".ball");
let box = document.querySelector(".box");

function position(e) {
  ball.style.cssText = `
        top: ${e.y - 50}px;
        left: ${e.x - 50}px;
    `;
}
