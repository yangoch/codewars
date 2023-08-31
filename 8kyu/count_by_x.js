function countBy(x, n) {
  let array = [];

  for (let i = x; i <= n * x; i += x) {
    array.push(i);
  }

  return array;
}

// const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

console.log(countBy(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(countBy(2, 5), [2, 4, 6, 8, 10]);
