function SeriesSum(n) {
  let sum = 0;
  let divided = 1;

  for (let i = 0; i < n; i++) {
    // s += 1 / (1 + i * 3)
    sum += 1 / divided;
    divided += 3;
  }

  return sum.toFixed(2);
}

console.log(SeriesSum(1), "1.00");
console.log(SeriesSum(2), "1.25");
console.log(SeriesSum(3), "1.39");
console.log(SeriesSum(4), "1.49");
