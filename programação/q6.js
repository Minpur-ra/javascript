



let alunos = []

let media = 0, soma = 0

i=0

while(i<5){
    
    let matricula = Number(prompt("Digite a matrícula do aluno :"))
    i++
    let nota = Number(prompt("Digite a nota do aluno :"))
    alunos.push({matricula, nota})
    soma = soma + nota
    }
    media = soma / i
    alert(" a média da turma é: "+ media)

    let passou = alunos.filter(aluno=> aluno.nota > media)

    if(passou.length > 0){
        let resultado = "Os alunos acima da média são: "
            passou.forEach(aluno => {
                resultado += "matricula: "+ aluno.matricula +" "
    })
alert(resultado)}
    else{
        alert("Nenhum aluno está acima da média")
    }

    
