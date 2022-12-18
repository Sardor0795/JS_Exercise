// Ex - 1: Sum all numbers till the given one

// let sum = 0;

// const sumAll = (num) => {
//   if (num === 0) return sum;
//   else {
//     sum += num;
//     return sumAll(num - 1);
//   }
// };

// console.log(sumAll(100));

// Ex - 2: Factorial

// let sum = null;

// const getFactorial = (num) => {
//   if (num === 1) return sum;
//   else {
//     sum = num;
//     sum *= --num;
//     return getFactorial(--num);
//   }
// };

// console.log(getFactorial(3));

// Ex - 3: get nth fib num

// const getFib = (num) => {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= num; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// };

// const getFib = (num) => {
//   return num <= 1 ? num : getFib(num - 1) + getFib(num - 2);
// };

// console.log(getFib(7));
