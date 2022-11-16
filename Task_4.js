// Ex 1 ------

// let browser = "Chrome";

// switch (browser) {
//   case "Edge":
//     console.log("You've got tje Edge");
//     break;

//   case "Chrome":
//   case "FireFox":
//   case "Safari":
//   case "Opera":
//     console.log("Okay we support these browsers too");
//     break;

//   default:
//     console.log("We hope that this page looks ok!");
// }

// Agar browser da Edge qiymati bo'lsa faqat case "Edge" ishlidi va kod to'xtaydi,
// Agar browser da case: Chrome, FireFox, Safari, Opera  shulardan qay biri kesaxam Okay dan boshlangan log ishlidi sababi orasida break yoq!
// Agar xech bir case ga to'g'ri kemasa default qiymat ishlap ketadi

// Ex 2 ------

// let a = 1;

// if (a == 0) {
//   console.log(0);
// }

// if (a == 1) {
//   console.log(1);
// }

// if (a == 2 || a == 3) {
//   console.log("2,3");
// }

// Ex 3 ------ Find Prime Numbers ------

// let num = 20;

// for (let i = 1; i <= num; i++) {
//   let check = 0;

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       check = 1;
//       break;
//     }
//   }

//   if (i > 1 && check == 0) {
//     console.log(i);
//   }
// }

// Ex 4 ------ Multiplication table ------

// for (let i = 2; i <= 9; i++) {
//   console.log("===========");
//   console.log(`${i} Karra`);
//   console.log("===========");

//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }
