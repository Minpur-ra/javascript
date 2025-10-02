


const computador = {
        marca: "positivo",
        processador: "i3",
        memoria: "16gb",
        hd: "1 TB"
}


criarpc()
 {
const elementoMarca = document.createElement("h1")
elementoMarca.innerText = `${computador.marca}`

const elementopro = document.createElement("h2")
elementopro.innerText = `${computador.processador}`

const elementomem = document.createElement("h2")
elementomem.innerText = `${computador.memoria}`

const elementohd = document.createElement("p")
elementohd.innerText = `${computador.hd}`


const divPC = document.createElement("div")
divPC.classList.add("produto")
divPC.appendChild(elementoMarca)
divPC.appendChild(elementopro)
divPC.appendChild(elementomem)
divPC.appendChild(elementohd)


document.body.appendChild(divPC)
}



criarpc()