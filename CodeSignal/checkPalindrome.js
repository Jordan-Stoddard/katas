// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.





function checkPalindrome(inputString) {
    return inputString.split('').reverse().join('') === inputString;
}

console.log(checkPalindrome('aabaa')) // true
console.log(checkPalindrome('abac')) // false
console.log(checkPalindrome('a')) // true
console.log(checkPalindrome('az')) // false
console.log(checkPalindrome('abacaba')) // true



