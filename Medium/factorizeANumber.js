// Create a function that takes a number as its argument and returns an array of all its factors.

// Examples
// factorize(12) ➞ [1, 2, 3, 4, 6, 12]

// factorize(4) ➞ [1, 2, 4]

// factorize(17) ➞ [1, 17]
// Notes
// The input integer will be positive.
// A factor is a number that evenly divides into another number without leaving a remainder. The second example is a factor of 12, because 12 / 2 = 6, with remainder 0.

// Loop num times.
// test if num is divisible by i,
// if it is, push it into the array
// if not continue
// Once you've reached the end of the loop, return the array.

function factorize(num) {
	let arr = []
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			arr.push(i)
		} else {
			continue
		}
	}

	return arr
}

console.log(factorize(12))