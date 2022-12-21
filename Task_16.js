// Ex 1: What is the error?
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     this.name = name; // The child class must be the super() -> super(name)
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
// alert(rabbit.name);

// Ex 2: What is the error?

// class Rabbit extends Object {
//   constructor(name) {
//     this.name = name; // We need to write super() to call parents constructor
//   }
// }

// let rabbit = new Rabbit("Rab");

// alert(rabbit.hasOwnProperty("name")); // Error
