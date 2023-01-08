let ball = document.querySelector(".ball");
let box = document.querySelector(".box");

function position(e) {
  ball.style.cssText = `
        top: ${e.clientY - 50}px;
        left: ${e.clientX - 50}px;
    `;
  console.log(e.clientY, e.clientX);
}
