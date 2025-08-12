let operacao = prompt("qual tipo de coiso? considerando que as opções são: soma para somar, multi para multiplicar, sub para subtrair e divisao para dividir")
let v1 = Number(prompt("qual o primeiro valor"))
let v2 = Number(prompt("qual o segundo valor"))

if (operacao == "soma") {
    console.log("seu resultado eh: " + (v1 + v2))
} else if (operacao == "multi") {
    console.log("seu resultado eh: " + (v1 * v2))
} if (operacao == "divisao") {
    if(v1 || v2 == 0){
    console.log("nao se faz divisao com 0")}
    else{
    console.log("seu resultado eh: " + (v1 / v2))}}
if (operacao == "sub") {
    console.log("seu resultado eh: " + (v1 - v2))
} 