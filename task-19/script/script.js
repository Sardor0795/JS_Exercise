let foot = document.querySelector(".foot");
let pitch = document.querySelector(".pitch");
let ball = document.querySelector(".ball");
const goalKeeper = document.querySelector(".goal-keeper");

let randNumGoal = parseInt(Math.random() * 9);
let randNumBall = parseInt(Math.random() * 9);

let goalPath = {
  1: { b: 150, l: 180, r: -50 },
  2: { b: 90, l: 180, r: -75 },
  3: { b: 25, l: 180, r: -90 },
  4: { b: 140, l: 398, r: 0 },
  5: { b: 140, l: 398, r: 0 },
  6: { b: 10, l: 380, r: 80 },
  7: { b: 150, l: 610, r: 50 },
  8: { b: 190, l: 610, r: 75 },
  9: { b: 25, l: 610, r: 90 },
};

let ballPath = {
  1: { b: 292, l: 207 },
  2: { b: 200, l: 207 },
  3: { b: 105, l: 207 },
  4: { b: 292, l: 485 },
  5: { b: 200, l: 485 },
  6: { b: 105, l: 485 },
  7: { b: 292, l: 760 },
  8: { b: 200, l: 760 },
  9: { b: 105, l: 760 },
};

pitch.addEventListener("mousemove", (e) => {
  (pitch.style.cursor = "none"),
    (foot.style.display = "block"),
    (foot.style.top = `${e.offsetY - 35}px`),
    (foot.style.left = `${e.offsetX - 35}px`);
  foot.style.cssText = `
      display: block;
      top: ${e.offsetY - 35}px;
      left: ${e.offsetX - 35}px;
      transform: rotate(0);
    `;
});

pitch.addEventListener("mousedown", (e) => {
  foot.style.top = `${e.offsetY - 45}px`;
  foot.style.cssText = `
      display: block;
      top: ${e.offsetY - 35}px;
      left: ${e.offsetX - 35}px;
      transform: rotate(-50deg);
    `;
});
pitch.addEventListener("mouseup", (e) => {
  foot.style.top = `${e.offsetY - 35}px`;
  foot.style.cssText = `
      display: block;
      top: ${e.offsetY - 35}px;
      left: ${e.offsetX - 35}px;
      transform: rotate(0deg);
    `;
});

pitch.addEventListener("click", (e) => {
  if (
    e.offsetX >= 455 &&
    e.offsetX <= 500 &&
    e.offsetY >= 520 &&
    e.offsetY <= 570
  ) {
    ball.style.cssText = `
      bottom: ${ballPath[randNumBall + 1].b}px;
      left: ${ballPath[randNumBall + 1].l}px;
      width: 30px;
    `;

    goalKeeper.style.cssText = `
      bottom: ${goalPath[randNumGoal + 1].b}px;
      left: ${goalPath[randNumGoal + 1].l}px;
      transform: rotate(${goalPath[randNumGoal + 1].r}deg);
    `;
  }
  console.log("X: " + e.offsetX, "Y: " + e.offsetY);
});

// x: 455 - 500
// y 520 - 570
