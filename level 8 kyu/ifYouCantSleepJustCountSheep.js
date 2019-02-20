// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

const countSheep = num => {
  // Create a variable to store our result
  let result = "";
  // Create a for loop that loops the number of times coming in from our num parameter.
  for (let i = 0; i < num; i++) {
    // For every iterations push an interpolated string of the index+1 sheep... into our result

    result += `${i + 1} sheep...`;
  }
  // return result
  return result;
};

console.log(countSheep(1)); // "1 sheep...");
console.log(countSheep(2)); // "1 sheep...2 sheep...");
console.log(countSheep(3)); // "1 sheep...2 sheep...3 sheep...");
