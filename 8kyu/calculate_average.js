function findAverage(array) {
  return array.length === 0 ? 0 : array.reduce((acc, cv) => acc + cv, 0) / array.length;
}

console.log(findAverage([1, 1, 1]), 1);
console.log(findAverage([1, 2, 3]), 2);
console.log(findAverage([1, 2, 3, 4]), 2.5);
