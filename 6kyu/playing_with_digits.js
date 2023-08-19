function digPow(n, p) {
  const arrayOfNumbers = String(n).split("");
  let raisingDegree = p;
  let sumOfNumbersSquared = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const number = arrayOfNumbers[i];

    sumOfNumbersSquared += Math.pow(number, raisingDegree);
    raisingDegree++;
  }

  return Number.isInteger(sumOfNumbersSquared / n)
    ? sumOfNumbersSquared / n
    : -1;
}

// Best Practices
// function digPow(n, p) {
//   var x = String(n)
//     .split("")
//     .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
//   return x % n ? -1 : x / n;
// }

console.log(digPow(89, 1), 1);
console.log(digPow(92, 1), -1);
console.log(digPow(46288, 3), 51);
