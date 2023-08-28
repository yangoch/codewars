function tribonacci(signature, n) {

  // if (n === 0) {
  //   return [];
  // } else if (n === 1) {
  //   return [signature[0]];
  // }

  for (let i = 0; i < n - 3; i++) {
    signature.push(
      signature[i] +
      signature[i + 1] +
      signature[i + 2]
    );
  }

  return signature.slice(0, n);
}

// Best Practices
// function tribonacci(signature,n){  
//   for (var i = 0; i < n-3; i++) { // iterate n times
//     signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
//   }
//   return signature.slice(0, n); //return trib - length of n
// }

console.log(tribonacci([1, 1, 1], 10, [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]));
console.log(tribonacci([1, 2, 3], 10, [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]));
