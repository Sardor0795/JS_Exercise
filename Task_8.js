// Ex 1

// let num = 20;

// let binary = num.toString(2);

// let sum_1 = null;
// let sum_2 = null;

// for (let i = 0; i < binary.length; i++) {
//   +binary[i] == 1 ? sum_1 += 1 : sum_2 += 1;
// }

// console.log(binary);
// console.log(sum_1);
// console.log(sum_2);

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
