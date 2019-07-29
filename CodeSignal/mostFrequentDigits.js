//Given an array of integers a, your task is to calculate the digits that 
// occur the most number of times in the array. Return the array of these digits in ascending order.

//Example

//For a = [25, 2, 3, 57, 38, 41], the output should be mostFrequentDigits(a) = [2, 3, 5].

let a = [99]

function mostFrequentDigits(a) {
    let countObj = {}
    let newString = ""
    let mostCounted = 0
    let newArray = []

    
    for (let i = 0; i < a.length; i++) {
        let currentValue = a[i]
        let currentStringValue = currentValue.toString()
        newString += currentStringValue
    }

    for (let i = 0; i < newString.length; i++) {
        let currentNum = newString[i];
        if (!(currentNum in countObj)) {
            countObj[currentNum] = 1
        } else {
            countObj[currentNum] += 1
        }
    }
    
    for (let key in countObj) {
        if (countObj[key] > mostCounted) {
            mostCounted = countObj[key]
        }
    }
    
    for (let key in countObj) {
        if (countObj[key] === mostCounted) {
            newArray.push(+key)
        }
    }

    return newArray.sort()

}

console.log(mostFrequentDigits(a))