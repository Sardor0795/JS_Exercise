// Ex 1 ---

// let str = "webbbraiiin acccademmmy";

// const delDuplicate = (str) => {
//   let res = new Set(str.split(""));
//   let resStr = "";
//   for (i of res) {
//     resStr += i;
//   }

//   return resStr;
// };

// console.log(delDuplicate(str));

// ---------

// let str = "webbbraiiin accaddemmy";
// const removeDuplicate = (str) => {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[i + 1]) res += str[i];
//   }
//   return res;
// };
// console.log(removeDuplicate(str));

// Ex 2 ---

// let str = "ikki";

// let res = str.split("").reverse("").join("") === str;

// console.log(res);

// Ex 3 ---

// let str = "Webbrain Academy";

// const calcChars = (str) => {
//   let minChars = 0;
//   let bigChars = 0;

//   for (let i of str) {
//     if (i !== " ") {
//       if (i === i.toLowerCase()) ++minChars;
//       else ++bigChars;
//     }
//   }

//   return `Big chars: ${bigChars}, Min chars: ${minChars}`;
// };

// console.log(calcChars(str));

// Ex 4 ---

// let str = "WebBr@in Ac@demy";

// const changeFunc = (str) => {
//   let res = "";
//   for (let i of str) {
//     if (i !== "@") res += i;
//     else res += "a";
//   }
//   return res;
// };

// console.log(changeFunc(str));

// Ex 5 ---

// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };

// const returnBooleans = (obj) => {
//   let res = {};
//   for (key in obj) {
//     if (obj[key] === true || obj[key] === false) res[key] = obj[key];
//   }
//   return res;
// }
// console.log(returnBooleans(obj));

// Ex 6 ---

// let str = "We66ra1n Acad4my";
// const findNumbers = (str) => {
//   let res = [];
//   for (let char of str) {
//     if (!isNaN(char) && char !== " ") res.push(Number(char));
//   }
//   return res.join("");
// }
// console.log(findNumbers(str));

// Ex 7 ---

// const makeDouble = (str) => {
//   let res = "";
//   for (let char of str) {
//     res += char.repeat(2);
//   }
//   return res;
// };
// console.log(makeDouble("Sardor"));

// Ex 8 ---

// let str = "webbraaiiin";
// const toZip = (str) => {
//   let res = "";
//   let count = 1;
//   for (let char of str) {
//     if (res.length === 0) res += char;
//     else if (char === res[res.length - 1]) count++;
//     else {
//       if (count > 1) {
//         res += count;
//         count = 1;
//         res += char;
//       } else res += char;
//     }
//   }
//   return res;
// };
// console.log(zip(str));

// Ex 9 ---

// let obj = { title: "Webbrain", age: 2 };
// console.log(Object.keys(obj));

// Ex 10 ---

// Problem - 4 [1, 2, 3, 2] => [1, 2, 1] => [1, 1] => [0]
// Solution

// const subtractInfinite = (arr) => {
//   while (arr.length > 1) {
//     arr = arr.sort((a, b) => a - b);
//     let subtraction = arr[arr.length - 1] - arr[arr.length - 2];
//     arr.splice(arr.length - 2, 2);
//     subtraction ? arr.push(subtraction) : null;
//   }
//   return arr;
// };
// console.log(subtractInfinite([2, 3, 2, 4, 5, 2, 3]));

// Ex 11 ---  https://t.me/webbrain_academy/53

// function findMax(number) {
//   let binary = number.toString(2);
//   console.log(binary);
//   let oneCounts = [];
//   let wasOne = false;
//   let sum = 0;
//   for (let char of binary) {
//     if (char === "1") {
//       wasOne = true;
//       if (sum !== 0) oneCounts.push(sum);
//       sum = 0;
//     }
//     if (char === "0" && wasOne) sum++;
//   }
//   console.log(oneCounts);
//   return oneCounts.length === 0 ? 0 : Math.max(...oneCounts);
// }
// console.log(findMax(529));
