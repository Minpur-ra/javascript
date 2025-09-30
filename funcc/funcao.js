
let tvendas = 0
let tdespesa = 0
let nvendas = 0

function venda(){
    let vendas = Number(prompt("Digite o valor da venda: "))
    tvendas += vendas
    nvendas++
}

function status (){
    alert(`o n° total de vendas é de ${nvendas} e o valor total é de ${tvendas}`)
}
 
function despesas (){
    let despesa = Number(prompt("insira o valor da despesa: "))
    tdespesa += despesa
}
function total (){
    alert(`o valor total de despesas do dia é de ${tdespesa}`)
}





function menu (){
let opcao = 0
do {
opcao = Number(prompt(`Escolha sua opção: 
    1 -  inserir valor de uma venda
    2 - ver status das vendas
    3 - inserir valor de uma despesa
    4-  ver total de despesas do dia
    5 - encerrar`))

    if ( opcao == 1){
        venda ()
    }
    if (opcao == 2){
        status ()
    }
    if (opcao == 3){
        despesas ()
    }
    if (opcao == 4){
        total ()
    }
    if (opcao == 5){
        break
    }


}while (opcao != 5)
}
menu ()