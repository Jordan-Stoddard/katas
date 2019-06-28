// Create a function that returns true if two arrays contain identical values, and false otherwise.

// To solve this question, your friend writes the following code:

// function checkEquals(arr1, arr2) {
// if (arr1 === arr2) {
//   return true
//  } else {
//   return false
//  }
// }
// But testing the code, you see that something is not quite right. Running the code yields the following results:

// checkEquals([1, 2], [1, 3]) ➞ false
// // Good so far...

// checkEquals([1, 2], [1, 2]) ➞ false
// // Yikes! What happened?
// Rewrite your friend's code so that it correctly checks if two arrays are equal. The tests below should pass:

// Examples
// checkEquals([1, 2], [1, 3]) ➞ false

// checkEquals([1, 2], [1, 2]) ➞ true

// checkEquals([4, 5, 6], [4, 5, 6]) ➞ true

// checkEquals([4, 7, 6], [4, 5, 6]) ➞ false


// loop over arr1, checking the current index against the same index of arr2.
// If the values are the same, continue, else return false.
// If we make it through to the end of the loop statement, return true.


// Time complexity: O(n)

function checkEquals(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}
