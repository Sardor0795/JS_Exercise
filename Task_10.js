// let users = [
//   { id: 1, year: 1998, engine: 1, name: "Tico" },
//   { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//   { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//   { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//   { id: 5, year: 2012, engine: 2, name: "Malibu" },
//   { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//   { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
// ];

// let before2010 = users.filter((v) => v.year < 2000);
// let after2010 = users.filter((v) => v.year > 2010);

// console.log(before2010);
// console.log(after2010);

// Instead of new Set() method -------

// let num = [5, 6, 7, 8, 9, 5, 4, 4, 3, 6, 7];

// let res = num.filter((v, i) => {
//   return num.indexOf(v) === i;
// });

// console.log(res);

// Instead of new Set() method ------

// let num = [5, 6, 7, 8, 9, 5, 4, 4, 3, 6, 7];

// let res = num.filter((v, i) => {
//   return num.indexOf(v, i + 1) === -1;
// });

// console.log(res);

// No7
// array berilgan array ning ichida objectlar berilgan. object ichida age berilgan. age ni 18dan katta bolgan objectlarni qaytaring
// let user = {
//   id: 1,
//   name: "Odil",
//   age: 78,
//   children: [
//     {
//       id: 1,
//       name: "Umar",
//       age: 54,
//       children: [
//         { id: 1, name: "Asmo", age: 34 },
//         { id: 2, name: "Osim", age: 30 },
//         { id: 3, name: "Xattob", age: 25 },
//       ],
//     },
//     { id: 2, name: "Umar", age: 54 },
//     { id: 3, name: "Umar", age: 54 },
//   ],
// };

// No8 ----
// array ichida object berilgan. job berilgan objectlarni qaytaring

// let arr = [
//   { id: 1, name: "Usmon", job: "developer" },
//   { id: 2, name: "Usmon", job: "developer" },
//   { id: 3, name: "Usmon" },
//   { id: 4, name: "Usmon", job: "developer" },
//   { id: 5, name: "Usmon" },
// ];

// let res = arr.filter((v) => v.job);

// console.log(res);

// No9 ----
// objectdan clone oling birinchi objni o'zgartirsa ikkinchisi malumotlari ozgarmasligi kk

// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
// };

// let obj2 = structuredClone(obj);

// obj2.id = 2;
// obj2.name = "Jim";

// console.log(obj);
// console.log(obj2);

// No10 ----
// objectga yangi qiymat qo'shuvchi funksiya yozing

// let user = {};

// const add = (obj, key, value) => {
//   obj[key] = value;

//   console.log(obj);
// };

// add(user, "address", "toshkent");

// No11 ----
// agar object ichida practice 1 dan katta bolsa 'qabul qilindi'.aks holda 'ming bor uzur.'

// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
//   practice: 1,
// };

// let res = obj.practice >= 1 ? "Qabul qilindi" : "Ming bor uzur";

// console.log(res);
