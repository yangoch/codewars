/*

7 kyu
Filter the number

Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

*/

const filterString = function (value) {
  return Number(value.match(/[0-9]/g).join(""));
};

console.log(filterString("123"), 123, `For the input "123"`);
console.log(filterString("a1b2c3"), 123, `For the input "a1b2c3"`);
console.log(filterString("aa1bb2cc3dd"), 123, `For the input "aa1bb2cc3dd"`);
