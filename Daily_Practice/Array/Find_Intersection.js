// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

function FindIntersection(strArr) { 
    let map = {};
    for (let i = 0; i < strArr.length; i++)
        for (let j = 0; j < strArr[i].length; j++) {
        }
    // code goes here  
    return strArr; 
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));