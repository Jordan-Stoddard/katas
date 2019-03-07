// Create a function that takes an array of numbers between 1 and 10
// (excluding one number) and returns the missing number.

function missingNums(arr) {
    let res;
    const set1 = new Set(arr);
    for(let i=1;i<=10;i++)
      {      
        if(!set1.has(i))
          {
            res=i;
            break;
          }
         
      }
    return res;
    }
// Examples
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]), 5);

console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]), 10);

console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]), 7);

// Notes
// The array of numbers will be unsorted (not in order).
// Only one number will be missing.
