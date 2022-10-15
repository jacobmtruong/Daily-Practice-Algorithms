let arr =[12, 11, 13, 5, 6]

function insertioNsort(arr) {
    for (var i = 0; i < arr.length; i++) { // first loop iteratate through each element of the array
        let temp = arr[i] 
        let j = i - 1
        
          /* Move elements of arr[0..i-1], that are  
        greater than temp, to one position ahead  
        of their current position */
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j] // switch to next element
            j = j - 1 // keep iterate backwards to index 0
        }
        arr[j + 1] = temp 
    }
    return arr;
}

console.log(insertioNsort(arr));