let filme = {
  nome: prompt("Digite o nome do filme:"),
  classificacao: Number(prompt("Digite a classificação indicativa"))
}

console.log("Filme: " + filme.nome)
console.log("Classificação: " + filme.classificacao + " anos")

if (filme.classificacao < 12) {
  ("Livre")
} else if (filme.classificacao < 16) {
  alert(" 12+")
} else if (filme.classificacao < 18) {
  alert(" 16+")
} else {
  alert("18+")
}