function searchLongestWord(sentence) {
  const words = sentence.split(" ");

  let longestWord = "";

  for (const word of words) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(searchLongestWord("Full Stack JavaScript Development"));
console.log(searchLongestWord("Programmeren is fun"));
