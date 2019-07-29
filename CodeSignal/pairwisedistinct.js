// You are given a string s, which consists only of lowercase English letters. 
//Your task is to find the number of adjacent triplets of unique characters within s. 
// In other words, count the number of indices i, such that s[i], s[i + 1], and s[i + 2] are all pairwise distinct.

const string = 'baabaabaabaabaa'

function threeCharsDistinct(s) {
    if (s.length < 3) {
        return 0
    }

    let numOfDistinct = 0
    for (let i = 0; i < s.length; i++) {
        let currentValue = s[i]
        let lastValidValue = s.length - 2
        if (s.length - 2 !== i) {
            let nextValue = s[i + 1]
            let thirdValue = s[i + 2]
            if (currentValue === nextValue || currentValue === thirdValue || nextValue === thirdValue) {
                continue
            } else {
                numOfDistinct += 1
            }
        } 

    }

    return numOfDistinct
}

console.log(threeCharsDistinct(string))
