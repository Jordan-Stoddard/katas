// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// Version 2.0: 1 iteration
function positiveSum(arr) {
   return arr.reduce((sum, currentValue) => {
      return currentValue > 0 ? sum + currentValue : sum
   }, 0)
}

console.log(positiveSum([1, 2, 3, 4, 5])); // 15
console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([])); // 0
console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
console.log(positiveSum([-1, 2, 3, 4, -5])); // 9

// Version 1.0: 2 iterations

// function positiveSum(arr) {
//   const filteredArr = arr.filter(number => number > 0);
//   const summedFilteredArr = filteredArr.reduce(
//     (accumulator, currentValue) => (accumulator += currentValue),
//     0
//   );
//   return summedFilteredArr;
// }


