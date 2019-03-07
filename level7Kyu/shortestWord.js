// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(str) {
  // split the string on spaces
  let splitString = str.split(" ");
  // A place to store the shortest word
  let shortestWord;
  // Iterate over the the splitString array
  for (let i = 0; i < splitString.length; i++) {
    let currentWord = splitString[i].length;
    // Set the first word in splitString array to be our current shortest word.
    if (i === 0) {
      shortestWord = currentWord;
    }
  // If the current word is shorter than the current shortest word, replace the shortest word with the current word
    if (currentWord < shortestWord) {
      shortestWord = currentWord;
    }
  }
  // At the end of the iteration, return the shortest word.
  return shortestWord;
}

console.log(findShort("bitcoin take over the world maybe w knows perhaps"), 3);
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  ),
  3
);
