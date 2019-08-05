// Given an array of integers, find the pair of adjacent elements
// that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

// initialize a currentLargestProduct to 0

// loop through array.
// Check for if current item in array is the last item in the array, if it is, skip it.
// If it isn't, check if the current item * the next item is larger than the currentNumber
// If it is, replace currentNumber, if it isn't continue.

// return currentLargestNumber

function adjacentElementsProduct(inputArray) {
  let currentLargestNumber = inputArray[0] * inputArray[1]

  for (let i = 0; i < inputArray.length; i++) {
    let currentNumber = inputArray[i];
    if (i === inputArray.length - 1) {
      continue;
    } else {
      if (currentNumber * inputArray[i + 1] > currentLargestNumber) {
        currentLargestNumber = currentNumber * inputArray[i + 1];
      } else {
        continue;
      }
    }
  }
  return currentLargestNumber;
}

console.log(adjacentElementsProduct([-1, -2])); // 2
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4])); // 6
console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23])); // 30
console.log(adjacentElementsProduct([-23, 4, -3, 8, -12])); // -12

