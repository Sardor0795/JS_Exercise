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

// Extra Exercises ---

// No 1 ---

// let obj = {
//   id: 1,
//   name: "WebBrain",
// };

// for (let i in obj) {
//   console.log(i);
// }

// No 2 ---

// let obj = {
//   id: 1,
//   name: "WebBrain",
//   number: +998995002020,
// };

// for (let i in obj) {
//   if (typeof obj[i] == "number") {
//     console.log(i);
//   }
// }

// No 3 ---

// let obj = {
//   id: 1,
//   name: "WebBrain",
//   number: +998995002020,
//   offline: true,
//   online: true,
//   individual: false,
// };

// let booleanOnly = {};

// for (let i in obj) {
//   if (typeof obj[i] == "boolean") {
//     booleanOnly[i] = obj[i];
//   }
// }

// console.log(booleanOnly);

// No 4 ---

// let obj = {
//   id: 1,
//   name: "WebBrain",
//   number: +998995002020,
//   offline: true,
//   online: true,
//   individual: false,
// };

// const Search = (obj, str) => {
//   for (let i in obj) {
//     if (obj[i] == str) {
//       console.log(`${i}:"${obj[i]}"`);
//     }
//   }
// };

// Search(obj, "WebBrain");

// No 5 ---

// let obj = {
//   id: 1,
//   name: "atirgul",
//   color: "qizil",
//   count: 10,
//   price: "10$",
// };

// let searchValue = (obj) => {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") {
//       console.log(obj[key]);
//     }
//   }
// };

// searchValue(obj);

// No 6 ---

// let person = {
//   id: 1,
//   name: "Odil",
//   age: 78,
//   child: {
//     id: 1,
//     name: "Ali",
//     age: 48,
//     child: {
//       id: 1,
//       name: "Umar",
//       age: 20,
//     },
//   },
// };

// let sum = 0;

// 1st way
// while (person) {
//   sum += person.age;
//   person = person.child;
// }

// 2nd way
// while (true) {
//   if (person) sum += person.age;
//   else break;
//   person = person.child;
// }

// 3rd way - recursion
// const calcAge = (obj) => {
//   sum += obj.age;
//   if (obj.child) {
//     obj = obj.child;
//     calcAge(obj);
//   }
// };

// calcAge(person);

// console.log(sum);
