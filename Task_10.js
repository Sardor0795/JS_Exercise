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

// let num = [2, 3, 1, 1, 7, 8, 8, 6];

// let res = num.filter((value, index, array) => {
//   console.log(
//     `Value: ${value}  Index: ${index}  | ${array.indexOf(value)} === ${index} Res: ${array.indexOf(value) === index}`
//   );
//   return array.indexOf(value) === index;
// });

// console.log(res);

// Instead of new Set() method ------

// let num = [2, 3, 1, 1, 7, 8, 8, 6];

// let res = num.filter((value, index, array) => {
//   console.log(
//     `Value: ${value}  Index: ${index + 1}  | ${array.indexOf(value, index +1)} === ${-1} Res: ${array.indexOf(value, index +1) === -1}`
//   );
//   return array.indexOf(value, index +1) === -1;
// });

// console.log(res);
