const readline = require("readline-sync");
const fs = require("fs");

const controller = {

    objProdutos: async (caminho) => {

        try {

            const conteudo = fs.readFileSync(caminho, "utf-8");

            const produto = JSON.parse(conteudo); // Parse transforma em JSON em objeto e o stringify transforma objeto em JSON

            return produto;

        } catch (err) {

            console.error("Erro ao processar os produtos", err)

        }
    },

    apresentarProdutos: async (objProduto) => { // o parametro objterafas é o objeto que caminha as tarefas
        const produto = await objProduto;

        let qtd = produto.length;

        if(qtd >= 1){
            let status = "";
            
            for(let i=0; i<=qtd - 1; i++){
                status = produto[i].status === 0 ? "Produto sem estoque" : "Em Estoque";

                console.log(`\n ${i + 1}- ${produto[i].nome} | Unidade de Armzenamento: ${produto[i].unidade} | Quantidade: ${produto[i].estoque} | ${status}`)

            }

        }
        else{
            console.log("Nâo há produtos cadastrados!")

        }

    }
}

module.exports = controller;