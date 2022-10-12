// When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.

// Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:

// It takes 1 second to switch between pencils.
// It takes 2 seconds to color a square.
// See the example below for clarification.

// color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

// // There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// // You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// // 10 + 4 = 14
// Examples
// colorPatternTimes(["Blue"]) ➞ 2

// colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11

// colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13

function colorPatternTimes(cols) {
    if (cols.length === 1) {
        return 2
    }
    let count = 0
    for (var i = 0; i < cols.length; i++) {
        if (cols[i] != cols[i + 1] && cols[i + 1] != undefined) {
            count++
        }
    }
    return (cols.length * 2) + count
}


console.log(colorPatternTimes(["Red", "Blue", "Yellow", "Blue", "Green", "Green", "Yellow", "Green", "Blue", "Blue", "Blue", "Red", "Blue", "Red", "Green", "Red"]));