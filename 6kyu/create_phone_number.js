function createPhoneNumber(numbers) {
  const numbersToString = numbers.join("");
  return numbersToString.length === 10
    ? `(${numbersToString.slice(0, 3)}) ${numbersToString.slice(
        3,
        6
      )}-${numbersToString.slice(6)}`
    : null;
}

// Best Practices
// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";
  
//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }
  
//   return format;
// }

console.log(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  "(123) 456-7890"
);
console.log(
  createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
  "(111) 111-1111"
);
console.log(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  "(123) 456-7890"
);
