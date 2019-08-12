// Some people are standing in a row in a park.
// There are trees between them which cannot be moved.
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// initialize an empty array
// Map over input array
// If current item is -1 return item
// this should result in a mapped array that looks like [-1, undefined, undefined, undefined, -1, -1, undefined, undefined]

function sortByHeight(a) {
  let toBeSorted = [];
  let hasATree = false;

  let unsortedArrMap = a.map(item => {
    if (item === -1) {
      hasATree = true;
      return item;
    } else {
      toBeSorted.push(item);
    }
  });

  toBeSorted = toBeSorted.sort((a, b) => a - b);

  const sortedArrMap = unsortedArrMap.map(item => {
    if (item === undefined) {
      return toBeSorted.shift();
    } else {
      return item;
    }
  });

  if (hasATree) {
    return sortedArrMap;
  } else {
    return a.sort((a, b) => a - b)
  }
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])); // [-1, 150, 160, 170, -1, -1, 180, 190]
console.log(sortByHeight([-1, -1, -1, -1, -1])); // [-1, -1, -1, -1, -1]
console.log(sortByHeight([-1])); // [-1]
console.log(sortByHeight([4, 2, 9, 11, 2, 16])); // [2, 2, 4, 9, 11, 16]
console.log(
  sortByHeight([2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1])
); // [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2]
