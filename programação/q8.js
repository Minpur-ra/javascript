


const palavras = ["hp", "atk"]
let hpf = 0, hpe = 0 ,atke = 0, atkf = 0, vit = 0, der = 0, levf = 0
let poke ={
    nome: prompt("qual o nome do pokemon"),
    hp: Number(prompt("qual o hp dele?")),
    atk: null,
    level: Number(prompt("e o nivel dele?"))
}
let hpinicial = poke.hp

let aleatorio = Math.floor(Math.random() * 3) + 1
poke.atk = aleatorio
alert("seu poder de pokemon é: "+ poke.atk)

while(true){

alert("Escolha a opção: \n1 batalhar \n2 vitória vs derrotas \n3 listar objeto \n4 sair")
let escolha = Number(prompt("qual a sua escolha?"))

if(escolha === 1){
    let inimigo ={
        hp: null,
        atk: null
    }

    let aleatorio2 = Math.floor(Math.random() * (10 - 5 + 1)) + 5
    inimigo.hp = aleatorio2
    let aleatorio3 = Math.floor(Math.random() * (4 - 0 + 1)) + 0
    inimigo.atk = aleatorio3
    alert("o inimigo tem: \nhp: "+ inimigo.hp + "\natk: "+ inimigo.atk)
    alert("voce tem: \nhp: "+ poke.hp + "\natk: "+ poke.atk)

    while(poke.hp > 0 && inimigo.hp > 0){
        inimigo.hp -= poke.atk
        poke.hp -= inimigo.atk
        alert("A BATALHA ACONTECEU E O RESULTADO DEU: \nseu hp: "+ poke.hp + "\nhp do inimigo: "+ inimigo.hp)}

    if(poke.hp <= 0 && inimigo.hp > 0){
        alert("você perdeu")
        der++
    }
    if(inimigo.hp <= 0 && poke.hp > 0){
        alert("você ganhou")
        vit++
        

    function up (){
        let aleat = Math.floor(Math.random() * 2)
        return palavras[aleat]}

        let upa = up()

        if(upa === "hp"){
            poke.hp += 1
            hpe ++
            hpf = hpinicial + hpe
            alert("seu hp aumentou para: "+ hpf)
        }

        if(upa === "atk"){
            poke.atk += 1
            atke ++
            atkf = poke.atk + atke
            alert("seu atk aumentou para: "+ poke.atk)}
        
    }poke.hp = hpinicial}


if(escolha === 2){
    alert("vitórias: "+ vit + "\nderrotas: "+ der)
}
if(escolha === 3){
    alert("nome: "+ poke.nome + "\nhp final: "+ hpf + "\natk final: "+ atkf + "\nlevel final: "+ levf + "\nvitórias: "+ vit + "\nderrotas: "+ der +"\nhp inicial: "+ poke.hp + "\natk inicial: "+ poke.atk + "\nlevel inicial: "+ poke.level)
}
if(escolha === 4){
    break
}
}