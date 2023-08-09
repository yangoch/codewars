function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let str = "";
  const dnaToUpperCase = dna.toUpperCase();

  for (let i = 0; i < dnaToUpperCase.length; i++) {
    const char = dnaToUpperCase[i];

    if (char === "T") {
      str += "U";
    } else if (char === "U") {
      str += "T";
    } else {
      str += char;
    }
  }
  return str;
}

// function DNAtoRNA(dna) {
//   return dna.replace(/T/g, "U");
// }

// function DNAtoRNA(dna) {
//   return dna.split("T").join("U");
// }

console.log(DNAtoRNA("TTTT")); // "UUUU"
console.log(DNAtoRNA("GCAT")); // "GCAU"
console.log(DNAtoRNA("GACCGCCGCC")); // "GACCGCCGCC"
