//return the total number of smiling faces in the array
function countSmileys(arr) {
  const validSmiles = [
    ":-)",
    ":-D",
    ":~)",
    ":~D",
    ":D",
    ":)",
    ";-)",
    ";-D",
    ";~)",
    ";~D",
    ";D",
    ";)",
  ];

  return arr.filter((item) => validSmiles.includes(item)).length;
}

// Best Practice
// function countSmileys(arr) {
//   return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// }

console.log(countSmileys([]), 0);
console.log(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
