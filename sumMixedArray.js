// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

const sumMix = mixedArray =>  mixedArray.reduce((accumulator, currentValue) =>  accumulator + parseInt(currentValue), 0);


console.log(sumMix([9, 3, "7", "3"]), 22);
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42);
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 41);

// For loop
// const sumMix = mixedArray => {
//     let sum = 0;
//     for (let i = 0; i < mixedArray.length; i++) {
//       let currentNumber = parseInt(mixedArray[i]);
//       sum += currentNumber;
//     }
//     return sum;
//   };
