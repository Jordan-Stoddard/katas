// Given a year, return the century it is in. 
// The first century spans from the year 1 up to and including the year 100, the second - 
// from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be
// centuryFromYear(year) = 20;
// For year = 1700, the output should be
// centuryFromYear(year) = 17.

// Convert year to a string.
// Inititalize turnOfCentury boolean
// initialize empty string to track 100 & 1000 places.
// If year.length is less than or equal to 2, return 1.

// If the last two indexes are 0, toggle turnOfCentury to true.

// Iterate through year string in reverse order, place all values to the left of the last two indexes into empty string.
// if turnOfCentury is true, return +concatenated string
// if turnOfCentury is false, return +concatenated string + 1


function centuryFromYear(year) {
    const iterableYear = year.toString()
    let turnOfCentury = false
    let century = ''
    if (year <= 99) {
        return 1
    }
    let onesPlace = iterableYear[iterableYear.length - 1]
    let tensPlace = iterableYear[iterableYear.length - 2]
    if (onesPlace === '0' && tensPlace === '0') {
        turnOfCentury = true
    }

    for (let i = 0; i < iterableYear.length; i++) {
        let currentNumber = iterableYear[i]
        if (i >= 2) {
            continue
        } else {
            century += currentNumber
        }
    }

    if (turnOfCentury) {
        return +century
    } else {
        return +century + 1
    }

}


// Input:
// year: 8
// Expected Output:
// 1
console.log(centuryFromYear(8))
// Input:
// year: 45
// Expected Output:
// 1
console.log(centuryFromYear(45))

// Input:
// year: 374
// Expected Output:
// 4

console.log(centuryFromYear(374))

// Input:
// year: 2001
// Expected Output:
// 21

console.log(centuryFromYear(2001))
console.log(centuryFromYear(1988))
console.log(centuryFromYear(2000))

