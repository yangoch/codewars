function XO(str) {
  if (str.length === 0) {
    return true;
  }

  const letterX = str.match(/x/gi);
  const letterO = str.match(/o/gi);

  if (letterX === null || letterO === null) {
    return false;
  }

  if (
    letterX.length === letterO.length ||
    (letterO.length === 0 && letterX.length === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

// Best Practices
// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }
// const XO = str => {
//   str = str.toLowerCase().split('');
//   return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }

console.log(XO("xo"), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);
console.log(XO(""), true);
