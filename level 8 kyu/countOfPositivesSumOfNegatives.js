// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) return []
    // Place to store positive number count
    let positiveCount = 0
    // Place to store sum of negative numbers
    let negativeSum = 0
        // Iterate over array
        for (let i = 0; i < input.length; i++) {
            number = input[i]
            // if positive increment positive count
            if (number > 0) {
                positiveCount++
            } else {
                // else add to sum of negative count
                negativeSum += number
            }
        }
    
        // return new array with values of posiive count and negative sum
        return [positiveCount, negativeSum]
}


let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(testData), [10, -65])