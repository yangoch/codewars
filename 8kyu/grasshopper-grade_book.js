function getGrade(s1, s2, s3) {
  // Code here
  const averageNumber = (s1 + s2 + s3) / 3;

  if (averageNumber >= 90 && averageNumber <= 100) {
    return "A";
  } else if (averageNumber >= 80 && averageNumber < 90) {
    return "B";
  } else if (averageNumber >= 70 && averageNumber < 80) {
    return "C";
  } else if (averageNumber >= 60 && averageNumber < 70) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(98,91,90));
console.log(getGrade(89,89,90));
console.log(getGrade(45,89,73));