function solution(nums) {
  return nums === null ? [] : nums.sort((a, b) => a - b);
}

// Best Practices
// function solution(nums){
//   if(nums === null) {
//     return [];
//   }
//   for(let i = 0; i < nums.length; i++) {
//     if( nums[i] > nums[i + 1]) {
//       let newNum = nums[i]
//       nums[i] = nums[i + 1];
//       nums[i + 1] = newNum
//       solution(nums);
//     }
//   }
//   return nums;
// }
// function solution(nums){
//   return (nums || []).sort(function(a, b){
//     return a - b
//   });
// }

console.log(solution([1, 2, 3, 10, 5]), [1, 2, 3, 5, 10]);
console.log(solution(null), []);
console.log(solution([]), []);
console.log(solution([20, 2, 10]), [2, 10, 20]);
console.log(solution([2, 20, 10]), [2, 10, 20]);
