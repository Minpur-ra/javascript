let valor, maior, menor;
let i = 0;

console.log("While");
maior = Number.NEGATIVE_INFINITY;
menor = Number.POSITIVE_INFINITY;
while(i < 10){
    valor = parseInt(prompt("Digite um valor:"));
    if(valor > maior) maior = valor;
    if(valor < menor) menor = valor;
    i++;
}


console.log("Maior:", maior, "Menor:", menor);

console.log("Do-While");
maior = Number.NEGATIVE_INFINITY;
menor = Number.POSITIVE_INFINITY;
i = 0;
do{
    valor = parseInt(prompt("Digite um valor:"));
    if(valor > maior) maior = valor;
    if(valor < menor) menor = valor;
    i++;
}while(i < 10);
console.log("Maior:", maior, "Menor:", menor);

console.log("For");
maior = Number.NEGATIVE_INFINITY;
menor = Number.POSITIVE_INFINITY;


for(i = 0; i < 10; i++){
    valor = parseInt(prompt("Digite um valor:"));
    if(valor > maior) maior = valor;
    if(valor < menor) menor = valor;
}
console.log("Maior:", maior, "Menor:", menor);