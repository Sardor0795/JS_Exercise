// Ex 1 ---

// const user = {};

// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// console.log(user);

// Ex 2 ---

// let isEmpty = (obj) => {
//   for (let i in obj) {
//     return false;
//   }
//   return true;
// };

// let schedule = {};

// console.log(isEmpty(schedule));

// schedule["8:30"] = "get up";

// console.log(isEmpty(schedule));

// Ex 3 ---

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = null;

// for (let i in salaries) {
//   sum += salaries[i];
// }

// console.log(sum);

// Ex 4 ---

// let multiplyNumeric = (obj) => {
//   for (let i in obj) {
//     if (typeof obj[i] == "number") {
//       obj[i] *= 2;
//     }
//   }
// };

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// multiplyNumeric(menu);

// console.log(menu);
