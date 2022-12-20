const moment = () => {
  return {
    format(type) {
      let date = new Date();
      let hour = date.getHours();
      let ameClock = hour - 12;
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let clockType = hour >= 12 ? "PM" : "AM";
      let day = date.getDate();
      let week = date.getDay()
      let month = date.getMonth();
      let trueMonth = month + 1;
      let year = date.getFullYear();

      let months = [
        "January",
        "February",
        "March",
        "Aprel",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      let weeks = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ]

      if (type === "LT") {
        console.log(`${ameClock} : ${minutes} ${clockType}`);
      } else if (type === "LTS") {
        console.log(`${ameClock} : ${minutes} : ${seconds} ${clockType}`);
      } else if (type === "L" || type === "l") {
        console.log(`${trueMonth}/${day}/${year}`);
      } else if (type === "LL") {
        console.log(`${months[month]} ${day}, ${year}`);
      } else if (type === "ll") {
        console.log(`${months[month].slice(0, 3)} ${day}, ${year}`);
      } else if (type === "LLL") {
        console.log(`${months[month]} ${day}, ${year} ${ameClock}:${minutes} ${clockType}`);
      } else if (type === "lll") {
        console.log(`${months[month].slice(0, 3)} ${day}, ${year} ${ameClock}:${minutes} ${clockType}`);
      } else if (type === "LLLL") {
        console.log(`${weeks[week]}, ${months[month]} ${day}, ${year} ${ameClock}:${minutes} ${clockType}`);
      } else if (type === "llll") {
        console.log(`${weeks[week].slice(0, 3)}, ${months[month].slice(0, 3)} ${day}, ${year} ${ameClock}:${minutes} ${clockType}`);
      }
    },
  };
};
moment.__proto__.locale = () => {
    console.log('En');
}

moment().format("LT");
moment.locale()
