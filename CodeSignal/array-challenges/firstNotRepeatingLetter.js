function firstNotRepeatingCharacter(s) {
    if (s.length === 1) {
        return s
    }
    let dupDictionary = {}
    let indexDictionary = {}
    let currentLowestIndex = null
    let returnValue = null
    let duplicate = false
    
    for (let i = 0; i < s.length; i++) {
            let currentValue = s[i]
            if(!(currentValue in dupDictionary)) {
                dupDictionary[currentValue] = 0
                indexDictionary[currentValue] = i
            } else {
                dupDictionary[currentValue] += 1
                duplicate = true
            }
    }
    
    for (let key in indexDictionary) {
            let currentIndexValue = indexDictionary[key]
        if (currentLowestIndex === null && dupDictionary[key] === 0) {
            currentLowestIndex = currentIndexValue
            returnValue = key.toString()
        }
        if (currentIndexValue < currentLowestIndex) {
            currentLowestIndex = currentIndexValue
            returnValue = key.toString()
        }
    }
    
    if (duplicate && currentLowestIndex !== null) {
        return returnValue
    } else {
        return '_'
    }
    
    
}

console.log(firstNotRepeatingCharacter("z"))