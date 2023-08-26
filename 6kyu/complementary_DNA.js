function DNAStrand(dna) {
  let updatedString = "";
  for (let i = 0; i < dna.length; i++) {
    const char = dna[i];

    switch (char) {
      case "A":
        updatedString += "T";
        break;
      case "T":
        updatedString += "A";
        break;
      case "C":
        updatedString += "G";
        break;
      case "G":
        updatedString += "C";
        break;
    }
  }
  return updatedString;
}

// Best Practices
// function DNAStrand(dna) {
//   return dna.replace(/./g, function(c) {
//     return DNAStrand.pairs[c]
//   })
// }

// DNAStrand.pairs = {
//   A: 'T',
//   T: 'A',
//   C: 'G',
//   G: 'C',
// }

// var pairs = {'A':'T','T':'A','C':'G','G':'C'};
// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }

console.log(DNAStrand("AAAA"), "TTTT");
console.log(DNAStrand("ATTGC"), "TAACG");
console.log(DNAStrand("GTAT"), "CATA");
