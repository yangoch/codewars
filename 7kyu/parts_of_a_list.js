/*

7 kyu
Parts of a list

Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.
Examples of returns in different languages:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
or
 a = {"az", "toto", "picaro", "zone", "kiwi"} -->
{{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or 
a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
"(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"
Note
You can see other examples for each language in "Your test cases"

*/

function partlist(arr) {
  return arr
    .map((item, index, array) => {
      return [
        arr.slice(0, index + 1).join(" "),
        arr.slice(index + 1).join(" "),
      ];
    })
    .slice(0, -1);
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"]), [
  ["I", "wish I hadn't come"],
  ["I wish", "I hadn't come"],
  ["I wish I", "hadn't come"],
  ["I wish I hadn't", "come"],
]);
console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"]), [
  ["cdIw", "tzIy xDu rThG"],
  ["cdIw tzIy", "xDu rThG"],
  ["cdIw tzIy xDu", "rThG"],
]);
console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"]), [
  ["vJQ", "anj mQDq sOZ"],
  ["vJQ anj", "mQDq sOZ"],
  ["vJQ anj mQDq", "sOZ"],
]);
