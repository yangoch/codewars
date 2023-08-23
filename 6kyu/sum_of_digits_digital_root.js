function digitalRoot(n) {
  if (n < 10) {
    return n;
  } else {
    const sumOfNumbers = String(n)
      .split("")
      .reduce((acc, cv) => Number(acc) + Number(cv), 0);
    return digitalRoot(sumOfNumbers);
  }
}

// Best Practices
// function digital_root(n) {
//   return (n - 1) % 9 + 1;
// }

console.log(digitalRoot(16), 7);
console.log(digitalRoot(456), 6);
console.log(digitalRoot(942), 6);
console.log(digitalRoot(493193), 2);
