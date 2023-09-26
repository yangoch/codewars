/*

7 kyu
Sum of numbers from 0 to N

Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0

*/

const SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count < 0) return `${count}<0`;
    if (count === 0) return "0=0";

    const numbersArray = Array.from({ length: count + 1 }, (_, index) => index);
    const stringOfSum = numbersArray.join("+");
    const sumOfNumber = numbersArray.reduce((acc, cv) => acc + cv, 0);

    return `${stringOfSum} = ${sumOfNumber}`;
  };

  return SequenceSum;
})();

console.log(SequenceSum.showSequence(6), "0+1+2+3+4+5+6 = 21");
