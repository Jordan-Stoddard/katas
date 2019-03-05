// Remove Duplicates from Array
// Create a function that takes an array of items, 
// removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

function removeDups(arr) {
  
let mySet = new Set()

for (let i = 0; i < arr.length; i++) {
    let currentItem = arr[i]
    if (!mySet.has(currentItem)) {
        mySet.add(currentItem)
    }
}

return Array.from(mySet)
}

console.log(removeDups(["John", "Taylor", "John"]) , ["John", "Taylor"])

console.log(removeDups([1, 0, 1, 0]) , [1, 0])

console.log(removeDups(['The', 'big', 'cat']) , ['The', 'big', 'cat'])