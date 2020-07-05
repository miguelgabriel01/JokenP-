const readline = require('readline');//Vamos importar o módulo readline, que nos possibilita ler comandos enviados para o Node.js.

//instanciar nossa interface.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * No trecho rl.question estamos enviando uma pergunta
 * ao usuário, que envia uma resposta e ela fica disponível
 * para utilizarmos dentro da função que precede a pergunta.
 * Estamos utilizando uma função anônima (() => {}) logo depois 
 * da vírgula onde colocamos nossa pergunta, é dentro dessa função
 * que fica disponível a entrada do usuário
 */
rl.question('Qual sua jogada, pedra, papel ou tesoura? ', resposta => {
  /**
   * Podemos então gerar um conflito entre a escolha
   * do computador e a escolha do usuário.

     Vamos criar um mapa de opções que traduz a escolha 
     do usuário para um número que nós conhecemos como pedra, 
     papel ou tesoura.
   */
  
    const opcoes = {
    pedra: 1,
    papel: 2,
    tesoura: 3
  };

  /**
   * Agora vamos pegar a resposta que o usuário envia pela linha 
   * de comando e transformar isso em um número extraindo a chave 
   * do mapa “opco
   */
  const escolhaDoUsuario = opcoes[resposta];

  /**
   * O computador não vai nos enviar uma entrada de dados,
   *  nós precisamos trabalhar isso através do JavaScript. 
   * Na maioria das linguagens de programação temos uma função 
   * ou método chamado random, que gera um número aleatório. Em 
   * JavaScript isso é um método do módulo Math, um módulo com funções
   *  matemáticas.

     Temos três opções que podem ser escolhidas: 
     pedra, papel ou tesoura. Vamos assumir que cada uma 
     delas agora equivale a um número, um para pedra, dois 
     para papel e três para tesoura.
   */
  const escolhaDoComputador = Math.round(Math.random() * 2) + 1;

  /**
   * Vamos pensar nos casos em que o usuário ganha: pedra 
   * ganha de tesoura, mas perde para papel, papel ganha de pedra,
   *  mas perde para tesoura, tesoura ganha de papel mas perde para pedra,
   *  nos casos de escolhas iguais, há o empate.
   */
  if (escolhaDoUsuario === 1 && escolhaDoComputador === 3) {
    console.log('Você ganhou!');
  } else if (escolhaDoUsuario === 1 && escolhaDoComputador === 2) {
    console.log('Você perdeu!');
  } else if (escolhaDoUsuario === 1 && escolhaDoComputador === 1) {
    console.log('Empatou!');
  }

  if (escolhaDoUsuario === 2 && escolhaDoComputador === 1) {
    console.log('Você ganhou!');
  } else if (escolhaDoUsuario === 2 && escolhaDoComputador === 3) {
    console.log('Você perdeu!');
  } else if (escolhaDoUsuario === 2 && escolhaDoComputador === 2) {
    console.log('Empatou!');
  }

  if (escolhaDoUsuario === 3 && escolhaDoComputador === 2) {
    console.log('Você ganhou!');
  } else if (escolhaDoUsuario === 3 && escolhaDoComputador === 1) {
    console.log('Você perdeu!');
  } else if (escolhaDoUsuario === 3 && escolhaDoComputador === 3) {
    console.log('Empatou!');
  }

  rl.close();
});