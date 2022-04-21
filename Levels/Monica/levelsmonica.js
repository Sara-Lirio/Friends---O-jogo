var opcaoA = "a"
var opcaoB = "b"
var opcaoC = "c"
var sim = "s"

// Fase 1
function peru() {
    var resposta1 = "c"
    var pergunta1 = prompt("Qual realmente foi o pior feriado para Monica? \na,b ou c")
    if (pergunta1 === resposta1) {
        alert("Sim, Monica não gosta nem de contar essa historia.")
        redirecionar1()
    } else if (pergunta1 == opcaoA) {
        alert("Esse realmente foi um pessímo feriado, mas não o pior.")
        gameOver()
    } else if (pergunta1 == opcaoB) {
        alert("Esse foi um feriado em que Monica nunca mais esqueceria, mas não foi o pior.")
        gameOver()
    } while (pergunta1 !== opcaoA && pergunta1 !== opcaoB && pergunta1 !== opcaoC) {
        alert("Responda: a, b ou c - em letra mínuscula")
        peru()
        pergunta1++
        break
    }
}

function redirecionar1() {
    window.location.href = "./level2.html";
}

// Fase 2
function descobriu() {
    var resposta2 = "b"
    var pergunta2 = prompt("O que teria deixado Chandler bravo? \na,b ou c")
    if (pergunta2 === resposta2) {
        alert("Monica estava armando um plano junto a Rachel para se vingar de Chandler por ter chamado ela de baleia no ano anterior, acidentalmente ao realizar o plano uma faca deslizou da mão de Monica sobre o pé de Chandler")
        redirecionar2()
    } else if (pergunta2 == opcaoA) {
        alert("Chandler realmente se assustou com a cabeça de Peru em Joey na época, mas não foi isso que deixou Chandler bravo hoje.")
        gameOver()
    } else if (pergunta2 == opcaoC) {
        alert("Não foi isso que deixou Chandler bravo, afinal foi um acidente. Ops... quase contei")
        gameOver()
    } while (pergunta2 !== opcaoA && pergunta2 !== opcaoB && pergunta2 !== opcaoC) {
        alert("Responda: a, b ou c - em letra mínuscula")
        descobriu()
        pergunta2++
        break
    }
}

function redirecionar2() {
    window.location.href = "./level3.html";
}

// Fase 3
function reacaoChandler() {
    var resposta3 = "c"
    var pergunta3 = prompt("Qual foi a reação de Chandler? \na,b ou c")
    if (pergunta3 == resposta3) {
        alert("Oh my God! Você acertou.")
        redirecionar3()
    } else if (pergunta3 == opcaoA) {
        alert("Ainda bem que não foi essa reação não é mesmo?! \nChandler não estava tão bravo assim.")
        gameOver();
    } else if (pergunta3 == opcaoB) {
        alert("Chandler não conseguiu contar nenhuma piada dessa vez.")
        gameOver();
    } while (pergunta3 !== opcaoA && pergunta3 !== opcaoB && pergunta3 !== opcaoC) {
        alert("Responda: a, b ou c - em letra mínuscula")
        reacaoChandler()
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

