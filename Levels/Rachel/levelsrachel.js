var opcaoA = "a"
var opcaoB = "b"
var opcaoC = "c"
var sim = "s"

// Fase 1
function decisaoRachel() {
    var resposta1 = "a"
    var pergunta1 = prompt("O que Rachel faz a seguir? \na,b ou c")
    if (pergunta1 === resposta1) {
        alert("Rachel falou para seu pai que passaria um tempo na casa de Monica sem questionar a amiga, entretanto Monica não se opos")
        redirecionar1()
    } else if (pergunta1 == opcaoB) {
        alert("Ainda não foi isso que Rachel fez")
        gameOver()
    } else if (pergunta1 == opcaoC) {
        alert("Ainda não foi isso que Rachel fez")
        gameOver()
    } while (pergunta1 !== opcaoA && pergunta1 !== opcaoB && pergunta1 !== opcaoC) {
        alert("Responda: a, b ou c - em letra mínuscula")
        decisaoRachel()
        pergunta1++
        break
    }
}

function redirecionar1() {
    window.location.href = "./level2.html";
}

// Fase 2
function trabalhoRachel() {
    var resposta2 = "b"
    var pergunta2 = prompt("Afinal, qual foi o primeiro emprego que Rachel conseguiu?\na,b ou c")
    if (pergunta2 == resposta2) {
        alert("Rachel agora é garçonete na cafeteria do Central Perk, apesar de não servir com excelência seus clientes ainda há uma longa trilha a ser trilhada.")
        redirecionar2()
    } else if (pergunta2 == opcaoA) {
        alert("Por enquanto Rachel não trabalha com isso.")
        gameOver()
    } else if (pergunta2 == opcaoC) {
        alert("Por enquanto Rachel não trabalha com isso, quem sabe um dia.")
        gameOver()
    } while (pergunta2 !== opcaoA && pergunta2 !== opcaoB && pergunta2 !== opcaoC) {
        alert("Responda: a, b ou c - em letra mínuscula")
        trabalhoRachel()
        pergunta2++
        break
    }
}

function redirecionar2() {
    window.location.href = "./level3.html";
}

// Fase 3
function empregoSonhos() {
    var resposta3 = "n"
    var pergunta3 = prompt("Será que o novo emprego de Rachel é o emprego do sonhos?\n(s)Sim ou (n)Não")
    if (pergunta3 == resposta3) {
        alert("Você Acertou ! Esse ainda não é o emprego do sonhos de Rachel, em seu ultimo discurso no emprego de garçonete disse que se sentia aliviada em dizer que não serveria mais café na vida.\n Adivinha? Sim ela está servindo café em sua próximo trabalho.")
        redirecionar3()
    } else if (pergunta3 == sim) {
        alert("Ah não, lamento a você e a Rachel")
        gameOver()
    } while (pergunta3 !== resposta3 && pergunta3 !== sim) {
        alert("Responda: (s)para Sim ou (n)para Não - em letra mínuscula")
        empregoSonhos()
        pergunta3++
        break
    }
}

function redirecionar3() {
    window.location.href = "../../End/youWin.html";
}

function gameOver() {
    window.location.href = "../../End/gameOver.html";
}