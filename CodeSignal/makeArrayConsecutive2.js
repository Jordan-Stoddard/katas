// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday,
// each statue having an non-negative integer size. Since he likes to make things perfect,
// he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1.
// He may need some additional statues to be able to accomplish that.
// Help him figure out the minimum number of additional statues needed

// Find the largest and smallest numbers from the array.
// Then do a loop with i being the smallest number and continuing until I is equal to the largest number.
// if i is in the passed in array, continue
// else increment count of additional statues

function makeArrayConsecutive2(statues) {
  let count = 0;
  let largestNumber = statues[0];
  let lowestNumber = statues[0];

  for (let i = 0; i < statues.length; i++) {
    let currentNumber = statues[i];
    if (currentNumber < lowestNumber) {
      lowestNumber = currentNumber;
    } else if (currentNumber > largestNumber) {
      largestNumber = currentNumber;
    }
  }

  for (let i = lowestNumber; i <= largestNumber; i++) {
    if (statues.includes(i)) {
      continue;
    } else {
      count++;
    }
  }

  return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8])); // 3
console.log(makeArrayConsecutive2([0, 3])); // 2
console.log(makeArrayConsecutive2([5, 4, 6])); // 0
console.log(makeArrayConsecutive2([6, 3])); // 2
