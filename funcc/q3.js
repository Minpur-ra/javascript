



let livro = []

function livros (){
    let novolivro = {
        nome: prompt("insira o nome do livro: "),
        autor: prompt("insira o nome do autor: "),
        ano: Number(prompt("insira o ano de lançamento: ")),
        ava: Number(prompt("insira a sua avaliação de 0 a 5: "))
    } 
    livro.push(novolivro)
}
    function nomes (){
        let nomitos = livro.map((novolivro) => novolivro.nome)
            alert(`o nome dos livros cadastrados são: ${nomitos} `)
    }

    function dados (){
        let qual =  prompt(`qual livro você deseja? `)
        let lespec =  livro.find((novolivro) => novolivro.nome.toLowerCase() === qual.toLowerCase())
        if (lespec){
            alert(`Nome: ${lespec.nome}
                Autor: ${lespec.autor}
                Ano: ${lespec.ano}
                Avaliação: ${lespec.ava}`)
             } else{
                    alert("livro nao encontrado/inexistente")
                }
        }

        function autores (){
            let autoritos = livro.map((novolivro) => novolivro.autor)
            let aut = prompt(`qual autor vc deseja?`)
            let autespec = livro.filter((novolivro) => novolivro.autor.toLowerCase() === aut.toLowerCase())
            if(autespec.length === 0){
                alert(`nenhum livro encontrado para esse autor`)
            } else{
                let result = " "
                autespec.forEach((novolivro) => {
                    result += `Nome: ${ novolivro.nome}
                    Autor: ${ novolivro.autor}
                    Ano: ${novolivro.ano}
                    Avaliaçoes: ${novolivro.ava} \n\n`
                    
                })
                alert(`${result}`)
            }
        }




function menu (){

    let opcao = 0
    do {
        opcao = Number(prompt(`escolha sua opção:
            1 - inserir dados de um livro (nome, autor, ano e avaliação)
            2 - imprimir nomes de todos os livros cadastrados
            3 - imprimir todos os dados de um livro específico
            4 - imprimir todos os dadod dos livros de um autor específico
            5 - encerrar `))

            if (opcao == 1 ){
                livros()
            }
            if (opcao == 2 ){
                nomes ()
            }
            if (opcao == 3 ){
                dados ()
            }
            if (opcao == 4 ){
                autores ()
            }   
            if (opcao == 5 ){
                break
            }
    }




while (opcao != 5)}

menu ()