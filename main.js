import entradaDados from 'readline-sync';
import questoes from './data/data.js'
import { embaralharQuestoes, selecionarQuestoesAleatorias } from './functions/processingOfQuestions.js';
import { exibirQuestoes, exibirResultado } from './functions/displayToUser.js';
console.log("Seja Bem-vindo jogador(a)!");
const nome = entradaDados.question("Digite o seu nome: ");

const quantidadePerguntas = 10;
const perguntasSelecionadas = selecionarQuestoesAleatorias(questoes, quantidadePerguntas);
const respostasCorretas = exibirQuestoes(perguntasSelecionadas);
exibirResultado(respostasCorretas);
console.log(`Jogador(a): ${nome}`);
console.log(`Pontuação final: ${respostasCorretas}`)

export { embaralharQuestoes, selecionarQuestoesAleatorias, exibirQuestoes };