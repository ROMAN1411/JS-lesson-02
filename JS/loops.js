const triangleSize = Number(prompt("Введіть розмір сторони трикутника"));
let row = "";

// for (let index = 0; index < triangleSize; index++) {
//   row += "1";
//   console.log(row);
// }

console.log("-------------------");

// let rowForWhileLoop = "";
// let y = 0;

// while (y < triangleSize) {
//   rowForWhileLoop += 1;
//   console.log(rowForWhileLoop);
//   y += 1;
// }

console.log("-------------------");

let z = 0;
do {
  console.log(z);
  z += 1;
} while (z <= triangleSize);
