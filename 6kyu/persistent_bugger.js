function persistence(num, counter = 0) {
  if(num < 10) {
    return counter;
  } else {
    const curNum = String(num).split("").reduce((acc, cv) => acc * cv, 1);
    return persistence(curNum, counter + 1);
  }
}

// Best Practices
// function persistence(num) {
//   var times = 0;
  
//   num = num.toString();
//   console.log(num); 
//   while (num.length > 1) {
//     times++;
//     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//   }
  
//   return times;
// }

// const persistence = num => {
//   return `${num}`.length > 1 
//     ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
//     : 0;
// }

console.log(persistence(39), 3);
console.log(persistence(25),2);
console.log(persistence(4),0);
console.log(persistence(999), 4);
