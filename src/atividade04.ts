// Crie um programa de adivinhação de números. O computador deve escolher aleatoriamente um número entre 1 e 100, e o usuário deve tentar adivinhar. 
// Após cada tentativa, o programa deve informar se o número correto é maior ou menor que a tentativa. O jogo termina quando o usuário acertar o número.

// ---


import leia from "readline-sync"


export default function atividade04() {  

  let numeroAleatorio = Math.trunc(Math.random() * 100)
  let seguir = false
  
  do{
    let opcao = leia.questionInt("Informe um numero de 0 a 100: ")
    if(opcao > numeroAleatorio){
      console.log("É menor!!!")
    }else if(opcao < numeroAleatorio){
      console.log("É maior!!!")
    }else if(opcao === numeroAleatorio){
      console.log("Acertou miseravel!!!")
      seguir = true
    }


  }while(seguir === false)

  console.log('Atividade 04');
}