const https = require('https')

// find the largest integer in the array
// Iterate the number of times k
// for each iteration, find the largest number, and divide it in half rounding it up
// once there are no more iterations, sum the array.

// function minSum(num, k) {
//     // Write your code here
//     let numOfMoves = k
//     let newArr = num.filter(item => item !== 1)
//     let removeDuplicates = arr => arr.filter((item, i) => newArr.indexOf(item) === i)
//     newArr = removeDuplicates(newArr)
    
//     while (numOfMoves > 0) {
//         let largest = Math.max(...newArr)
//         newArr = newArr.map(item => item === largest ? Math.ceil(item / 2) : item)
//         numOfMoves--
//     }

//     return newArr.reduce((acc, currentValue) => acc + currentValue)

// }

// // console.log(minSum([2, 2, 3, 1], 1)) // 4
// // console.log(minSum([1, 2, 1], 1)) // 1
// console.log(minSum([10, 20, 7], 4)) // 14