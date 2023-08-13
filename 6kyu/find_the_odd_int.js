function findOdd(A) {
  const count = {};

  A.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
    // If the value is present, we increment it by 1, otherwise, we initialize it to 1.
    // We used the logical OR (||) operator to check if the key hasn't been initialized in the object.
    // If the accessor returns undefined, we initialize the value for the key to 0 + 1.
  });

  for (const [key, value] of Object.entries(count)) {
    if (value % 2) {
      return Number(key);
    }
  }
}

// Best Practices

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// function findOdd(arr) {
//   return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
// }

// Best Practices

console.log(findOdd([7])); // 7
console.log(findOdd([1, 1, 2])); // 2
console.log(findOdd([0, 1, 0, 1, 0])); // 0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 4
