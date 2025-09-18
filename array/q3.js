let rna = [];

for (let i = 0; i < 10; i++) {
  let base = prompt(`Informe a base ${i} da fita de RNA (A, U, C, G):`).toUpperCase();
  rna.push(base);
}

let comp = rna.map(base => {
  switch (base) {
    case "A": return "U";
    case "U": return "A";
    case "C": return "G";
    case "G": return "C";
    default: return "?";
  }
});

console.log("Fita original:", rna.join(" "));
console.log("Complemento:", comp.join(" "));
