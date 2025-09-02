


let total = 0
while(true){
   let pessoa = prompt("quer adicionar uma pessoa? sim ou não")
   if(pessoa == "sim"){
    let temp = Number(prompt(" qual a temperatura?"))
   if(temp > 38){
    total++
   }
   }
   else{
    alert("o total de gente com febre é: "+ total)
   }
   

}