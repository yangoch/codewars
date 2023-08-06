function digitize(n) {
  const convertedToString = String(n);
  let arr = [];

  for (let i = convertedToString.length - 1; i >= 0; i--) {
    const char = convertedToString[i];
    arr.push(Number(char));
  }

  return arr;
}

console.log(digitize(35231)); // [1,3,2,5,3]
console.log(digitize(0)); // [0])
