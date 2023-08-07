function getSum(a, b) {
  //Good luck!
  if (a === b) return a;

  let sum = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }

  return sum;
}

// const GetSum = (a, b) => {
//   let min = Math.min(a, b),
//     max = Math.max(a, b);
//   return ((max - min + 1) * (min + max)) / 2;
// };

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// console.log(GetSum(-1, 2)); // 2
console.log(getSum(-1, 2)); // 2
console.log(getSum(-1, 0)); // -1
console.log(getSum(0, -1)); // -1
console.log(getSum(0, 1)); // 1
console.log(getSum(2, 2)); // 2
