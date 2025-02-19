// Escreva um programa que simule o jogo "Pedra, Papel e Tesoura". O usuário deve informar sua 
// escolha, e o computador deve fazer uma escolha aleatória. O programa deve determinar 
// o vencedor com base nas seguintes regras:

//   - Pedra vence Tesoura.
//   - Tesoura vence Papel.
//   - Papel vence Pedra.

// ---
import { Console } from "console";
import leia from "readline-sync"


export default function atividade03() {

let opcaoUsuario = leia.keyInSelect(["Pedra", "Papel", "Tesoura"]) + 1
let opcaoPc = Math.trunc(Math.random() * 3) + 1



if(opcaoUsuario === opcaoPc){
  console.log("Empate")
}else if(opcaoUsuario === 1 && opcaoPc === 2){
  console.log("Pc ganhou")
}else if(opcaoUsuario === 2 && opcaoPc === 1){
  console.log("Usuario ganhou")
}else if(opcaoUsuario === 2 && opcaoPc === 3){
  console.log("Pc ganhou")
}else if(opcaoUsuario === 3 && opcaoPc === 2){
  console.log("Usuario ganhou")
}else if(opcaoUsuario === 3 && opcaoPc === 1){
  console.log("Pc ganhou")
}else if(opcaoUsuario === 1 && opcaoPc === 3){
  console.log("Pc ganhou")
}
console.log(`Opcao do Usuario ${opcaoUsuario}`)
console.log(`Opcao da Maquina ${opcaoPc}`)

  console.log('Atividade 03');
}