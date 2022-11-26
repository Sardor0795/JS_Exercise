// Ex 1 ---

// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();

// console.log(user.ref.name);

// Natija undefined chiqadi sababi shu obekt ichida this bo'sh obekt ochadi va ref ga birlashtiradi ref : {}, obekt ichida yoq key
// chaqirilsa uni bor qilip koradi va uni qiymati yoq bo'gani uchun undefined chiqadi ref : {} <-- name: undefined

// Ex 2 ---

// let calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read(10, 20);

// console.log(calculator.mul());

// Ex 3 ---

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     console.log(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep().down().showStep();
