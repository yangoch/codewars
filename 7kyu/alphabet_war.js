/*

7 kyu
Alphabet war

Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!

*/

function alphabetWar(fight) {
  const powerOfLetters = {
    leftSide: {
      w: 4,
      p: 3,
      b: 2,
      s: 1,
    },
    rightSide: {
      m: 4,
      q: 3,
      d: 2,
      z: 1,
    },
  };

  const matchedLeftLetters = fight.match(/[w|p|b|s]/g);
  const matchedRightLetters = fight.match(/[m|q|d|z]/g);
  const leftScope =
    matchedLeftLetters === null
      ? 0
      : matchedLeftLetters
          .map((letter) => powerOfLetters.leftSide[letter])
          .reduce((acc, cv) => acc + cv, 0);
  const rightScope =
    matchedRightLetters === null
      ? 0
      : matchedRightLetters
          .map((letter) => powerOfLetters.rightSide[letter])
          .reduce((acc, cv) => acc + cv, 0);


  return leftScope === rightScope
    ? "Let's fight again!"
    : leftScope > rightScope
    ? "Left side wins!"
    : "Right side wins!";
}

// Best Practice
// function alphabetWar(fight) {
//   let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
//   let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
//   return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
// }

console.log(alphabetWar("z"), "Right side wins!");
console.log(alphabetWar("zdqmwpbs"), "Let's fight again!");
console.log(alphabetWar("zzzzs"), "Right side wins!");
console.log(alphabetWar("wwwwww"), "Left side wins!");
