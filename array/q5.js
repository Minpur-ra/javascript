let filmes = [];

for (let i = 0; i < 6; i++) {
  let nome = prompt(`Nome do filme ${i + 1}:`);
  let nota = parseFloat(prompt(`Nota do filme ${nome}:`));
  filmes.push({ nome, nota });
}

let opcao;
do {
  opcao = prompt("Escolha uma opção:\na) Imprimir dados de 1 filme\nb) Avaliar um filme\nc) Alterar dados\nd) Finalizar");

  switch (opcao) {
    case "a":
      let i = parseInt(prompt("Índice do filme (0 a 5):"));
      alert(`Filme: ${filmes[i].nome}\nNota: ${filmes[i].nota}`);
      break;

    case "b":
      let j = parseInt(prompt("Índice do filme para avaliar:"));
      let novaNota = parseFloat(prompt("Nova nota:"));
      filmes[j].nota = ((filmes[j].nota + novaNota) / 2).toFixed(2);
      break;

    case "c":
      let k = parseInt(prompt("Índice do filme para alterar:"));
      filmes[k].nome = prompt("Novo nome:");
      filmes[k].nota = parseFloat(prompt("Nova nota:"));
      break;

    case "d":
      let resumo = filmes.map((f, idx) => `Filme ${idx}: ${f.nome} - Nota: ${f.nota}`).join("\n");
      alert("Filmes cadastrados:\n" + resumo);
      break;

    default:
      alert("Opção inválida.");
  }
} while (opcao !== "d");
