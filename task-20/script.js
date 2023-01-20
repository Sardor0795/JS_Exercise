let text = document.querySelector(".text");

window.onfocus = function () {
  text.innerHTML =
    "Try to copy this text! Try to copy this text! Try to copy this text!";
};
window.onblur = function () {
  text.innerHTML = "";
};

window.onkeyup = function (e) {
  if (e.keyCode == 44) {
    // alert("Dont try to take a screen shot");
    text.innerHTML = "";
  }
};
