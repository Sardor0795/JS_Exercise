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
