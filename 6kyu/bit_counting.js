const countBits = (n) => {
  const countOne = n.toString(2).match(/[1]/g) || [];
  return countOne.length;
};

// Best Practices
// countBits = n => n.toString(2).split('0').join('').length;
// const countBits = function(n) {
//   return n.toString(2).replace(/0/g,'').length;
// };

console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);