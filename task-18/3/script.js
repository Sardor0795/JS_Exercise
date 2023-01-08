let data = [
  {
    id: 1,
    title: "Horse",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consecteturhic eaque eligendi corporis, excepturi repellendus similique distinctio quasi facilis nostrum.",
  },
  {
    id: 2,
    title: "Zebra",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consecteturhic eaque eligendi corporis, excepturi repellendus similique distinctio quasi facilis nostrum.",
  },
  {
    id: 3,
    title: "Lion",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consecteturhic eaque eligendi corporis, excepturi repellendus similique distinctio quasi facilis nostrum.",
  },
];

let wrapper = document.querySelector(".wrapper");

const delFunc = (id) => {
  data = data.filter((v) => id != v.id);
  wrapper.innerHTML = "";
  writeFunc();
};

const writeFunc = () => {
  if (!data.length) wrapper.innerHTML = 'No data!'
    data.forEach((v) => {
      wrapper.innerHTML += `

        <div class="card">
        <div class="card__title">${v.title}</div>
        <div class="card__text">${v.text}</div>
        <button class="close__btn" onclick="delFunc(${v.id})">[x]</button>
      </div>

        `;
    });
};

writeFunc();
