let f1 = {
    nome1: prompt("insira o nome do 1° filme"),
    ano1: Number(prompt("Qual ano de lançamento?")),
    nota1: Number(prompt("Qual a nota IMDB dele?")),
    genero1: prompt("qual gênero dele?")
}
let f2 = {
    nome2: prompt("insira o nome do 2° filme"),
    ano2: Number(prompt("Qual ano de lançamento?")),
    nota2: Number(prompt("Qual a nota IMDB dele?")),
    genero2: prompt("qual gênero dele?")
}
alert(" Dados dos filmes, começando por filme 1: \nnome: " + f1.nome1 + "\nano de lançamento: " + f1.ano1 + "\nnota IMBD: " + f1.nota1 + "\ngenero: " + f1.genero1 + "\nDados do segundo filme: \nnome: " + f2.nome2 + "\nano de lançamento: " + f2.ano2 + "\nnota IMBD: " + f2.nota2 + "\ngenero: " + f2.genero2)

if(f1.nota1 > f2.nota2){
    alert("O primeiro filme é melhor em relação ao IMBD a que o segundo filme")
}else{
    alert("O segundo filme é melhor em relação ao IMBD a que o primeiro filme")
}