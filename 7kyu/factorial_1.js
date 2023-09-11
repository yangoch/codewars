function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;

  // return Array.from({ length: n }, (_, index) => index + 1).reduce((acc, cv) => acc * cv, 1);
}

// Best Practice
// const factorial = n => n ? factorial(n - 1) * n : 1;

console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);
console.log(factorial(5), 120);
// console.log(factorial(7), 5040);
// console.log(factorial(17), 355687428096000);
