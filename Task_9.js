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
