function sumOfMinimums(arr) {
  return arr.map((item) => Math.min(...item)).reduce((acc, cv) => acc + cv, 0);
}
// Best Practice
// function sumOfMinimums(arr) {
//   return arr.reduce((p, c) => p + Math.min(...c), 0);
// }

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ]),
  9
);
console.log(
  sumOfMinimums([
    [11, 12, 14, 54],
    [67, 89, 90, 56],
    [7, 9, 4, 3],
    [9, 8, 6, 7],
  ]),
  76
);
