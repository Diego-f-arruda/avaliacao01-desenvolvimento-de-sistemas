// Você precisa desenvolver um algoritmo para calcular a pontuação de todos os jogadores de um time de futebol. Nesse momento será 
// analisada apenas a quantidade de gols, passes certos e passes errados. (Utilize Vetor e Objeto)

//     Cada Gol: 50 Pontos
//     Cada Passe Certo: 10 Pontos
//     Cada Passe Errado: -5 Pontos

// Você deve solicitar o nome do jogador, quantidade de gols, numero de passes certos e quantidade de passes errados. 
// O algoritmo deve calcular a pontuação de cada jogador e informar se o jogador foi bem ou mal na partida, 
// levando como base a seguinte tabela. No final, deve apresentar o jogador com melhor pontuação. 
// Lembre-se que um time de futebol tem 10 jogadores de linha.

//     Pontuação < 50 - Péssima partida.
//     Pontuação de 50 até 100 - Partida ruim.
//     Pontuação de 100 até 150 - Fez o básico
//     Pontuação de 150 até 200 - Foi bem na partida
//     Pontuação acima de 200 - Jogou demais

// ---

import leia from "readline-sync"

export default function atividade05() {

  type Jogador = {
    nome: string;
    gols: number;
    passesCertos: number;
    passesErrados: number;
    pontuacao: number;
  }
  
  let time: Jogador [] = [];
  
  for(let i = 0; i < 4; i++){
    let nome = leia.question("Nome do Jogador: ");
    let gols = leia.questionInt("Quantos gols: ");
    let passesCertos = leia.questionInt("Quantos passes certos: ");
    let passesErrados = leia.questionInt("Quantos passes errados: ");
    let pontuacao = (gols * 50) + (passesCertos * 10) + (passesErrados * (-5))
    

    const jogador = {
      nome: nome,
      gols: gols,
      passesCertos: passesCertos,
      passesErrados: passesErrados,
      pontuacao: pontuacao
    }
    time.push(jogador)

    for(let j = 0; j < time.length; j++){
      if(jogador.pontuacao < 50){
        console.log("Pessima Partida!!")
      }else if(jogador.pontuacao >= 50 && jogador.pontuacao < 100){
        console.log("Partida Ruim!!!")
      }else if(jogador.pontuacao >= 100 && jogador.pontuacao < 150){
        console.log("Fez o Basico!!!")
      }else if(jogador.pontuacao >= 150 && jogador.pontuacao < 200){
        console.log("Foi bem na partida!!!")
      }else{
        console.log("Jogou demais!!!")
      }
    }
  
    console.log(time)
  
  }
  console.log('Atividade 05');
}