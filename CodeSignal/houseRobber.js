// var rob = function(nums) {
// if (nums.length === 1) return nums[0]
//   if (nums.length === 2) {
//     if (nums[0] < nums[1]) {
//       return nums[1];
//     } else {
//       return nums[0];
//     }
//   } else if (nums.length === 3) {
//       if (nums[0] + nums[2] > nums[1]) {
//           return nums[0] + nums[2]
//       } else {
//           return nums[1]
//       }
//   }
  
//   let newNums = nums;
//   let evenNums = newNums.filter((item, i) => i % 2 === 0);
//   let oddNums = newNums.filter((item, i) => i % 2 !== 0);
//   if (evenNums.length === 0 || oddNums.length === 0) {
//       return 0
//   }
//   let oddNumSum = oddNums.reduce((acc, value) => acc + value)
//   let evenNumSum = evenNums.reduce((acc, value) => acc + value)
//   if (oddNumSum > evenNumSum) {
//      return oddNumSum
//   } else {
//       return evenNumSum
//   }
// };

function rob(nums) {
    // nums length 0
    if (nums.length === 0) {
      return 0
    }
    // nums length 1
    if (nums.length === 1) {
      return nums[0]
    }
    // nums length 2
    if (nums.length === 2) {
      return Math.max(nums[0], nums[1])
    }
  ​
    let maxLootAtNth = [nums[0], Math.max(nums[0], nums[1])];
  ​
    for (let i = 2; i < nums.length; i++) {
      maxLootAtNth.push(Math.max(nums[i] + maxLootAtNth[i-2], maxLootAtNth[i-1]));
    }
  ​
    return maxLootAtNth.pop();
  }

// console.log(rob([1, 3, 1])); // 3
// console.log(rob([2, 7, 9, 3, 1])); // 12
// console.log(rob([1, 2, 1, 1])); // 3
// console.log(rob([2, 1])); // 2
// console.log(rob([1, 2, 3, 1])); // 4
// console.log(rob([1])); // 1
// console.log(rob([2, 1, 1, 2])); // 4
console.log(rob([9, 1, 1, 10, 11]));





