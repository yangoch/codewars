function mxdiflg(a1, a2) {
  if(a1.length === 0 || a2.length === 0) return -1;

  const lengthOfArrayA1 = a1.map(el => el.length);
  const lengthOfArrayA2 = a2.map(el => el.length)

  return Math.max(
    Math.max(...lengthOfArrayA1) - Math.min(...lengthOfArrayA2),  Math.max(...lengthOfArrayA2) - Math.min(...lengthOfArrayA1)
  );
}

const s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2), 13);