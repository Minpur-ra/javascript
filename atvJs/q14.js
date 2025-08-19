let l1 = {
  titulo: prompt("Digite o título do primeiro livro:"),
  autor: prompt("Digite o autor do primeiro livro:"),
  ano: Number(prompt("Digite o ano de publicação do primeiro livro:")),
  paginas: Number(prompt("Digite o número de páginas do primeiro livro:")),
  nacionalidade: prompt("O autor é brasileiro? só sim ou nao")
}

let l2 = {
  titulo: prompt("Digite o título do segundo livro:"),
  autor: prompt("Digite o autor do segundo livro:"),
  ano: Number(prompt("Digite o ano de publicação do segundo livro:")),
  paginas: Number(prompt("Digite o número de páginas do segundo livro:")),
  nacionalidade: prompt("O autor é brasileiro? só sim ou nao")
}

("Livro mais antigo: " + (l1.ano < l2.ano ? l1.titulo : l2.titulo))
alert("Livro com mais páginas: " + (l1.paginas > l2.paginas ? l1.titulo : l2.titulo))

if (l1.nacionalidade === "sim") {
  alert("Livro com autor brasileiro: " + l1.titulo)
} 
if (l2.nacionalidade === "sim") {
  alert("Livro com autor brasileiro: " + l2.titulo)
}