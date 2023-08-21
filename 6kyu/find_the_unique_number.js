function findUniq(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    obj[element] = (obj[element] || 0) + 1;
  }

  for (const number of Object.entries(obj)) {
    if (number[1] === 1) {
      return Number(number[0]);
    }
  }
}

// Best Practices
// function findUniq(arr) {
//   return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
// }

console.log(findUniq([1, 0, 0]), 1);
console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([0, 0, 1]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3, 11, 11]), 10);
