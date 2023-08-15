function duplicateCount(text) {
  const textToLowerCase = text.toLowerCase();
  let duplicate = {};
  let count = 0;

  for (const char of textToLowerCase) {
    duplicate[char] = (duplicate[char] || 0) + 1;
  }

  for (const [key, value] of Object.entries(duplicate)) {
    if (value > 1) {
      count++;
    }
  }

  return count;
}

// Best practices
// function duplicateCount(text) {
//   return (
//     text
//       .toLowerCase()
//       .split("")
//       .sort()
//       .join("")
//       .match(/([^])\1+/g) || []
//   ).length;
// }

// function duplicateCount(text) {
//   return text
//     .toLowerCase()
//     .split("")
//     .filter(function (val, i, arr) {
//       return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
// }

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1);
console.log(
  duplicateCount("Indivisibilities"),
  2,
  "characters may not be adjacent"
);
// // "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
