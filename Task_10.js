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

// No11 ----
// agar object ichida talaba bolsa objectga {kiridit:true} key va value qoshilsin aks holsa {kiridit:olinmadi} qoshilsin

// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
//   practice: 1,
//   talaba: true,
// };

// obj.talaba ? (obj.kredit = true) : (obj.kredit = "Olinmadi");

// console.log(obj);

// No12 ----
// object ichida tugilgan yil,hozirgi yoshi malumotlari keltirilgan. agar yosh togri bolmasa 'xato malumot kiritdingiz' chiqarilsin

// let obj = {
//   id: 1,
//   name: "Usmon",
//   age: 34,
//   year: 1990,
// };

// let res = 2022 - obj.year == obj.age ? "Yosh to'g'ri" : "Xato malumot kiritdingiz";

// console.log(res);

// No13 ----

// talaba oz malumotlarini toldirmoqda. sizga object va massiv berilgan. massiv ichida uzbekiston viloyatlari berilgan. agar talaba massiv ichidagi viloyatlardan boshqa tanlasa bizning filallarimiz faqat shu viloyatlarda degan natija chiqsin.

// arr = ["Andijon", "Namangan", "Qarshi", "Toshkent"];

// let student = {};

// const getInfo = (name, age, province) => {
//   if (arr.includes(province)) {
//     student.name = name;
//     student.age = age;
//     student.province = province;

//     console.log(student);
//   } else {
//     console.log(`Bizning filallarimiz faqat ${arr.join(", ")} viloyatlarda`);
//   }
// };

// getInfo("Sardor", 27, "Qarshi");

// No14 ----
// talabalar malumotlari massiv berilgan. massiv objectlardan tashkil topgan. objectda login parol keltirilgan.
// funksiyaga login va parol jonatiladi.
// agar login parol togri bolsa 'hush kelibsiz' aks holda 'login yoki parol xato degan qiymat chiqazing'
// logIn('Umar','2113') => xato
// logIn('Salohiddin','3421') => hush kelibsiz

// let arr = [
//   { id: 3, name: "Usmon", parol: "1231" },
//   { id: 1, name: "Umar", parol: "1241" },
//   { id: 5, name: "Jasur", parol: "3452" },
//   { id: 2, name: "Asmo", parol: "2312" },
//   { id: 4, name: "Salohiddin", parol: "3421" },
// ];

// const check = (login, password) => {

//   let user = arr.find((v) => v.name == login);

//   if(user) {
//     user.parol == password ? console.log("hush kelibsiz") : console.log("login yoki parol xato");
//   } else {
//     console.log("login yoki parol xato");
//   }

// };

// check("Usmon", "1231");

// No15 ----

// object ichida objectlar berilgan. ichki objectlar bor yoqligini tekshiring chiqish true false;

// obj = {
//   id: 1,
//   title: "the best",
//   address: { street: "Farobiy", number: "34" },
// };

// let arr = [];

// for (let i in obj) {
//   if (typeof obj[i] == "object") arr.push(true);
//   else arr.push(false);
// }

// let res = arr.includes(true) ? true : false;

// console.log(res);

// No16 ----

// let person = {
//   id: 1,
//   name: "Umar",
//   surname: "Ismoilov",
//   password : 125
// };

// person.ielts = 7;

// console.log(person.ielts >= 5.5 ? "Qabul qilindi" : "Qayta topshirish kerak");

// person.ielts >= 5.5 ? person.student = true : person.student = false;

// person.student == true ? person.password = 200 - parseInt(Math.random() * 100) : null;
// console.log(person);

// const check = (login, password) => {

//   let user = null;

//   for (let i in person) {
//     if (person[i] == login) {
//       user = person[i]
//     }
//   }

//   console.log(user);

//   if(user) {
//     person.password == password ? console.log("hush kelibsiz" + user) : console.log("login yoki parol xato");
//   } else {
//     console.log("login yoki parol xato");
//   }

// };

// check("Umar", person.password);

// Extra Task <----------

// Long way -----

// const checkStr = (str1, str2) => {
//   let getCount = (str) => {
//       let alphabet = {
//           a: 0,b: 0,c: 0,d: 0,e: 0,f: 0,g: 0,h: 0,i: 0,j: 0,k: 0,l: 0,m: 0,
//           n: 0,o: 0,p: 0,k: 0,r: 0,s: 0,t: 0,u: 0,v: 0,w: 0,x: 0,y: 0,z: 0,
//       };

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

//     return filteredArr;
//   };

//   let str1counted = getCount(str1);
//   let str2counted = getCount(str2);

//   let res = null;

//   outer: for (let i in str1counted) {
//     for (let l in str2counted) {
//       if (i in str2counted && l in str1counted) {
//         if (str1counted[i] == str2counted[l]) {
//           res = true;
//         } else {
//           res = false;
//         }
//       } else {
//         res = false;
//         break outer;
//       }
//     }
//   }

//   return res
// };

// console.log(checkStr('webacademybrain', 'brainwebacademy')); // true
// console.log(checkStr('webacademybrain', 'brainwebacadht')); // false

// Optimal way ---

// const checkStr = (str1, str2) => str1.length === str2.length ? str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('') : false

// console.log(checkStr('web', 'bew'));