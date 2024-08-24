const readline = require("readline-sync");
const fs = require("fs");
const { REFUSED } = require("dns");

const cadastrarProduto = async (caminho, listaProdutos) => {

    let produto = await listaProdutos;

    let qtdProduto = produto.length +1;

    let novoProduto = {

        id: qtdProduto,
        nome: readline.question("\n Qual o nome do Produto: "),
        unidade: readline.question("Qual unidade de armazenamento (PACOTE - CAIXA - UNIDADE): "),
        estoque: 0,
        status: 0 // do produto em esotque
    }
    produto.push(novoProduto);

    const produtoJson = JSON.stringify(produto);
    try{

        fs.writeFileSync(caminho, produtoJson);
        console.log("Produto Adicionada com sucesso!");
    }catch(err){
        console.error("Erro ao adicionar a produto.");
    }
}

module.exports = cadastrarProduto;