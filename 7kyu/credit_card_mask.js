function maskify(cc) {
  return cc.length > 4
    ? `${cc.slice(0, cc.length - 4).replace(/\w/g, "#")}${cc.slice(cc.length - 4)}`
    : cc;
}
// Best Practices
// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }
// function maskify(cc) {
//   return cc.replace(/.(?=....)/g, '#');
// }
console.log(maskify("4556364607935616"), "############5616");
console.log(maskify("1"), "1");
console.log(maskify("11111"), "#1111");
