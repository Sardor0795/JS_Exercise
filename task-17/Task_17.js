const calc = (n) => {
  console.log(+n);

  for (let i = 0; i < 100; i++) {
    if (Number(div.children[i].textContent) % +n == 0) {
      div.children[i].textContent = "*";
    }
  }
};

let body = document.getElementsByTagName("body")[0];

let div = document.createElement("div");

div.classList.add("box");

if (div.classList.contains("box")) {
  div.style.cssText = `
    height: auto;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
    `;
}

body.prepend(div);

for (let i = 1; i <= 100; i++) {
  let num = document.createElement("div");
  num.classList.add("num");
  num.textContent = i;
  num.setAttribute("onclick", "calc(`${this.textContent}`)");
  div.append(num);
  if (num.classList.contains("num")) {
    num.style.cssText = `
      width: 10%;
      height: 50px;
      background-color:  rgb(${parseInt(Math.random() * 255)}, ${parseInt(
      Math.random() * 255
    )}, ${parseInt(Math.random() * 255)});
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      `;
  }
}
