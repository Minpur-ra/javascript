


// let valores = []
// for(let i=0; i<5; i++){
//     let valor = Number(prompt("indique o valor do indice "+ i))
//     valores.push(valor)
// }
// let caro = 0
// for ( let i = 0; i<valores.length; i++ ){
//     if(valores[i]>valores[caro]){
//         caro = i}
// }
// alert(`o produto mais caro tá no indice ${caro} e com valor ${valores[caro]}`)


/* let tiposs = []

for(let i = 0; i<10; i++){
    let tipoo = prompt(`qual seu tipo sanguineo pessoa ${i}`)
    tiposs.push(tipoo)
}

for(let i = 0; i < tiposs.lenght; i++){
    alert(`a pessoa ${i} tem tipo sanguineo ${tiposs[i]}`)
} */

let rna = []

for(let i = 0; i<5; i++){
    let qual = prompt(`qual seu rna pessoa ${i}? A, U, C ou G`).toUpperCase()
    rna.push(qual)
}

let final = rna.map (qual => {
    switch (qual){
        case "A": return "U";
        case "U": return "A";
        case "C": return "G";
        case "G": return "C";
        default: return "?";
    }
})
console.log("o informado foi :", rna.join (" "))
console.log("o devolvido foi: ", final.join (" "))
