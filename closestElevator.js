// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The called floor, i.e. the floor you want to reach
// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

// Refactor
const elevator = (left, right, call) => (Math.abs(call-left) < Math.abs(call-right)) ? 'left' : 'right'

// Examples:

console.log(elevator(1, 0, 2)); // => "left"
console.log(elevator(0, 1, 1)); // => "right"
console.log(elevator(0, 1, 2)); // => "right"
console.log(elevator(0, 0, 0)); // => "right"
console.log(elevator(0, 2, 1)); // => "right"



// First pass

// function elevator(left, right, call) {
//     if(call === right) {
//         return 'right'
//     }
//     if(call === left) {
//         return 'left'
//     }
//     if(call-1 === right) {
//         return 'right'
//     }
//     if(call+1 === right) {
//         return 'right'
//     }
//     if(call-1 === left && call-1 === right) {
//         return 'right'
//     }
//     if(call+1 === left && call+1 === right) {
//         return 'right'
//     }
//     if(call+1 === left && call+1 !== right) {
//         return 'left'
//     }
//     if(call-1 === left && call-1 !== right) {
//         return 'left'
//     }
//     if(call-1 === left && call-1 !== right) {
//         return 'right'
//     }
//     if(call-2 === left && call-2 === right) {
//         return 'right'
//     }
//     if(call+2 === left && call+2 === right) {
//         return 'right'
//     }

// }