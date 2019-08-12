// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// Initialize a count map for str1
// Initialize a commonCount

// Loop over string 1 and add a count of each character to the count map.
// Loop over string 2, if the current letter is in the count map, and the current count is greater than 0,
// increment commonCount and decrement the current letter in the map. 

// return commonCount

function commonCharacterCount(s1, s2) {
    let letterObj = {};
    let commonCount = 0;

    for (let i = 0; i < s1.length; i++) {
        let currentLetter = s1[i]
        if (!(currentLetter in letterObj)) {
            letterObj[currentLetter] = 1
        } else {
            letterObj[currentLetter]++
        }
    }

    for (let i = 0; i < s2.length; i++) {
        let currentLetter = s2[i]
        if (currentLetter in letterObj) {
            if (letterObj[currentLetter] > 0) {
                commonCount++
                letterObj[currentLetter]--
            }
        }
    }

    return commonCount
}



console.log(commonCharacterCount('aabcc', 'adcaa')) // 3
console.log(commonCharacterCount("zzzz", "zzzzzzz")) // 4
console.log(commonCharacterCount("abca", "xyzbac")) // 3
console.log(commonCharacterCount("a", "b")) // 0
console.log(commonCharacterCount("a", "aaa")) // 1
 