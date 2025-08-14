


let produto ={
    nome: prompt("nome do produto"),
    preco: Number(prompt("preço")),
    estoque: prompt("tem no estoque?")
}
if(produto.estoque == "tem" || produto.estoque == "sim"){
    alert("produto disponivel")
    }
    else{
        alert("produto esgotado")
    }
