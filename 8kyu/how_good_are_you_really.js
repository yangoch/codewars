function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const averageClassPoints = classPoints.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / classPoints.length;

  return yourPoints > averageClassPoints;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // true
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)); // false
