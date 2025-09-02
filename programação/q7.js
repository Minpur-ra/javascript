let soma = 0 , sub = 0 , mult = 0 , div = 0 

while(true){
alert(" Indique o que deseja: \n a) Soma \n b) Subtração \n c) Multiplicação \n d) Divisão \n e) Sair")
let resp = prompt("qual operação ce quer?")

    if(resp == "a"){
        soma++
        let n1 = Number(prompt("insira um numero"))
        let n2 = Number(prompt("insira outro numero"))
        alert("sua soma deu: "+ (n1+n2))
    }
    if(resp == "b"){
        sub++
        let n1 = Number(prompt("insira um numero"))
        let n2 = Number(prompt("insira outro numero"))
        alert("sua subtração deu: "+ (n1-n2))
    }if(resp == "c"){
        mult++
        let n1 = Number(prompt("insira um numero"))
        let n2 = Number(prompt("insira outro numero"))
        alert("sua multiplicação deu: "+ (n1*n2))
    }if(resp == "d"){
        div++
        let n1 = Number(prompt("insira um numero"))
        let n2 = Number(prompt("insira outro numero"))
        alert("sua divisão deu: "+ (n1/n2))
    }else if(resp == "e"){
        alert("foram feitas "+ soma +" somas, "+ sub +" subtrações, "+ mult + " multiplicações e "+ div + " divisões" )
        break
}}