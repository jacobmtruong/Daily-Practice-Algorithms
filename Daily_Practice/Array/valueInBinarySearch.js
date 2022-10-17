

function valueInTree(tree, val) {
	let arr = tree.flat()
	console.log(tree)
	return arr.includes(val)? true:false
}




let lst1 = [3, [7, [1, null, null], [8, null, null]], [5, null, [4, null, null]]]

console.log(lst1.flat(Infinity));