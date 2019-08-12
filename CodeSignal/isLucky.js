// Ticket numbers usually consist of an even number of digits. 
// A ticket number is considered lucky if the sum of the 
// first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.

// Check that length of n is not an odd number, if it is return false.
// initialize firstHalfSum
// initialize secondHalfSum

// Loop through stringified number, if the current letter is less than the middle index
// add the current number to the firstHalfSum
// else add it to the secondHalfSum

// return firstHalfSum === secondHalfSum

function isLucky(n) {
    stringNum = n.toString()
    if (stringNum.length % 2 !== 0) {
        return false
    }

    let firstHalfSum = 0;
    let secondHalfSum = 0;
    let middleIndex = (stringNum.length - 1) / 2
    for (let i = 0; i < stringNum.length; i++) {
        let currentNum = +stringNum[i]
        if (i < middleIndex) {
            firstHalfSum += currentNum
        } else {
            secondHalfSum += currentNum
        }
    }

    return firstHalfSum === secondHalfSum
}

console.log(isLucky(1230)) // true
console.log(isLucky(239017)) // false
console.log(isLucky(134008)) // true
console.log(isLucky(10)) // false
console.log(isLucky(11)) // true
