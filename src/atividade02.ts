// Escreva um programa que peça ao usuário a idade de uma pessoa e determine sua categoria com base nas seguintes regras:

//   - Menor de 12 anos: "Criança"
//   - De 12 a 17 anos: "Adolescente"
//   - De 18 a 59 anos: "Adulto"
//   - 60 anos ou mais: "Idoso"
  
// ---
import leia from "readline-sync"


export default function atividade02() {
  let idade: number;

  idade = leia.questionInt("Informe a idade: ");
  if(idade < 12){
    console.log("Criança");
  }else if(idade >= 12 && idade <= 17){
    console.log("Adolescente");
  }else if(idade >= 18 && idade <= 59){
    console.log("Adulto");
  }else if(idade >= 60){
    console.log("Idoso");
  }

  console.log('Atividade 02');
}