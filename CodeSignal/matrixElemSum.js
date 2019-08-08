// After becoming famous, the CodeBots decided to move into a new building together.
// Each of the rooms has a different cost, and some of them are free,
// but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious,
// they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

// Given matrix, a rectangular matrix of integers,
// where each value represents the cost of the room,
// your task is to return the total sum of all rooms that are suitable for the CodeBots
// (ie: add up all the values that don't appear below a 0).

// Example

// For

// matrix = [[0, 1, 1, 2],
//           [0, 5, 0, 0],
//           [2, 0, 3, 3]]

// the output should be
// matrixElementsSum(matrix) = 9.

// Need a way to keep track if column is dead
// If column is not dead sum
// if column is dead, don't sum
// Column is dead once a column has a 0

// initialize an object to keep track of columns.
// loop over rows, checking each column, if column is not in object && object is greater than 0
// place column in object and initialize column value to be true

// if column is true
// if current column item is greater than 0, add to sum.
// if column item is === 0 set column to false
// if column is false continue

// return sum

function matrixElementsSum(matrix) {
    let sum = 0;
    let columnTracker = {}

    for (let i = 0; i < matrix.length; i++) {
            let currentRow = matrix[i]
        for (let j = 0; j < currentRow.length; j++) {
            let currentRowItem = currentRow[j]
            // Initialize our columnTracker
            if (!(j in columnTracker)) {
                if (currentRowItem > 0) {
                    columnTracker[j] = true;
                } else {
                    columnTracker[j] = false
                }
            }

        

        }
    }


}

console.log(matrixElementsSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]])); // 9
// console.log(matrixElementsSum([[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]])); // 9
// console.log(matrixElementsSum([[1, 1, 1], [2, 2, 2], [3, 3, 3]])); // 18
// console.log(matrixElementsSum([[0]])); // 0
// console.log(matrixElementsSum([[1, 0, 3], [0, 2, 1], [1, 2, 0]])); // 5
