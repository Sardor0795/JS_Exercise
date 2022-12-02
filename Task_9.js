// Ex 1 ---

// let arr = [];

// for (let i = 1; i <= 10; i++) {
//   arr.push(parseInt(Math.random() * 100));
// }

// let sumArr = 0;

// for (let i = 0; i < arr.length; i++) {
//   sumArr += arr[i];
// }

// console.log(sumArr);

// Ex 2 ---

// let arr = ["webbrain", "academy"];

// let str = arr.join("");

// let alphabet = {
//     a: 0,b: 0,c: 0,d: 0,e: 0,f: 0,g: 0,h: 0,i: 0,j: 0,k: 0,l: 0,m: 0,
//     n: 0,o: 0,p: 0,k: 0,r: 0,s: 0,t: 0,u: 0,v: 0,w: 0,x: 0,y: 0,z: 0,
// };

// str = str.toLowerCase();

// for (let i = 0; i < str.length; i++) {
//   for (let k in alphabet) {
//     if (k == str[i]) {
//       alphabet[k] += 1;
//     }
//   }
// }

// let filteredArr = {};

// for (let n in alphabet) {
//   if (alphabet[n] > 0) {
//     filteredArr[n] = alphabet[n];
//   }
// }

// console.log(filteredArr);

// Ex 3 ---

// let arr1 = ["a", "b", "c", "d"];
// let arr2 = ["a", "b", "c", "d"];

// let check = 0;

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] == arr2[i]) {
//     check += 1;
//   }
// }

// if (check == arr1.length) {
//   console.log(`|${arr1}| == |${arr2}| //teng`);
// } else {
//   console.log(`|${arr1}| != |${arr2}| //teng emas`);
// }

// Ex 4 ---

// let str = "-webkit-transition";

// let arrStr = "";

// for (let i = 0; i < str.length; i++) {
//   if (str[i] == "-") {
//     arrStr += str[i + 1].toUpperCase();
//     i += 2;
//   }
//   arrStr += str[i];
// }

// console.log(arrStr);

// Ex 5 ---

// let users = [
//   { id: 1, year: 1998, engine: 1, name: "Tico" },
//   { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//   { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//   { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//   { id: 5, year: 2012, engine: 2, name: "Malibu" },
//   { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//   { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
// ];

// let before2000 = "";
// let after2010 = "";

// for (let i = 0; i < users.length; i++) {
//   if (users[i].year < 2000) {
//     before2000 += `${users[i].name} `;
//     users[i]["status"] = "eski";
//   }
//   if (users[i].year >= 2000 && users[i].year <= 2010) {
//     users[i]["status"] = "o'rta";
//   }
//   if (users[i].year > 2010 && users[i].year <= 2022) {
//     users[i]["status"] = "yangi";
//   }
//   if (users[i].year > 2010) {
//     after2010 += `${users[i].name} `;
//   }
// }

// console.log(users);

// console.log("Before 2000: " + before2000);
// console.log("After 2010: " + after2010);

// console.log("Engine sort:");
// users.sort((a, b) => a.engine - b.engine);
// console.log(users);

// console.log("Year sort:");
// users.sort((a, b) => a.year - b.year);
// console.log(users);

// console.log("Name sort:");
// users.sort((a, b) => a.name.localeCompare(b.name));
// console.log(users);
