/* Valid sudoku grid
[
 [".",".",".","1","4",".",".","2","."], 
 [".",".","6",".",".",".",".",".","."], 
 [".",".",".",".",".",".",".",".","."], 
 [".",".","1",".",".",".",".",".","."], 
 [".","6","7",".",".",".",".",".","9"], 
 [".",".",".",".",".",".","8","1","."], 
 [".","3",".",".",".",".",".",".","6"], 
 [".",".",".",".",".","7",".",".","."], 
 [".",".",".","5",".",".",".","7","."]
]

Invalid grid due to two 1's in 2nd column
[
 ['.', '.', '.', '.', '2', '.', '.', '9', '.'],
 ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
 ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
 ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
 ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
 ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
 ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
 ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
 ['.', '2', '.', '.', '3', '.', '.', '.', '.']
    ]


*/

const grid = [[".",".",".",".",".",".","5",".","."], 
[".",".",".",".",".",".",".",".","."], 
[".",".",".",".",".",".",".",".","."], 
["9","3",".",".","2",".","4",".","."], 
[".",".","7",".",".",".","3",".","."], 
[".",".",".",".",".",".",".",".","."], 
[".",".",".","3","4",".",".",".","."], 
[".",".",".",".",".","3",".",".","."], 
[".",".",".",".",".","5","2",".","."]]

// initialize a column dictionary
// initialize a row dictionary
// initialize a 3x3Grid dictionary
// Loop through columns and rows

function sudoku2(grid) {
  let columnDic = {};
  let rowDic = {};
  let miniGrid1 = {};

  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    rowDic[i] = {};
    columnDic[i] = {};
    for (let j = 0; j < row.length; j++) {
      //// Tests for if there is ever a duplicate in a single row, if there is, break out and immediately return and false. ////
      let currentRowValue = row[j];
      if (!(currentRowValue in rowDic[i])) {
        if (currentRowValue === ".") {
          // Do nothing and continue down the function
        } else {
          rowDic[i][currentRowValue] = 0;
        }
      } else {
        // return "broke due to row rule";
        return false
      }
      ///////////////////////////////////

      //// Tests for if there is ever a duplicate in a single column, if there is, break out and immediately return and false. ////

      let currentColumnValue = grid[j][i];
      if (!(currentColumnValue in columnDic[i])) {
        if (currentColumnValue === ".") {
          // Do nothing and continue down the function
        } else {
          columnDic[i][currentColumnValue] = 0;
        }
      } else {
        // return "broke due to column rule";
          return false
      }

      //// Tests for if there is ever a duplicate in a single mini 3x3 grid, if there is, break out and immediately return and false. ////

      if (
        (i === 1 && j === 1) ||
        (i === 1 && j === 4) ||
        (i === 1 && j === 7) ||
        (i === 4 && j === 1) ||
        (i === 4 && j === 4) ||
        (i === 4 && j === 7) ||
        (i === 7 && j === 1) ||
        (i === 7 && j === 4) ||
        (i === 7 && j === 7)
      ) {
        let northwest = grid[i - 1][j - 1];
        let north = grid[i - 1][j];
        let northeast = grid[i - 1][j + 1];
        let east = grid[i][j + 1];
        let west = grid[i][j - 1];
        let southwest = grid[i + 1][j - 1];
        let south = grid[i + 1][j];
        let southeast = grid[i + 1][j + 1];

        //// MINI GRID 1 ////
        if (i === 1 && j === 1) {
          miniGrid1 = {};
          if (northwest !== ".") {
            miniGrid1[northwest] = 0;
          }

          if (north !== ".") {
            if (!(north in miniGrid1)) {
              miniGrid1[north] = 0;
            } else {
              return false;
            }
          }

          if (northeast !== ".") {
            if (!(northeast in miniGrid1)) {
              miniGrid1[northeast] = 0;
            } else {
              return false;
            }
          }

          if (east !== ".") {
            if (!(east in miniGrid1)) {
              miniGrid1[east] = 0;
            } else {
              return false;
            }
          }

          if (west !== ".") {
            if (!(west in miniGrid1)) {
              miniGrid1[west] = 0;
            } else {
              return false;
            }
          }

          if (southwest !== ".") {
            if (!(southwest in miniGrid1)) {
              miniGrid1[southwest] = 0;
            } else {
              return false;
            }
          }

          if (south !== ".") {
            if (!(south in miniGrid1)) {
              miniGrid1[south] = 0;
            } else {
              return false;
            }
          }

          if (southeast !== ".") {
            if (!(southeast in miniGrid1)) {
              miniGrid1[southeast] = 0;
            } else {
              return false;
            }
          }
        }

        //// MINI GRID 2 ////
        if (i === 1 && j === 4) {
          miniGrid1 = {};
          if (northwest !== ".") {
            miniGrid1[northwest] = 0;
          }

          if (north !== ".") {
            if (!(north in miniGrid1)) {
              miniGrid1[north] = 0;
            } else {
              return false;
            }
          }

          if (northeast !== ".") {
            if (!(northeast in miniGrid1)) {
              miniGrid1[northeast] = 0;
            } else {
              return false;
            }
          }

          if (east !== ".") {
            if (!(east in miniGrid1)) {
              miniGrid1[east] = 0;
            } else {
              return false;
            }
          }

          if (west !== ".") {
            if (!(west in miniGrid1)) {
              miniGrid1[west] = 0;
            } else {
              return false;
            }
          }

          if (southwest !== ".") {
            if (!(southwest in miniGrid1)) {
              miniGrid1[southwest] = 0;
            } else {
              return false;
            }
          }

          if (south !== ".") {
            if (!(south in miniGrid1)) {
              miniGrid1[south] = 0;
            } else {
              return false;
            }
          }

          if (southeast !== ".") {
            if (!(southeast in miniGrid1)) {
              miniGrid1[southeast] = 0;
            } else {
              return false;
            }
          }
        }

        //// MINI GRID 3 ////
        if (i === 1 && j === 7) {
          miniGrid1 = {};
          if (northwest !== ".") {
            miniGrid1[northwest] = 0;
          }

          if (north !== ".") {
            if (!(north in miniGrid1)) {
              miniGrid1[north] = 0;
            } else {
              return false;
            }
          }

          if (northeast !== ".") {
            if (!(northeast in miniGrid1)) {
              miniGrid1[northeast] = 0;
            } else {
              return false;
            }
          }

          if (east !== ".") {
            if (!(east in miniGrid1)) {
              miniGrid1[east] = 0;
            } else {
              return false;
            }
          }

          if (west !== ".") {
            if (!(west in miniGrid1)) {
              miniGrid1[west] = 0;
            } else {
              return false;
            }
          }

          if (southwest !== ".") {
            if (!(southwest in miniGrid1)) {
              miniGrid1[southwest] = 0;
            } else {
              return false;
            }
          }

          if (south !== ".") {
            if (!(south in miniGrid1)) {
              miniGrid1[south] = 0;
            } else {
              return false;
            }
          }

          if (southeast !== ".") {
            if (!(southeast in miniGrid1)) {
              miniGrid1[southeast] = 0;
            } else {
              return false;
            }
          }
        }

        //// MINI GRID 4 ////
        if (i === 4 && j === 1) {
          miniGrid1 = {};
          if (northwest !== ".") {
            miniGrid1[northwest] = 0;
          }

          if (north !== ".") {
            if (!(north in miniGrid1)) {
              miniGrid1[north] = 0;
            } else {
              return false;
            }
          }

          if (northeast !== ".") {
            if (!(northeast in miniGrid1)) {
              miniGrid1[northeast] = 0;
            } else {
              return false;
            }
          }

          if (east !== ".") {
            if (!(east in miniGrid1)) {
              miniGrid1[east] = 0;
            } else {
              return false;
            }
          }

          if (west !== ".") {
            if (!(west in miniGrid1)) {
              miniGrid1[west] = 0;
            } else {
              return false;
            }
          }

          if (southwest !== ".") {
            if (!(southwest in miniGrid1)) {
              miniGrid1[southwest] = 0;
            } else {
              return false;
            }
          }

          if (south !== ".") {
            if (!(south in miniGrid1)) {
              miniGrid1[south] = 0;
            } else {
              return false;
            }
          }

          if (southeast !== ".") {
            if (!(southeast in miniGrid1)) {
              miniGrid1[southeast] = 0;
            } else {
              return false;
            }
          }
        }

        //// MINI GRID 5 ////
        if (i === 4 && j === 4) {
          miniGrid1 = {};
          if (northwest !== ".") {
            miniGrid1[northwest] = 0;
          }

          if (north !== ".") {
            if (!(north in miniGrid1)) {
              miniGrid1[north] = 0;
            } else {
              return false;
            }
          }

          if (northeast !== ".") {
            if (!(northeast in miniGrid1)) {
              miniGrid1[northeast] = 0;
            } else {
              return false;
            }
          }

          if (east !== ".") {
            if (!(east in miniGrid1)) {
              miniGrid1[east] = 0;
            } else {
              return false;
            }
          }

          if (west !== ".") {
            if (!(west in miniGrid1)) {
              miniGrid1[west] = 0;
            } else {
              return false;
            }
          }

          if (southwest !== ".") {
            if (!(southwest in miniGrid1)) {
              miniGrid1[southwest] = 0;
            } else {
              return false;
            }
          }

          if (south !== ".") {
            if (!(south in miniGrid1)) {
              miniGrid1[south] = 0;
            } else {
              return false;
            }
          }

          if (southeast !== ".") {
            if (!(southeast in miniGrid1)) {
              miniGrid1[southeast] = 0;
            } else {
              return false;
            }
          }
        }

        //// MINI GRID 6 ////
        if (i === 4 && j === 7) {
          miniGrid1 = {};
          if (northwest !== ".") {
            miniGrid1[northwest] = 0;
          }

          if (north !== ".") {
            if (!(north in miniGrid1)) {
              miniGrid1[north] = 0;
            } else {
              return false;
            }
          }

          if (northeast !== ".") {
            if (!(northeast in miniGrid1)) {
              miniGrid1[northeast] = 0;
            } else {
              return false;
            }
          }

          if (east !== ".") {
            if (!(east in miniGrid1)) {
              miniGrid1[east] = 0;
            } else {
              return false;
            }
          }

          if (west !== ".") {
            if (!(west in miniGrid1)) {
              miniGrid1[west] = 0;
            } else {
              return false;
            }
          }

          if (southwest !== ".") {
            if (!(southwest in miniGrid1)) {
              miniGrid1[southwest] = 0;
            } else {
              return false;
            }
          }

          if (south !== ".") {
            if (!(south in miniGrid1)) {
              miniGrid1[south] = 0;
            } else {
              return false;
            }
          }

          if (southeast !== ".") {
            if (!(southeast in miniGrid1)) {
              miniGrid1[southeast] = 0;
            } else {
              return false;
            }
          }
        }

        //// MINI GRID 7 ////
        if (i === 7 && j === 1) {
          miniGrid1 = {};
          if (northwest !== ".") {
            miniGrid1[northwest] = 0;
          }

          if (north !== ".") {
            if (!(north in miniGrid1)) {
              miniGrid1[north] = 0;
            } else {
              return false;
            }
          }

          if (northeast !== ".") {
            if (!(northeast in miniGrid1)) {
              miniGrid1[northeast] = 0;
            } else {
              return false;
            }
          }

          if (east !== ".") {
            if (!(east in miniGrid1)) {
              miniGrid1[east] = 0;
            } else {
              return false;
            }
          }

          if (west !== ".") {
            if (!(west in miniGrid1)) {
              miniGrid1[west] = 0;
            } else {
              return false;
            }
          }

          if (southwest !== ".") {
            if (!(southwest in miniGrid1)) {
              miniGrid1[southwest] = 0;
            } else {
              return false;
            }
          }

          if (south !== ".") {
            if (!(south in miniGrid1)) {
              miniGrid1[south] = 0;
            } else {
              return false;
            }
          }

          if (southeast !== ".") {
            if (!(southeast in miniGrid1)) {
              miniGrid1[southeast] = 0;
            } else {
              return false;
            }
          }
        }

        //// MINI GRID 8 ////
        if (i === 7 && j === 4) {
          miniGrid1 = {};
          if (northwest !== ".") {
            miniGrid1[northwest] = 0;
          }

          if (north !== ".") {
            if (!(north in miniGrid1)) {
              miniGrid1[north] = 0;
            } else {
              return false;
            }
          }

          if (northeast !== ".") {
            if (!(northeast in miniGrid1)) {
              miniGrid1[northeast] = 0;
            } else {
              return false;
            }
          }

          if (east !== ".") {
            if (!(east in miniGrid1)) {
              miniGrid1[east] = 0;
            } else {
              return false;
            }
          }

          if (west !== ".") {
            if (!(west in miniGrid1)) {
              miniGrid1[west] = 0;
            } else {
              return false;
            }
          }

          if (southwest !== ".") {
            if (!(southwest in miniGrid1)) {
              miniGrid1[southwest] = 0;
            } else {
              return false;
            }
          }

          if (south !== ".") {
            if (!(south in miniGrid1)) {
              miniGrid1[south] = 0;
            } else {
              return false;
            }
          }

          if (southeast !== ".") {
            if (!(southeast in miniGrid1)) {
              miniGrid1[southeast] = 0;
            } else {
              return false;
            }
          }
        }

        //// MINI GRID 9 ////
        if (i === 7 && j === 7) {
          miniGrid1 = {};
          if (northwest !== ".") {
            miniGrid1[northwest] = 0;
          }

          if (north !== ".") {
            if (!(north in miniGrid1)) {
              miniGrid1[north] = 0;
            } else {
              return false;
            }
          }

          if (northeast !== ".") {
            if (!(northeast in miniGrid1)) {
              miniGrid1[northeast] = 0;
            } else {
              return false;
            }
          }

          if (east !== ".") {
            if (!(east in miniGrid1)) {
              miniGrid1[east] = 0;
            } else {
              return false;
            }
          }

          if (west !== ".") {
            if (!(west in miniGrid1)) {
              miniGrid1[west] = 0;
            } else {
              return false;
            }
          }

          if (southwest !== ".") {
            if (!(southwest in miniGrid1)) {
              miniGrid1[southwest] = 0;
            } else {
              return false;
            }
          }

          if (south !== ".") {
            if (!(south in miniGrid1)) {
              miniGrid1[south] = 0;
            } else {
              return false;
            }
          }

          if (southeast !== ".") {
            if (!(southeast in miniGrid1)) {
              miniGrid1[southeast] = 0;
            } else {
              return false;
            }
          }
        }
      } // end of minigrid check
    } // end of j loop
  } // end of i loop

  return true;
}

console.log(sudoku2(grid));
