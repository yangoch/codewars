function sumDigits(number) {
  const stringNumber = Math.abs(number).toString();
  let sum = 0;

  for (let i = 0; i < stringNumber.length; i++) {
    const number = stringNumber[i];
    sum += Number(number);
  }

  return sum;
}
// function sumDigits(number) {
//   return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
// }

console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);
