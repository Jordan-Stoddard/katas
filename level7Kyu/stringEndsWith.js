// Complete the solution so that it returns true
// if the first argument(string) passed in ends with the 2nd argument (also a string).

// Option 1
function solution(str, ending) {
  return str.endsWith(ending);
}

// Option 2
function solution(str, ending) {
  return str.substring(str.length - ending.length, str.length) === ending;
}

console.log(solution("abcde", "cde"), true);
console.log(solution("abcde", "abc"), false);
