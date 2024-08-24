const readline = require("readline-sync");
const fs = require("fs");

const atualizar = async (caminho) => {
    const visualizar = require('./visualizarProduto.js');
    const produto = await visualizar.objProdutos(caminho);

    await visualizar.apresentarProdutos(produto);

    let qtd = produto.length;
    
    if(qtd >= 1){
        let opcao = readline.questionInt("Selecione uma opção para atualizar o Estoque: \n");

        while(opcao<1 || opcao > qtd + 1){
            console.log("Opção inválida! ");
            let opcao = readline.questionInt("Selecione uma opção para atualizar o Estoque: \n");
        }

        
        produto [opcao-1].estoque = readline.questionInt("Qual quantidade: ");

        if(produto [opcao-1].estoque > 0){
            produto [opcao-1].status = 1;
        } else{
            produto [opcao-1].status = 0;
        }

     
        const produtoJson = JSON.stringify(produto);

        try {

            fs.writeFileSync(caminho, produtoJson);
            console.log("Produto atualizada com sucesso");
            
        } catch (err) {
            console.error("Erro a atualizar a produto", err);
            
        }
    }

}
module.exports = atualizar;