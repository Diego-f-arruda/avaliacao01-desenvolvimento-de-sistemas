// Escreva um programa que permita o cadastro de N produtos. Para cada produto, solicite o nome e o preço. Armazene os dados em um vetor de objetos. 
// Ao final, o programa deve:
//   - Imprimir o nome e o preço de cada produto.
//   - Calcular e exibir o preço médio dos produtos.
//   - Calcular e exibir o preço total

// ---

import leia from "readline-sync"


export default function atividade06() {
    
    let precoTotal: number = 0;
    let precoMedio: number = 0;
    let opcao: boolean = true

    type Produtos = {
        nome: string;
        preco: number; 
    }

    let estoque: Produtos [] = [];

    
    while(opcao === true){

        console.log("-------------------------------")
        console.log("Ira cadastrar outro produto apos? ")
        console.log("-------------------------------")
        let simNao = leia.keyInSelect(["Sim", "Não"]) + 1
        if(simNao === 2){opcao = false}
        let nome = leia.question("Informe o nome do produto: ")
        let preco = leia.questionFloat("Informe o preço do produto: ")

        const produto = {
            nome: nome,
            preco: preco
        }

        estoque.push(produto)

    
    }

    estoque.forEach(produto => {
        precoTotal = produto.preco
    });
    
    for(let i = 0; i < estoque.length; i++){
        precoMedio += estoque[i].preco
    }
    precoMedio = precoMedio / (estoque.length + 1)

    console.log(`O preo total dos itens em estoque é de ${precoTotal}`)
    console.log(`O preco medio dos itens em estoque é de ${precoMedio}`)
    console.log(estoque)
    console.log('Atividade 06');
}