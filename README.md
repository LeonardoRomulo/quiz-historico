## Quiz Histórico
O quiz histórico tras 10 perguntas aleatórias  que devem ser respondidas no terminal somente com o ano do fato histórico.

# Funcionalidades

Embaralhar questões  
Selecionar questões aleatórias  
Exibir questões e coletar respostas  
Exibir resultado com base no desempenho

# Estrutura do Projeto

- Pasta `data`: Contém a coleção de array de objetos com as perguntas
- Pasta `functions`: Contém as funções da aplicação para embaralhar, selcionar, exibir as perguntas e exibir o desempenho do usuário.
- Pasta `testes`: Contém os testes da aplicação.
- Arquivo `main`: Arquivo principal da aplicação que contém as entradas do usuário e chamadas das funções.
- Arquivo `package.json`: Contém as dependências e scripts do projeto.
- Arquivo `README.md`: Contém a documentação do projeto.

# Instalação

1. Clone o repositório:

   ```sh
   git clone <URL-do-repositorio>
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd quiz-historico
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```

# Uso

Para iniciar a aplicação, execute:

```sh
node main.js
```

# Testes

Para rodar os testes, execute:

```sh
npm test
```

# Arquivos Principais

**main.js**  
Este é o ponto de entrada da aplicação. Ele importa as funções necessárias, embaralha e seleciona as questões, exibe as questões e mostra o resultado.

```sh
import entradaDados from 'readline-sync';
import questoes from './data/data.js'
import { embaralharQuestoes, selecionarQuestoesAleatorias } from './functions/processingOfQuestions.js';
import { exibirQuestoes, exibirResultado } from './functions/displayToUser.js';
console.log("Seja Bem-vindo jogador(a)!");
const nome = entradaDados.question("Digite o seu nome: ");


const quantidadePerguntas = 10;
const perguntasSelecionadas = selecionarQuestoesAleatorias(questoes, quantidadePerguntas)
const respostasCorretas = exibirQuestoes(perguntasSelecionadas);
exibirResultado(respostasCorretas);

export { embaralharQuestoes, selecionarQuestoesAleatorias, exibirQuestoes };
```

**data.js**  
Contém as questões do quiz.

**displayToUser.js**  
Contém as funções para exibir as questões e o resultado ao usuário.

**processingOfQuestion.js**

Contém as funções que embaralham as questões de forma aleatória e selecionam as questões.

```sh
function embaralharQuestoes(questoes) {
    return questoes.sort(() => Math.random() - 0.5);
}

function selecionarQuestoesAleatorias(questoes, quantidade) {
    const questoesEmbaralhadas = embaralharQuestoes(questoes);
    return questoesEmbaralhadas.slice(0, quantidade);
}

export {embaralharQuestoes, selecionarQuestoesAleatorias};
```

# Como Contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch com a sua feature: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'Minha nova feature'`.
4. Faça um push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.
