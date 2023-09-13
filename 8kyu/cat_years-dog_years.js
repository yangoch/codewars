/*

8 kyu
Cat years, Dog years

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/

const humanYearsCatYearsDogYears = function (humanYears) {
  const catYears = {
    firstYear: 15,
    secondYear: 9,
    theNextYears: 4,
  };
  const dogYears = {
    firstYear: 15,
    secondYear: 9,
    theNextYears: 5,
  };
  const sumOfCatYears =
    humanYears >= 3
      ? catYears.firstYear +
        catYears.secondYear +
        (humanYears - 2) * catYears.theNextYears
      : humanYears === 2
      ? catYears.firstYear + catYears.secondYear
      : catYears.firstYear;
  const sumOfDogYears =
    humanYears >= 3
      ? dogYears.firstYear +
        dogYears.secondYear +
        (humanYears - 2) * dogYears.theNextYears
      : humanYears === 2
      ? dogYears.firstYear + dogYears.secondYear
      : dogYears.firstYear;

  return [humanYears, sumOfCatYears, sumOfDogYears];
};

// Best Practice
// var humanYearsCatYearsDogYears = function(y) {
//   if (y == 1) return [1, 15, 15]
//   if (y == 2) return [2, 24, 24]
//   return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
// }

console.log(humanYearsCatYearsDogYears(1), [1, 15, 15]);
console.log(humanYearsCatYearsDogYears(2), [2, 24, 24]);
console.log(humanYearsCatYearsDogYears(10), [10, 56, 64]);
