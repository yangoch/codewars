/*

7 kyu
Fizz Buzz

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

*/

function fizzbuzz(n) {
  const arrayOfNumbers = Array.from({length: n}, (_, index) => index + 1);

  return arrayOfNumbers.map(number => {
    if(number % 3 === 0 && number % 5 === 0) {
      return "FizzBuzz"; 
    } else if(number % 5 === 0) {
      return "Buzz"; 
    } else if(number % 3 === 0) {
      return "Fizz"; 
    } else {
      return number;
    }
  });
}
// Best practices
// var fizzify = fizzbuzz = function(n)
// {
//   return Array.apply(null, new Array(n)).map(function(e, i){
//     return (++i % 3 ? '' : 'Fizz' ) + (i % 5 ? '' : 'Buzz') || i;
//   }); 
// }
// function fizzbuzz(n)
// {
//   var i = 1, arr = [];
//   while(i <= n) {
//     var fizz = (i % 3 == 0);
//     var buzz = (i % 5 == 0);
//     if(fizz || buzz) {
//       arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
//     }
//     else {
//       arr.push(i);
//     }
//     i++;
//   }
//   return arr;
// }
// var fizzify = fizzbuzz;

console.log(fizzbuzz(10), [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']);
console.log(fizzbuzz(15));
