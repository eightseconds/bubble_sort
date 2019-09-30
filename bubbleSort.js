function bubbleSort(array) {
  let sorted = false
	while (!sorted) {
		sorted = true
		for(let i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				let swap = array[i + 1]
				array[i + 1] = array[i]
				array[i] = swap
				sorted = false
			}
		}
	}
	return array
}