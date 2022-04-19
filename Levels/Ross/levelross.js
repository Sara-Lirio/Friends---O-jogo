var opcaoA = "a"
var opcaoB = "b"
var opcaoC = "c"
var sim = "s"

// Fase 1
function deixarRecado() {
    var resposta1 = "n"
    var pergunta1 = prompt("E agora, Ross deixa o recado para Rachel ? \n(s)Sim ou (n)Não")
    if (pergunta1 === resposta1) {
        alert("Claro que Ross não deixou o recado a Rachel")
        redirecionar1()
    } else if (pergunta1 == sim) {
        alert("Noo! Ross esconde o bilhete no armário por ciúmes")
        gameOver()
    } while (pergunta1 !== resposta1 && pergunta1 !== sim) {
        alert("Responda: (s)para Sim ou (n)para Não - em letra mínuscula")
        deixarRecado()
        pergunta1++
        break
    }
}

function redirecionar1() {
    window.location.href = "./level2.html";
}

// Fase 2
function qualAmigo() {
    var resposta2 = "b"
    var pergunta2 = prompt("Qual amigo de Ross teria criado essa teoria?\na,b ou c")
    if (pergunta2 === resposta2) {
        alert("Sim! Foi a Phoebe, ela cria tantas teorias num é mesmo?!")
        redirecionar2()
    } else if (pergunta2 == opcaoA) {
        alert("Oh no! Ross realmente não lembra quem criou essa teoria.")
        gameOver()
    } else if (pergunta2 == opcaoC) {
        alert("Oh no! Ross realmente não lembra quem criou essa teoria.")
        gameOver()
    } while (pergunta2 !== opcaoA && pergunta2 !== opcaoB && pergunta2 !== opcaoC) {
        alert("Responda: a, b ou c - em letra mínuscula")
        qualAmigo()
        pergunta2++
        break
    }
}

function redirecionar2() {
    window.location.href = "./level3.html";
}

// Fase 3
function oBaile() {
    var resposta3 = "c"
    var pergunta3 = prompt("Eai Ross, me diga o que você vai fazer?\na,b ou c")
    if (pergunta3 === resposta3) {
        alert("Sim, é isso que Ross faria")
        redirecionar3()
    } else if (pergunta3 == opcaoA) {
        alert("É, não foi isso que Ross realmente decidiu")
        gameOver()
    } else if (pergunta3 == opcaoB) {
        alert("É, não foi isso que Ross realmente decidiu")
        gameOver()
    } while (pergunta3 !== opcaoA && pergunta3 !== opcaoB && pergunta3 !== opcaoC) {
        alert("Responda: a, b ou c - em letra mínuscula")
        oBaile()
        pergunta3++
        break
    }
}

function redirecionar3() {
    window.location.href = "./level4.html";
}

// Fase 4
function casal() {
    var resposta4 = "a"
    var pergunta4 = prompt("E agora, o que será dessa casal?\na,b ou c")
    if (pergunta4 === resposta4) {
        alert("Finalmente esse casal ficou junto!")
        redirecionar4()
    } else if (pergunta4 == opcaoB) {
        alert("Você chegou bem perto,\nmas não foi isso que aconteceu com o casal")
        gameOver()
    } else if (pergunta4 == opcaoC) {
        alert("Você chegou bem perto,\nmas não foi isso que aconteceu com o casal")
        gameOver()
    } while (pergunta4 !== opcaoA && pergunta4 !== opcaoB && pergunta4 !== opcaoC) {
        alert("Responda: a, b ou c - em letra mínuscula")
        casal()
        pergunta4++
        break
    }
}

function redirecionar4() {
    window.location.href = "../../End/youWin.html";
}

function gameOver() {
    window.location.href = "../../End/gameOver.html";
}