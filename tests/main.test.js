import { embaralharQuestoes, selecionarQuestoesAleatorias, exibirQuestoes } from '../main';
import readlineSync from 'readline-sync';

const questoes = [
    { id: 1, pergunta: 'Quando aconteceu o atentado as Torres Gêmeas?', resposta: '2001' },
    { id: 2, pergunta: 'Em que ano foi detectado o primeiro paciente com coronavírus?', resposta: '2019' },
    { id: 3, pergunta: 'Em que ano Steve Jobs apresentou o primeiro iPhone sem botão físico?', resposta: '2007' },
    { id: 4, pergunta: 'Qual o ano da morte de Stan Lee?', resposta: '2018' },
    { id: 5, pergunta: 'Qual ano o Brasil tornou-se tetracampeão mundial de futebol?', resposta: '1994' },
];

test('embaralharQuestoes deve embaralhar as questões', () => {
    const questoesEmbaralhadas = embaralharQuestoes([...questoes]);
    expect(questoesEmbaralhadas).not.toEqual(questoes);
    expect(questoesEmbaralhadas).toHaveLength(questoes.length);
});

test('selecionarQuestoesAleatorias deve selecionar a quantidade correta de questões', () => {
    const quantidade = 3;
    const questoesSelecionadas = selecionarQuestoesAleatorias(questoes, quantidade);
    expect(questoesSelecionadas).toHaveLength(quantidade);
});

test('exibirQuestoes deve retornar o número correto de respostas corretas', () => {
    const questoesTeste = [
        { id: 1, pergunta: 'Pergunta 1', resposta: 'Resposta 1' },
        { id: 2, pergunta: 'Pergunta 2', resposta: 'Resposta 2' },
    ];

    // Mock da função question do readline-sync
    jest.mock('readline-sync', () => ({
        question: jest.fn((prompt) => {
            if (prompt.includes('1')) return 'Resposta 1';
            if (prompt.includes('2')) return 'Resposta 2';
            return '';
        }),
    }));

    const respostasCorretas = exibirQuestoes(questoesTeste);
    expect(respostasCorretas).toBe(2);
});