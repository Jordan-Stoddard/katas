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