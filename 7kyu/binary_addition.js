function addBinary(a, b) {
  const sum = a + b;

  return sum.toString(2);
}

function decimalToBinary(arg) {
  let binary = "";
  while (arg > 0) {
    console.log(arg);
    binary = (arg % 2) + binary;
    arg = Math.floor(arg / 2);
  }
  return binary;
}

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

console.log(decimalToBinary(5));

console.log(addBinary(1, 1));
console.log(addBinary(1, 2));
console.log(addBinary(5, 9));
console.log(addBinary(155, 100));