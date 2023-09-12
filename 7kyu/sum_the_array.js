Array.prototype.sum = function () {
  if (this.length === 0) return 0;
  return this.reduce((acc, cv) => acc + cv, 0);
};

var arr1 = [1, 2, 3, 4];
console.log(arr1.sum()); //returns 10
var arr2 = [10, 28, 14, 33];
console.log(arr2.sum()); //returns 85
