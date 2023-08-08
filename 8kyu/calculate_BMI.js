function bmi(weight, height) {
  const bmiFormula = weight / Math.pow(height, 2);

  if (bmiFormula <= 18.5) {
    return "Underweight";
  } else if (bmiFormula <= 25) {
    return "Normal";
  } else if (bmiFormula <= 30) {
    return "Overweight";
  }
  return "Obese";
}

console.log(bmi(80, 1.8)); // "Normal"
console.log(bmi(100, 1.8)); // "Obese"
console.log(bmi(91, 1.84)); // "Overweight"
