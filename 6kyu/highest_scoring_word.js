function high(x) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const arrayOfWords = x.split(" ");
  let objOfPoints = {};
  let countedArrayOfWords = [];

  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    objOfPoints[letter] = i + 1;
  }

  arrayOfWords.map((word) => {
    let sumOfWord = 0;
    [...word].forEach((char) => {
      sumOfWord += objOfPoints[char];
    });
    countedArrayOfWords.push([word, sumOfWord]);
  });

  let maxNumber = 0;
  for (const [word, points] of countedArrayOfWords) {
    if (points > maxNumber) {
      maxNumber = points;
    }
  }

  return countedArrayOfWords.find((el) => el[1] === maxNumber)[0];
}

// Best Practices

// function high(s) {
//   let as = s
//     .split(" ")
//     .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
//   return s.split(" ")[as.indexOf(Math.max(...as))];
// }

// function high(x) {
//   let alphabets = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];

//   let words = x.split(" ");
//   let highestScore = 0;
//   let highestScoreWord = "";

//   for (let word of words) {
//     let lettersSum = 0;

//     for (let letter of word) {
//       lettersSum += alphabets.indexOf(letter) + 1;
//     }

//     if (lettersSum > highestScore) {
//       highestScore = lettersSum;
//       highestScoreWord = word;
//     }
//   }

//   return highestScoreWord;
// }

// function high(words) {
//   const alpha = " abcdefghijklmnopqrstuvwxyz";
//   const score = (word) =>
//     word.split("").reduce((a, b) => a + alpha.indexOf(b), 0);

//   return words
//     .split(" ")
//     .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
//     .sort((a, b) => a.score - b.score || b.pos - a.pos)
//     .pop().word;
// }

console.log(high("man i need a taxi up to ubud"), "taxi");
console.log(high("what time are we climbing up the volcano"), "volcano");
console.log(high("take me to semynak"), "semynak");
console.log(high("aa b"), "aa");
console.log(high("b aa"), "b");
console.log(high("bb d"), "bb");
console.log(high("d bb"), "d");
console.log(high("aaa b"), "aaa");
