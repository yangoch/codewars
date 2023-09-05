function gimme(triplet) {
  const sortedArray = [...triplet].sort((a,b) => a - b);
  const midNumber = sortedArray[Math.floor(sortedArray.length / 2)]
  return triplet.indexOf(midNumber);
}

// Best Practices
// function gimme(a) {
//   return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
// }
// const gimme = function (arr) {
//   return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
// };

console.log(gimme([2, 3, 1]), 0);
console.log(gimme([5, 10, 14]), 1);
console.log(gimme([2.1, 3.2, 1.4]), 0);
console.log(gimme([5.9, 10.4, 14.2]), 1);
console.log(gimme([-2, -3, -1]), 0);
console.log(gimme([-5, -10, -14]), 1);
console.log(gimme([-2, -3.2, 1]), 0);
console.log(gimme([-5.2, -10.6, 14]), 0);
