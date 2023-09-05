function titleCase(title, minorWords) {
  if (title === "") return "";
  const titleArray = title.toLowerCase().split(" ");

  if (minorWords === "" || minorWords === undefined) {
    return titleArray.map(
      (word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    ).join(" ");
  } else {
    const minorWordsToLowerCase = minorWords.toLowerCase().split(" ");
    return titleArray.map((word, index) => {
      if (index > 0 && minorWordsToLowerCase.includes(word)) {
        return word;
      } else {
        return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
      }
    }).join(" ");
  }
}

console.log(titleCase(""), "");
console.log(titleCase("a clash of KINGS", "a an the of"), "A Clash of Kings");
console.log(
  titleCase("THE WIND IN THE WILLOWS", "The In"),
  "The Wind in the Willows"
);
console.log(titleCase("the quick brown fox"), "The Quick Brown Fox");
