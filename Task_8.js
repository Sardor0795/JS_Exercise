// Number ---

// Ex 1

// let num = 35;

// let binary = num.toString(2);

// let sum_1 = null;
// let sum_2 = null;

// for (let i = 0; i < binary.length; i++) {
//   +binary[i] == 1 ? (sum_1 += 1) : (sum_2 += 1);
// }

// console.log(binary);
// console.log("1: " + sum_1);
// console.log("2: " + sum_2);

// Ex 2 --- Max - Min

// let minMax = (num) => {
//   let objNum = {};

//   for (let i = 1; i <= num; i++) {
//     objNum[i] = parseInt(Math.random() * 100);
//   }

//   let min = 2 ** 53 - 1;
//   let max = 0;

//   for (let i in objNum) {
//     if (objNum[i] > 0 && objNum[i] < min) {
//       min = objNum[i];
//     }
//   }

//   for (let i in objNum) {
//     if (objNum[i] > 0 && objNum[i] > max) {
//       max = objNum[i];
//     }
//   }

//   console.log(objNum);
//   console.log("Min: " + min);
//   console.log("Max: " + max);
//   console.log("Result: " + (max - min));
// };

// minMax(10);

// ---- With Array ----

// let minMax = (num) => {
//   let objNum = [];

//   for (let i = 1; i <= num; i++) {
//     objNum.push(parseInt(Math.random() * 100));
//   }

//   let min = 2 ** 53 - 1;
//   let max = 0;

//   min = Math.min(...objNum);

//   max = Math.max(...objNum);

//   console.log(objNum);
//   console.log("Min: " + min);
//   console.log("Max: " + max);
//   console.log("Result: " + (max - min));
// };

// minMax(10);

// Ex 3 ---

// Math.round() ->  matematik yaxlitlash 0...4 > 5...9
// Math.floor() ->  faqat pastga qarab yaxlitlash
// Math.ceil()  ->  faqat tepaga qarab yaxlitlash
// Math.trunc() ->  faqat butun qismini olish
// parseInt()   ->  faqat butun qismini olish

//  --- round, floor, trunc slower than others ---

// Ex 4 ---

// let randomInteger = (min, max) => {
//   let numbers = {};

//   let counter = min;

//   while (true) {
//     let num = parseInt(Math.random() * max);
//     if (num > min) {
//       numbers[counter] = num;
//       counter += 1;
//     }
//     if (counter == max + 1) {
//       break;
//     }
//   }

//   for (let i in numbers) {
//     console.log(i, ": " + numbers[i]);
//   }
// };

// randomInteger(25, 46);

// String ---

// Ex 2 ---

// let getCount = (str) => {
//     let alphabet = {
//       a: 0,b: 0,c: 0,d: 0,e: 0,f: 0,g: 0,h: 0,i: 0,j: 0,k: 0,l: 0,m: 0,
//       n: 0,o: 0,p: 0,k: 0,r: 0,s: 0,t: 0,u: 0,v: 0,w: 0,x: 0,y: 0,z: 0,
//     };

//     str = str.toLowerCase();

//     for (let i = 0; i < str.length; i++) {
//       for (let k in alphabet) {
//         if (k == str[i]) {
//           alphabet[k] += 1;
//         }
//       }
//     }

//     let filteredArr = {};

//     for (let n in alphabet) {
//       if (alphabet[n] > 0) {
//         filteredArr[n] = alphabet[n];
//       }
//     }

//     console.log(filteredArr);
//   };

//   getCount("SarDoR");

// Ex 3 ---

// let truncate = (str, n) => {
//   return str.slice(0, n);
// };

// console.log(truncate("webbrain", 5));

// Ex 4 ---

// let getCurrency = (str) => {
//   let num = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= 0) {
//       num += `${str[i]}`;
//     }
//   }

//   console.log(+num);
// };

// getCurrency("$$$$1dff2$$0g0$$");
