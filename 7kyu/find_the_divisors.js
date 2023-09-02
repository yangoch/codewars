function divisors(integer) {
  let divisorsArray = [];

  for (let i = 2; i < integer; i++) {

    if (Number.isInteger(integer / i)) {
      divisorsArray.push(i);
    }
  }

  return divisorsArray.length === 0 ? `${integer} is prime` : divisorsArray;
}

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");
