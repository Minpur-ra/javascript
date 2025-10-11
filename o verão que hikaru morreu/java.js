

function musica (){
    const audio = document.getElementById("audio")
    const som = document.getElementById("som")

    if(audio.paused){
        audio.play()
        som.src = "foto/som-removebg-preview.png"
    }else{
        audio.pause()
        som.src = "foto/off-removebg-preview.png" 
    }
}



function inf1(){
    const inf = document.getElementById("inf")
    if (inf.style.display === "none"){
        inf.style.display = "block"
    }else{
        inf.style.display = "none"}
}
function inf2(){
    const inf2 = document.getElementById("inf2")
        if (inf2.style.display === "none"){
            inf2.style.display = "block"
        }else{
            inf2.style.display = "none"}
}
function inf3(){
    const inf3 = document.getElementById("inf3")
    if(inf3.style.display === "none"){
        inf3.style.display = "block"
    }else{
        inf3.style.display = "none"}
}
function inf4(){
    const inf4 = document.getElementById("inf4")
    if(inf4.style.display === "none"){
        inf4.style.display = "block"
    }
    else{
        inf4.style.display = "none"
    }
}

