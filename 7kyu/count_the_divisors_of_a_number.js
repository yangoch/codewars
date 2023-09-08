function getDivisorsCnt(n) {
  let count = 0;
  for (let i = n; i > 0; i--) {
    if (n % i === 0) count++;
  }
  return count;
  
  // const arr = Array.from({ length: n }, (value, index) => index + 1);
  // return arr.filter((el, index) => n % (index + 1) === 0).length;
}

// Best Practice
// function getDivisorsCnt(n) {
//   let cnt = 0;
//   for (let i = 1; i <= Math.sqrt(n); i++) {
//     if (n % i == 0) {
//       if (n / i == i) cnt++;
//       else cnt = cnt + 2;
//     }
//   }
//   return cnt;
// }

console.log(getDivisorsCnt(500000), 42);
console.log(getDivisorsCnt(7569), 9);
console.log(getDivisorsCnt(25), 3);
console.log(getDivisorsCnt(1), 1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);
console.log(getDivisorsCnt(54), 8);
