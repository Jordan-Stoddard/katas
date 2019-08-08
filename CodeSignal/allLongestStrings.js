// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

// initialize longest string variable.
// Loop through array and check the length of the current string, if it's longer than currentLongest, set the value of currentLongest to be the current string
// filter any strings that don't match the length of the current longest string.

function allLongestStrings(inputArray) {
    let currentLongest = 0;
    inputArray.forEach(str => {if(str.length > currentLongest) currentLongest = str.length})
    return inputArray.filter(str => str.length === currentLongest)
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])); // ["aba", "vcd", "aba"]
console.log(allLongestStrings(["abc", "eeee", "abcd", "dcd"])); // ["eeee", "abcd"]
console.log(
  allLongestStrings([
    "a",
    "abc",
    "cbd",
    "zzzzzz",
    "a",
    "abcdef",
    "asasa",
    "aaaaaa"
  ])
); // ["zzzzzz", "abcdef", "aaaaaa"]
console.log(allLongestStrings(["abacaba", "abacab", "abac", "xxxxxx"])); // ["abacaba"]
