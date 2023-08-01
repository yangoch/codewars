function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

console.log(boolToWord(true), "/ true");
console.log(boolToWord(false), "/ false");
console.log(boolToWord(0), "/ 0");
console.log(boolToWord(1), "/ 1");
console.log(boolToWord(null), "/ null");
