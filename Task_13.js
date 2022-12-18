const moment = () => {
  return {
    format(param) {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getSeconds();
      let clock12 = hours >= 12 ? "PM" : "AM";
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
      ];

      switch (param) {
        case "LT":
          return `${hours - 12}:${minutes} ${clock12}`;
          break;
        case "LTS":
          return date.toLocaleTimeString();
          break;
        case "L":
        case "l":
          return date.toLocaleDateString();
          break;
        case "LL":
          return `${
            months[date.getMonth()]
          } ${date.getDate()}, ${date.getFullYear()}`;
          break;
        case "ll":
          return `${months[date.getMonth()].slice(
            0,
            3
          )} ${date.getDate()}, ${date.getFullYear()}`;
          break;
        case "LLL":
          return `${
            months[date.getMonth()]
          } ${date.getDate()}, ${date.getFullYear()} ${
            hours - 12
          }:${minutes} ${clock12}`;
          break;
        case "lll":
          return `${months[date.getMonth()].slice(
            0,
            3
          )} ${date.getDate()}, ${date.getFullYear()} ${
            hours - 12
          }:${minutes} ${clock12}`;
          break;
        case "LLLL":
          return `${weeks[date.getDay()]}, ${
            months[date.getMonth()]
          } ${date.getDate()}, ${date.getFullYear()} ${
            hours - 12
          }:${minutes} ${clock12}`;
          break;
        case "llll":
          return `${weeks[date.getDay()].slice(0, 3)}, ${months[
            date.getMonth()
          ].slice(0, 3)} ${date.getDate()}, ${date.getFullYear()} ${
            hours - 12
          }:${minutes} ${clock12}`;
          break;
      }
    },
  };
};

console.log(moment().format("lll"));
