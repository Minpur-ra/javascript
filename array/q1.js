let precos = [];
for (let i = 0; i < 5; i++) {
  let preco = Number(prompt("digite o preço do produto:"));
  precos.push(preco);
}

let caro = 0;
for (let i = 1; i < precos.length; i++) {
  if (precos[i] > precos[caro]) {
    caro = i;
  }
}

alert("o produto masi caro tá no indice: "+ caro +" com preço R$ "+ precos[caro]);