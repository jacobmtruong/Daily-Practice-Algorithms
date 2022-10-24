// interview([5, 5, 10, 10, 15, 15, 20, 20], 120) ➞ "qualified"

// interview([2, 3, 8, 6, 5, 12, 10, 18], 64) ➞  "qualified"

// interview([5, 5, 10, 10, 25, 15, 20, 20], 120) ➞ "disqualified"
// // Exceeded the time limit for a medium question.

// interview([5, 5, 10, 10, 15, 15, 20], 120) ➞ "disqualified"
// // Did not complete all the questions.

// interview([5, 5, 10, 10, 15, 15, 20, 20], 130) ➞ "disqualified"
// // Solved all the questions in their respected time limits but exceeded the total time limit of the interview.
// Notes
// Try to solve the problem using only array methods.

function interview(arr, tot) {
    if (arr.length < 8) {
        return "disqualified"
    } else {
        if (tot > 120) {
            return "disqualified"
        } else if (arr[0] > 5 || arr[1] > 5){
            return "disqualified"
        } else if (arr[2] > 10 || arr[3] > 10) {
            return "disqualified"
        } else if (arr[4] > 15 || arr[5] > 15) {
            return "disqualified"
        } else if (arr[6] > 20 || arr[7] > 20) {
            return "disqualified"
        } else {
            return "qualified"
        }
    }
}

console.log(interview([5, 5, 10, 10, 15, 20, 50], 160));