// They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it series #1:
// Are they opposite?

// #Task
// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite.
// you can assume that the string only contains letters or it's a empty string.
// Also take note of the edge case - if both strings are empty then you should return false/False.

// 1: Test if the letters are the same, if not return false.
// 2: if the letters are the same, test if they are uppercase or lower case.
// 3: Once you know what their cases are, test them against each other.

function isOpposite(s1, s2) {
  if (s1 === "" && s2 === "") return false;
  let reversedString = "";
  for (let i = 0; i < s1.length; i++) {
    let currentLetter = s1[i];
    currentLetter === currentLetter.toLowerCase()
      ? (reversedString += currentLetter.toUpperCase())
      : (reversedString += currentLetter.toLowerCase());
  }
  if (reversedString === s2) {
    return true;
  } else {
    return false;
  }
}

console.log(isOpposite("ab", "AB"), true);
console.log(isOpposite("aB", "Ab"), true);
console.log(isOpposite("aBcd", "AbCD"), true);
console.log(isOpposite("aBcde", "AbCD"), false);
console.log(isOpposite("AB", "Ab"), false);
console.log(isOpposite("", ""), false);

// if (stringTwoObj[currentLetter] === stringTwoObj[currentLetter].toUpperCase()) {
//     stringTwoObj[currentLetter] = true
//  } else {
//     stringTwoObj[currentLetter] = false
//  }

// if (stringOneObj[currentLetter] === stringOneObj[currentLetter].toUpperCase()) {
//     stringOneObj[currentLetter] = true
//  } else {
//     stringOneObj[currentLetter] = false
//  }
