function accum(s) {
  let str = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (s.length !== i + 1) {
      str += `${char.toUpperCase()}${char.repeat(count).toLowerCase()}-`;
    } else {
      str += `${char.toUpperCase()}${char.repeat(count).toLowerCase()}`;
    }

    count++;
  }

  return str;
}

// Best Practices
// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }
// function accum(s) {
// 	return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
// }

console.log(
  accum("ZpglnRxqenU"),
  "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
);
console.log(
  accum("NyffsGeyylB"),
  "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
);
console.log(
  accum("MjtkuBovqrU"),
  "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
);
console.log(
  accum("EvidjUnokmM"),
  "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
);
console.log(
  accum("HbideVbxncC"),
  "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
);
