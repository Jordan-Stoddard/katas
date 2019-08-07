// Given a sequence of integers as an array,
// determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an.
// Sequence containing only one element is also considered to be strictly increasing.

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2].
// Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

// initialize notStrictlyIncreasing to 0
// Loop through the array
// If currentValue < nextValue continue
// else notStrictlyIncreasing++
// if notStrictlyIncreasing >= 2 return false
// else return true

function almostIncreasingSequence(sequence) {
  
    let count = 0
    for (let i = 0; i < sequence.length; i++) {
      let currentItem = sequence[i]
      if (currentItem >= sequence[i + 1]) {
        count++
      }

      if(i > 0 && i < sequence.length - 2) {
        if (sequence[i] >= sequence[i + 2] && sequence[i+1] <= sequence[i-1]) {
          return false
        }
      }
    }

    if (count > 1) {
      return false
    } else {
      return true
    }

}

console.log(almostIncreasingSequence([1, 3, 2, 1])); // false
console.log(almostIncreasingSequence([1, 3, 2])); // true
console.log(almostIncreasingSequence([1, 2, 1, 2])); // false
console.log(almostIncreasingSequence([3, 6, 5, 8, 10, 20, 15])); // false
console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5])); // true
console.log(almostIncreasingSequence([3, 5, 67, 98, 3])); // true
console.log(almostIncreasingSequence([1, 1, 2, 3, 4, 4])); // false