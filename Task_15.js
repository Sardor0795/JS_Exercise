// Ex: 1

// let obj = {
//   name: "Sardor",
//   age: 27,
// };

// Object.prototype.dell = function (obj, key) {
//   delete obj[key];
// };

// console.log(obj);

// Object.dell(obj, "age");

// console.log(obj);

// Ex: 2

// let obj = {
//   name: "Sardor",
//   age: 27,
// };

// Object.prototype.setProto = function (obj, key, type) {
//   Object.defineProperty(obj, key, type);
// };

// Object.setProto(obj, "age", { configurable: false });

// console.log(Object.getOwnPropertyDescriptor(obj, "age"));

// --------------

// let obj = {
//   name: "Sardor",
//   age: 27,
//   set(key, prop, type) {
//     Object.defineProperty(this, key, { [prop]: type });
//   },
// };

// obj.set("name", "writable", false);

// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
