function count(string) {
  let obj = {};

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    obj[char] = (obj[char] || 0) + 1;
  }

  return obj;
}

// Best Practices
// function count(string) {
//   var count = {};
//   string.split("").forEach(function (s) {
//     count[s] ? count[s]++ : (count[s] = 1);
//   });
//   return count;
// }

// function count(string) {
//   return string.split("").reduce(function (counts, char) {
//     counts[char] = (counts[char] || 0) + 1;
//     return counts;
//   }, {});
// }

console.log(count(""), {});
console.log(count("a"), { a: 1 });
console.log(count("ab"), { a: 1, b: 1 });
console.log(count("aba"), { a: 2, b: 1 });
console.log(count("ABC"), { A: 1, B: 1, C: 1 });
