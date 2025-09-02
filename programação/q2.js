let soma = 0;
let contador = 0;
let idade;

console.log("While");
idade = parseInt(prompt("Digite uma idade (0 ou negativa para sair):"));
while(idade > 0){
    soma += idade;
    contador++;
    idade = parseInt(prompt("Digite outra idade (0 ou negativa para sair):"));
}


console.log("Média de idades:", soma / contador);

console.log("Do-While");
soma = 0;
contador = 0;
do{
    idade = parseInt(prompt("Digite uma idade (0 ou negativa para sair):"));
    if(idade > 0){
        soma += idade;
        contador++;
    }
}while(idade > 0);
console.log("Média de idades:", soma / contador);

console.log("For");
soma = 0;
contador = 0;


for(;;){
    idade = parseInt(prompt("Digite uma idade (0 ou negativa para sair):"));
    if(idade <= 0) break;
    soma += idade;
    contador++;
}
console.log("Média de idades:", soma / contador);