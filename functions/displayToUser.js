import entradaDados from 'readline-sync'
function exibirQuestoes(questoes) {
    let respostasCorretas = 0
    questoes.forEach((pergunta, index) => {
        console.log(`${index + 1}: ${pergunta.pergunta}`);
        const resposta = entradaDados.question("resposta: ")
        if (pergunta.resposta === resposta) {
            console.log("resposta correta");
            respostasCorretas += 1
        } else {
            console.log("resposta errada");
        }
    });
    return respostasCorretas;
}

function exibirResultado(respostasCorretas) {
    if (respostasCorretas >= 1 && respostasCorretas <= 3) {
        console.log("OH NÃO! Tente mais uma vez. ");
    } else if (respostasCorretas >= 4 && respostasCorretas <= 6) {
        console.log("BOM TRABALHO! Pratique um pouco mais. ");

    } else if (respostasCorretas >= 7 && respostasCorretas <= 9) {
        console.log("MUITO BOM! Você acertou a maioria. ")

    } else {
        console.log("EXCELENTE! Você é um verdadeiro expert. ");
    }
}

export {exibirQuestoes, exibirResultado}