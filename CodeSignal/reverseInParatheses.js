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






function reverseInParentheses(inputString) {
    let m = inputString.match(/\(\w*\)/);

while (m) {
    inputString = inputString.split('');
    inputString.splice(
        m.index, 
        m[0].length, 
        m[0].replace(')', '')
         .replace('(', '')
         .split('')
         .reverse()
         .join(''));
    inputString = inputString.join('');
    
    m = inputString.match(/\(\w*\)/);
}

return inputString;
}

// console.log(reverseInParentheses("(bar)")) // rab
// console.log(reverseInParentheses("foo(bar)baz")) // foorabbaz
// console.log(reverseInParentheses("foo(bar)baz(blim)")) // foorabbazmilb
console.log(reverseInParentheses("foo(bar(baz))blim")) // foobazrabblim
// console.log(reverseInParentheses("(abc)d(efg)")) // cbadgfe
