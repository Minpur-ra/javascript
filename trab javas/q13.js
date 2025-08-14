
const distancia = parseFloat(prompt("Digite a distância da viagem em km:"))
const velocidadeMedia = parseFloat(prompt("Digite a velocidade média da viagem em km/h:"))
const precoCombustivel = parseFloat(prompt("Digite o preço do litro de combustível:"))
const consumoCarro = parseFloat(prompt("Digite o consumo do carro em km por litro:"))


const tempoViagem = distancia / velocidadeMedia


const litrosConsumidos = distancia / consumoCarro


const custoViagem = litrosConsumidos * precoCombustivel


alert("--- Dados da Viagem ---")
alert("\nTempo de viagem:" + tempoViagem)
alert("\nLitros consumidos:"+ litrosConsumidos)
alert(" \nCusto estimado: "+ custoViagem)