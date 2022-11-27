// Ex 1 ---

// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();

// console.log(user.ref.name);

// natija // Error: Cannot read property 'name' of undefined chiqadi sababi bu erda this qiymati undefined, u faqat funktsya qachonki obekt ichidagi metod qilib chqirilganda
// shu . chap tomonidagi obektga teng bo'ladi boshqa payt qiymati bo'lmaydi, bu erda esa u metod sfatida chaqirilmayapti, va obekt
// ichida turgan bo'lsaxam u obektga teng emas

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

// Ex 4

// Ex 4 ---

// let obj = {
//   name: "Sardor",
//   age: 27,
// };

// function A() {
//   return obj;
// }
// function B() {
//   return obj;
// }

// let a = new A();
// let b = new B();

// console.log(a);
// console.log(b);

// console.log(a == b);
