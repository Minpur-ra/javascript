

let familia = 0
let soma = 0

while(true){
   let fml = prompt(" quer adicionar um membro na familia? sim ou não")
    if (fml == "sim" ){
        familia ++;}
      let salario = Number(prompt("quanto ele recebe?"))
      if(salario > 0){
        soma += salario;}
        else{
            console.log("isso nao eh ideia nao boy")
        }  
        else if( fml == "não") {
            alert("o salario final é: "+ soma)
        break
    }
}
