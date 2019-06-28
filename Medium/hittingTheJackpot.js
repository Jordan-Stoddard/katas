// Takes in an array with 4 elements. If all 4 elements are exactly the same
// return true, else return false.

// Initial pass: iterate through the array placing each item in an object
// one at at a time.

// If the next item in the list is already in the object, pass,
// else, place it in the object.

// If the object's length is 1, then return true, else return false.

function testJackpot(result) {
	let storage = {}
	let currentKey = 0
	for (let i = 0; i < result.length; i++) {
		let currentSlot = result[i]
		let exists = Object.keys(storage).some((k) => storage[k] === currentSlot)
		if (exists) {
			continue
        } else {
			storage[currentKey] = currentSlot
			++currentKey
        }
    }
		
	if (Object.keys(storage).length > 1) {
		return false
	} else {
		return true
	}
}

console.log(testJackpot(['1', '2', '1', '1']))

