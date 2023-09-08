function maxMultiple(divisor, bound) {
  for (let i = bound; i > 0; i--) {
    if (i % divisor === 0) {
      return i;
    }
  }
}

// Best Practices
// function maxMultiple(divisor, bound) {
//   return bound - (bound % divisor);
// }
// function maxMultiple(divisor, bound) {
//   return Math.floor(bound / divisor) * divisor;
// }

console.log(maxMultiple(2, 7), 6);
console.log(maxMultiple(3, 10), 9);
console.log(maxMultiple(7, 17), 14);
console.log(maxMultiple(10, 50), 50);
console.log(maxMultiple(37, 200), 185);
console.log(maxMultiple(7, 100), 98);
