// evenOrOdd("22471") ➞ "Even and Odd are the same"

// evenOrOdd("213613") ➞ "Even and Odd are the same"

// evenOrOdd("23456") ➞ "Even is greater than Odd"

function evenOrOdd(str) {
  let array = str.split("");
  let Even = 0;
  let Odd = 0;
  for (const e of array) {
    if (parseInt(e) % 2 === 0) {
      Even += parseInt(e);
    } else {
      Odd += parseInt(e);
    }
  }
  console.log(Even);
  console.log(Odd);
  if (parseInt(Even) > parseInt(Odd)) {
    return "Even is greater than Odd";
  } else if (parseInt(Even) === parseInt(Odd)) {
    return "Even and Odd are the same";
  } else {
    return "Odd is greater than Even";
  }
}

console.log(evenOrOdd("22323"));
console.log(evenOrOdd("21363"));
console.log(evenOrOdd("23456"));
