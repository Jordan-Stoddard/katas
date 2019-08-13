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

// If 

function reverseInParentheses(inputString) {

}

console.log(reverseInParentheses("(bar)")) // rab
console.log(reverseInParentheses("foo(bar)baz")) // foorabbaz
console.log(reverseInParentheses("foo(bar)baz(blim)")) // foorabbazmilb
console.log(reverseInParentheses("foo(bar(baz))blim")) // foobazrabblim
console.log(reverseInParentheses("(abc)d(efg)")) // cbadgfe
