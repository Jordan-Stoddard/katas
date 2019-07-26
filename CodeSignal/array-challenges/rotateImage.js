// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]
// the output should be

// rotateImage(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]

// Input:
// a: [[10,9,6,3,7], 
//  [6,10,2,9,7], 
//  [7,6,3,8,2], 
//  [8,9,7,9,9], 
//  [6,8,6,8,2]]
// Expected Output:
// [[6,8,7,6,10], 
//  [8,9,6,10,9], 
//  [6,7,3,2,6], 
//  [8,9,8,9,3], 
//  [2,9,2,7,7]]


const a = [[10,9,6,3,7], 
[6,10,2,9,7], 
[7,6,3,8,2], 
[8,9,7,9,9], 
[6,8,6,8,2]]

// We create a new empty grid.We
// We create a column index and initialize it to be the last index in a row
//  by getting the length of one of the rows.
//  We do a double for loop through the 2d matrix passed in.
//  In the first loop, we select the current row
//  We then decrement the columnIndex by 1 (since we didn't do length -1 when we intialized columnIndex, this sets
//  us at the correct index)
//  inside the second loop
//  we save the current row item, then set the value of the newGrid at the current row at the current column index
//  to be the row item.
//  Once we've completely looped through the array we have a 90 degree clockwise rotation.

function rotateImage(a) {
    let newGrid = a.map(_ => [])
    let columnIndex = a[0].length
    for (c = 0; c < a.length; c++) {
        let row = a[c]
        columnIndex -= 1
        for (r = 0; r < row.length; r++) {
            let rowItem = row[r]
            newGrid[r][columnIndex] = rowItem
        }
    }
    return newGrid
}

console.log(rotateImage(a))