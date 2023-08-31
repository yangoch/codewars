function getAverage(marks){
  return Math.floor(marks.reduce((acc, cv) => acc + cv, 0) / marks.length);
}

console.log(getAverage([2,2,2,2]),2);
console.log(getAverage([1,2,3,4,5,]),3);
console.log(getAverage([1,1,1,1,1,1,1,2]),1);