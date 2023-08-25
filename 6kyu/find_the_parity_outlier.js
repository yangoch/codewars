function findOutlier(integers) {
  const odd = integers.filter((number) => number % 2);
  const even = integers.filter((number) => !(number % 2));
  return odd.length === 1 ? odd[0] : even[0];
}

console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);
