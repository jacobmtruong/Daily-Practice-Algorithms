// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

function matchLastItem(arr) {
	let lastItem = arr.pop();
	return lastItem === arr.join("")
}

console.log(matchLastItem(['rsq', '6hi', 'g', 'rsq6hig']));