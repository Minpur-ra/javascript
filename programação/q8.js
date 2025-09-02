


let poke ={
    nome: prompt("qual o nome do pokemon"),
    hp: Number(prompt("qual o hp dele?")),
    atk: null,
    level: Number(prompt("e o nivel dele?"))
}

let aleatorio = Math.floor(Math.random() * 3) + 1
poke.atk = aleatorio
alert("seu poder de pokemon é: "+ poke.atk)