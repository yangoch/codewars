/*

8 kyu
Will there be enough space?

The Story:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

 - cap is the amount of people the bus can hold excluding the driver.
 - on is the number of people on the bus excluding the driver.
 - wait is the number of people waiting to get on to the bus excluding the driver.

If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

*/

function enough(cap, on, wait) {
  const freeSpaces = cap - on;

  if (freeSpaces === 0) {
    return wait;
  } else if (freeSpaces >= wait) {
    return 0;
  } else if (freeSpaces < wait) {
    return wait - freeSpaces;
  }
}

// Best Practice 
// function enough(cap, on, wait) {
//   return Math.max(wait + on - cap, 0);
// }
// function enough(cap, on, wait) {
//   return (on+wait > cap) ? on+wait-cap : 0;
// }
// function enough(cap, on, wait) {
//   if (on + wait < cap){
//   return 0;
//   } else {
//   return (on + wait) - cap;
//   }
// }

console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(53, 53, 33), 33);
console.log(enough(56, 1, 80), 25);
console.log(enough(20, 5, 5), 0);
