function repeatStr(n, s) {
  let str = "";

  for (let i = 0; i < n; i++) {
    str += s;
  }

  return str;
}

// Best Practices
// function repeatStr(n, s) {
//   return s.repeat(n);
// }

console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");
