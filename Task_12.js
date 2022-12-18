//--1-------- Berilgan stringda nechta katta xarf nechta kichik harf borligi ----------

// let str = "WeB BraIn Academy";

// const getCount = (str) => {
//   let arr = str.split(" ").join("").split("");
//   return `Lows: ${arr.filter((v) => v === v.toLowerCase()).length}, Bigs: ${arr.filter((v) => v === v.toUpperCase()).length}`;
// };

// console.log(getCount(str));

//--2-------- @ ni a ga o'zgartirish ----------

// let str = "Web Br@in Ac@demy";

// const changeLetter = (str) => {
//   return str.split("@").join("a");  // 1-way
// };

// const changeLetter = (str) => {
//   return str.split('').map((v) => (v == "@" ? "a" : v)).join('');  // 2-way
// };

// console.log(changeLetter(str));

//--3-------- Delete duplicates ----------

// let str = "Webbraiiin acaademmmy";

// const dellDuplicates = (str) => {
//   return str.split("").filter((v, i) => str.indexOf(v) === i).join("");
// };

// console.log(dellDuplicates(str));

//--4-------- Find nums ----------

// let str = "We66br5 an5oo56 fl65";

// const findNums = (str) => {
//   return str.split(" ").join('').split('').filter((v) => !isNaN(v)).join('');
// };

// console.log(findNums(str));

//--5-------- remove duplicates num ----------

// let nums = [4, 4, 5, 7, 3, 4, 6, 6, 7];

// const dellDuplicates = (num) => {
//   return num.filter((v, i) => num.indexOf(v) === i);
// };

// console.log(dellDuplicates(nums));

//--6-------- Return 2 room nums ----------

// let arr = [1, 64, 8, 27, 5, 50, 3, 64];

// const getNums = (nums) => {
//   return nums.filter((v) => v >= 10 && v < 100);
// };

// console.log(getNums(arr));

//--7-------- [5,3,4,5] -> 1 ----------

// let arr1 = [1, 2, 7, 5, 3, 5];
// let arr2 = [1, 2, 8, 5, 3, 5];

// const subtract = (nums) => {
//   console.log(nums);
//   if (nums.length === 1) {
//     return nums;
//   }

//   nums.sort((a, b) => a - b);
//   let subt = nums.at(-1) - nums.at(-2);
//   nums.splice(nums.length - 2, 2, subt);

//   return subtract(nums);
// };

// subtract(arr1);
// console.log("============");
// subtract(arr2);

//--8-------- EX letter compare ----------

// let str1 = "web";
// let str2 = "bew";

// const compareStr = (str1, str2) => {
//   if (str1.length == str2.length) {
//     return  str1.toLowerCase().split('').sort((a,b) => a.localeCompare(b)).join('') == str2.toLowerCase().split('').sort((a,b) => a.localeCompare(b)).join('')
//   } else return false;
// };

// console.log(compareStr(str1, str2));

//--9-------- Ex Duplicate every char ----------

// let str = "Webbrain";

// const dupChar = (str) => {
//     return str.split('').map(v => v.repeat(2)).join('')
// }

// console.log(dupChar(str));

//--10-------- Ex: Compare arrs ----------

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// const compareArrs = (arr1, arr2) => {
//   return arr1.reduce((s, c) => s + c) == arr2.reduce((s, c) => s + c);
// };

// console.log(compareArrs(arr1, arr2));

//--11-------- Ex: calc ages ----------

// let obj = {
//   title: "webbrain",
//   age: 2,
//   child: {
//     age: 4,
//     name: "webbrain",
//     child: {
//       age: 5,
//     },
//   },
// };

// let sum = 0;

// const calcAges = (obj) => {
//   if (obj?.age) {
//     sum += obj.age;
//     obj = obj.child;
//     return calcAges(obj);
//   } else return sum;
// };

// console.log(calcAges(obj));
