let tipos = [];

for (let i = 0; i < 10; i++) {
  let tipo = prompt(`Informe o tipo sanguineo ${i}`);
  tipos.push(tipo);
}

for (let i = 0; i < tipos.length; i++) {
  alert(`Cadastro ${i}: Tipo sanguíneo ${tipos[i]}`);
}
