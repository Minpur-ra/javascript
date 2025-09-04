let soma = 0;
let numero;

console.log("While");
numero = Number(prompt("Digite um número (0 para sair):"));
while(numero !== 0){
    soma += numero;
    numero = Number(prompt("Digite outro número (0 para sair):"));
}


console.log("Somatório:", soma);

console.log("Do-While");
soma = 0;
do{
    numero = Number(prompt("Digite um número (0 para sair):"));
    if(numero !== 0){
        soma += numero;
    }
}while(numero !== 0);
console.log("Somatório:", soma);

console.log("For");
soma = 0;


for(;;){
    numero = Number(prompt("Digite um número (0 para sair):"));
    if(numero === 0) break;
    soma += numero;
}
console.log("Somatório:", soma);