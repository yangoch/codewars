function getCount(str) {
  const vowels = str.match(/[aeiou]/gi);
  return vowels !== null ? vowels.length : 0;
}

// Best Practices
// function getCount(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }

console.log(getCount("abracadabra"), 5);
console.log(getCount("vbr"), 5);
