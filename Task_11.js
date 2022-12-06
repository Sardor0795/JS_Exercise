// No1
// object keylarini toping
// chiqish
// id,name

// let obj = {
//   id: 1,
//   name: "WebBrain",
// };

// for (let i in obj) {
//   console.log(i);
// }

// no2
// object valuelarining raqamga tenglarini toping
// chiqish
// id

// let obj = {
//   id: 1,
//   name: "WebBrain",
// };

// for (let i in obj) {
//   if (typeof obj[i] == "number") {
//     console.log(i);
//   }
// }

// No3
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
// chiqish
// {   offline:true,
//     online:true,
//     individual:false
// }

// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };

// for (i in obj) {
//   if (typeof obj[i] == "boolean") {
//     console.log(i);
//   }
// }

// No4
// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing
// chiqish
//     name:"WebBrain"

// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };

// const Search = (obj, str) => {
//   for (i in obj) {
//     if (obj[i] === str) {
//       console.log(`${i}: ${obj[i]}`);
//     }
//   }
// };

// Search(obj, "WebBrain");

// No5
// object va string berilgan.  string bor bolgan object valuelarining chiqaring
// atirgul,qizil

// let obj = {
//   id: 1,
//   name: "atirgul",
//   color: "qizil",
//   count: 10,
//   price: "10$",
// };
// const searchValue = (obj) => {
//   for (i in obj) {
//     if (typeof obj[i] == "string") {
//       console.log(obj[i]);
//     }
//   }
// };

// searchValue(obj);

// No6
// object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping
// chiqish
// 146

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

// while (person) {
//   sum = sum + person.age;
//   person = person.child;
// }

// console.log(sum);
