function embaralharQuestoes(questoes) {
    return questoes.sort(() => Math.random() - 0.5);
}

function selecionarQuestoesAleatorias(questoes, quantidade) {
    const questoesEmbaralhadas = embaralharQuestoes(questoes);
    return questoesEmbaralhadas.slice(0, quantidade);
}

export {embaralharQuestoes, selecionarQuestoesAleatorias};