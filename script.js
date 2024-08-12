let imgAcorde = true
let txtAcorde = true
let MaiorAcorde = true
let MenorAcorde = true
let AcordeNome = document.getElementById("AcordeNome")
let AcordeImg = document.getElementById("AcordeImg")
let tempo = prompt("Qual será o tempo da troca de acorde? (max 15s) ")
let int = document.getElementById("int")
int.innerHTML = `Intervalo de ${tempo} segundos`


//Botões
let BTNMudarTempo = document.getElementById("mudarTempo")
let BTNDesativarIMG = document.getElementById("desativarImg")
let BTNDesativarNome = document.getElementById("DesativarNome")
let BTNDesativarMaiores = document.getElementById("DesativarMaiores")
let BTNDesativarMenores = document.getElementById("DesativarMenores")
while(isNaN(tempo) || tempo < 1 || tempo > 15) {
    tempo = prompt("Qual será o novo tempo da troca de acorde? (max 15s)")
    int.innerHTML = `Intervalo de ${tempo} segundos`
}


function DesativarNomeAcorde (){
    if(txtAcorde == true && imgAcorde == false){
        return alert("Você precisa deixar a imagem ou o nome do acorde ativado!")

    }
    if(txtAcorde == true){
        AcordeNome.style.fontSize="0.1px"
        txtAcorde = false
        BTNDesativarNome.innerHTML="Ativar Nome"
    }else if(txtAcorde == false){
        AcordeNome.style.fontSize="24px"
        txtAcorde = true
        BTNDesativarNome.innerHTML="Desativar Nome"
    }
}

function DesativarImagemAcorde(){
    if(imgAcorde == true && txtAcorde == false){
        return alert("Você precisa deixar a imagem ou o nome do acorde ativado!")

    }
    if(imgAcorde == true){
        AcordeImg.style.visibility="hidden"
        imgAcorde = false
        BTNDesativarIMG.innerHTML="Ativar Imagem"
    }else if(imgAcorde == false){
        AcordeImg.style.visibility="visible"
        imgAcorde = true
        BTNDesativarIMG.innerHTML="Desativar Imagem"
    }
}

function MudarIntervalo(){
    tempo = prompt("Qual será o novo tempo da troca de acorde? (max 15s) ")
    while(isNaN(tempo) || tempo < 1 || tempo > 15) {
        tempo = prompt("Qual será o tempo da troca de acorde? (max 15s)")
    }
    int.innerHTML = `Intervalo de ${tempo} segundos`
    console.log(tempo)
}

function DesativarMaioresAcordes(){
    if(MenorAcorde == false && MaiorAcorde == true){
        return alert("Você não pode desativar os acordes menores e maiores!")
    }
    if(MaiorAcorde == true){
        MaiorAcorde = false
        alert("Os Acordes Maiores Foram Desativados!")
        BTNDesativarMaiores.innerHTML = "Ativar Maiores"
        document.getElementById("maiorinfo").innerHTML="Acordes Maiores Desativados"
    }else if(MaiorAcorde == false){
        MaiorAcorde = true
        alert("Os Acordes Maiores Foram Ativados!")
        BTNDesativarMaiores.innerHTML = "Desativar Maiores"
        document.getElementById("maiorinfo").innerHTML="Acordes Maiores Ativados"
    }
}
function DesativarMenoresAcordes(){
    if(MaiorAcorde == false && MenorAcorde == true){
        return alert("Você não pode desativar os acordes menores e maiores!")
    }
    if(MenorAcorde == true){
        MenorAcorde = false
        alert("Os Acordes Menores Foram Desativados!")
        BTNDesativarMenores.innerHTML = "Ativar Menores"
        document.getElementById("menorinfo").innerHTML="Acordes Menores Desativados"
    }else if(MenorAcorde == false){
        MenorAcorde = true
        alert("Os Acordes Menores Foram Ativados!")
        BTNDesativarMenores.innerHTML = "Desativar Menores"
        document.getElementById("menorinfo").innerHTML="Acordes Menores Ativados"
    }
}
let numAcorde
function trocarAcorde(){
    if(MaiorAcorde == true && MenorAcorde == true){
        numAcorde = Math.floor(Math.random() * 14) + 1
        console.log(numAcorde)

        //Maiores Acordes
        if(numAcorde == 1){
            AcordeImg.src="Do-Maior.jpeg"
            AcordeNome.innerHTML="Dó Maior"
        }
        if(numAcorde == 2){
            AcordeImg.src="Fa-Maior.jpeg"
            AcordeNome.innerHTML="Fá Maior"
        }
        if(numAcorde == 3){
            AcordeImg.src="La-Maior.jpg"
            AcordeNome.innerHTML="Lá Maior"
        }
        if(numAcorde == 4){
            AcordeImg.src="Mi-Maior.webp"
            AcordeNome.innerHTML="Mi Maior"
        }
        if(numAcorde == 5){
            AcordeImg.src="Re-Maior.jpg"
            AcordeNome.innerHTML="Ré Maior"
        }
        if(numAcorde == 6){
            AcordeImg.src="Si-Maior.jpeg"
            AcordeNome.innerHTML="Si Maior"
        }
        if(numAcorde == 7){
            AcordeImg.src="Sol-Maior.jpg"
            AcordeNome.innerHTML="Sol Maior"
        }

        //Menores Acordes
        if(numAcorde == 8){
            AcordeImg.src="Do-Menor.png"
            AcordeNome.innerHTML="Dó Menor"
        }
        if(numAcorde == 9){
            AcordeImg.src="Fa-Menor.png"
            AcordeNome.innerHTML="Fá Menor"
        }
        if(numAcorde == 10){
            AcordeImg.src="La-Menor.png"
            AcordeNome.innerHTML="Lá Menor"
        }
        if(numAcorde == 11){
            AcordeImg.src="Mi-Menor.png"
            AcordeNome.innerHTML="Mi Menor"
        }
        if(numAcorde == 12){
            AcordeImg.src="Re-Menor.png"
            AcordeNome.innerHTML="Ré Menor"
        }
        if(numAcorde == 13){
            AcordeImg.src="Si-Menor.png"
            AcordeNome.innerHTML="Si Menor"
        }
        if(numAcorde == 14){
            AcordeImg.src="Sol-Menor.png"
            AcordeNome.innerHTML="Sol Menor"

        }

        AcordeImg.width=225
        AcordeImg.height=200
        return
    }else if (MaiorAcorde == true && MenorAcorde == false){
        numAcorde = Math.floor(Math.random() * 7) + 1
        console.log(numAcorde)

        //Maiores Acordes
        if(numAcorde == 1){
            AcordeImg.src="img/Acordes-Maiores/Do-Maior.jpeg"
            AcordeNome.innerHTML="Dó Maior"
        }
        if(numAcorde == 2){
            AcordeImg.src="img/Acordes-Maiores/Fa-Maior.jpeg"
            AcordeNome.innerHTML="Fá Maior"
        }
        if(numAcorde == 3){
            AcordeImg.src="img/Acordes-Maiores/La-Maior.jpg"
            AcordeNome.innerHTML="Lá Maior"
        }
        if(numAcorde == 4){
            AcordeImg.src="img/Acordes-Maiores/Mi-Maior.webp"
            AcordeNome.innerHTML="Mi Maior"
        }
        if(numAcorde == 5){
            AcordeImg.src="img/Acordes-Maiores/Re-Maior.jpg"
            AcordeNome.innerHTML="Ré Maior"
        }
        if(numAcorde == 6){
            AcordeImg.src="img/Acordes-Maiores/Si-Maior.jpeg"
            AcordeNome.innerHTML="Si Maior"
        }
        if(numAcorde == 7){
            AcordeImg.src="img/Acordes-Maiores/Sol-Maior.jpg"
            AcordeNome.innerHTML="Sol Maior"
        }
        AcordeImg.width=225
        AcordeImg.height=200
        return
    }else if(MaiorAcorde == false && MenorAcorde == true){
        numAcorde = Math.floor(Math.random() * 7*2) + 1
        console.log(numAcorde)

        if(numAcorde == 8){
            AcordeImg.src="img/Acordes-Menores/Do-Menor.png"
            AcordeNome.innerHTML="Dó Menor"
        }
        if(numAcorde == 9){
            AcordeImg.src="img/Acordes-Menores/Fa-Menor.png"
            AcordeNome.innerHTML="Fá Menor"
        }
        if(numAcorde == 10){
            AcordeImg.src="img/Acordes-Menores/La-Menor.png"
            AcordeNome.innerHTML="Lá Menor"
        }
        if(numAcorde == 11){
            AcordeImg.src="img/Acordes-Menores/Mi-Menor.png"
            AcordeNome.innerHTML="Mi Menor"
        }
        if(numAcorde == 12){
            AcordeImg.src="img/Acordes-Menores/Re-Menor.png"
            AcordeNome.innerHTML="Ré Menor"
        }
        if(numAcorde == 13){
            AcordeImg.src="img/Acordes-Menores/Si-Menor.png"
            AcordeNome.innerHTML="Si Menor"
        }
        if(numAcorde == 14){
            AcordeImg.src="img/Acordes-Menores/Sol-Menor.png"
            AcordeNome.innerHTML="Sol Menor"

        }
    }

}   

setInterval(trocarAcorde, tempo*1000)

