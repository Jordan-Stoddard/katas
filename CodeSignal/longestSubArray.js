//Codewriting

//Given an array of integers a containing only 0s and 1s, your task is to find the length of the longest subarray that has an equal number of 0s and 1s.
// If there is no such subarray, the answer should be 0

// Example

// For a = [1, 0, 1, 1, 1, 0, 1, 0, 1], the output should be longestEqualSubarray(a) = 4

// There are 2 subarrays of length 4 with an equal number of 0s and 1s: a[4..7] = [1, 0, 1, 0] and a[5..8] = [0, 1, 0, 1] (0-based)
// There are no subarrays of a greater length with an equal number of 0s and 1s, so the answer is 4

// For a = [0, 0, 0, 1, 1, 1, 1, 1, 0, 0], the output should be longestEqualSubarray(a) = 10

const a = [1, 0, 1, 1, 1, 0, 1, 0, 1]

function longestEqualSubarray(a) {

    let currentLongest = 0
    let countObj = {}

    // Check if the array has an exactly equal number of 0's and 1's if it does, return the length of the entire array.
    for (let i = 0; i < a.length; i++) {
        let currentValue = a[i]
        if (!(currentValue in countObj)) {
            countObj[currentValue] = 1
        } else {
            countObj[currentValue] += 1
        }
        
    }
    if (countObj[0] === countObj[1]) {
        return a.length
    }



}


console.log(longestEqualSubarray(a))