let materias = [];

for (let i = 0; i < 8; i++) {
  let nome = prompt(`Nome da matéria ${i + 1}:`);
  let nota = Number(prompt(`Nota da matéria ${nome}:`));
  let freq = Number(prompt(`Frequência da matéria ${nome} (%):`));
  materias.push({ nome, nota, freq });
}

let somaf = materias.reduce((acc, mat) => acc + mat.frequencia, 0);
let mediaf = somaf / materias.length;

let acima = materias.filter(mat => mat.nota >= 60).length;

alert(`Média de frequência: ${mediaFrequencia.toFixed(2)}%\nNotas acima da média: ${acimaMedia}`);
