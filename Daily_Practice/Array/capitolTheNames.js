// capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]

// capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]

function CapMe(arr) {
  let result = [];
  for (const e of arr) {
    let letters = e.toLowerCase().split("");
    letters.splice(0, 1, letters[0].toUpperCase());
    result.push(letters.join(""));
  }
  return result;
}

console.log(CapMe(["mavis", "senaida", "letty"]));
console.log(CapMe(["samuel", "MABELLE", "letitia", "meridith"]));
console.log(CapMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]));
