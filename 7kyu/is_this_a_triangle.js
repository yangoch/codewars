function isTriangle(a, b, c) {
  const sideA = a + c > b;
  const sideB = b + c > a;
  const sideC = a + b > c;

  return sideA && sideB && sideC ? true : false;
}

console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(7, 2, 2)); // false
