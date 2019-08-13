// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Example

// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".


// If inputString.length === 0 or inputString === "()" return ''

// create a helper function that returns true or false if there's a nested set.

// if nested loop through and count the number of opening parenths.
// if current letter is ( and 

// Initialize a finalString,
// open check, closed check, nested check
// return index
// loop through inputString
// if not open concat to final string
// if ( concat and make open, save return index
// if open, count until closed
// if ( and open, 




function reverseInParentheses(inputString) {
    return inputString.split('').reverse().join('')
}

console.log(reverseInParentheses("(bar)")) // rab
// console.log(reverseInParentheses("foo(bar)baz")) // foorabbaz
// console.log(reverseInParentheses("foo(bar)baz(blim)")) // foorabbazmilb
console.log(reverseInParentheses("foo(bar(baz))blim")) // foobazrabblim
// console.log(reverseInParentheses("(abc)d(efg)")) // cbadgfe
