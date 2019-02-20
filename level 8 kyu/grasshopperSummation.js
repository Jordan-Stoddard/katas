// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

const summation = function(num) {
  // store a floating number
  let floatingNumber = 0;
  // store a total variable
  let total = 0;

  // create a for loop that iterates as many times as the number passed in is long
  for (let i = 0; i < num; i++) {
    // if floatingNumber is less than num, increment floating number and then add it to total
    if (floatingNumber < num) {
      floatingNumber++;
      total += floatingNumber;
    }
  }

  // return total
  return total;
};

console.log(summation(1), 1);
console.log(summation(8), 36);
console.log(summation(2), 3);
