// Sistema para cadastrar produtos

//Bibliotecas
const readline = require("readline-sync");
const fs = require("fs");

const caminhoDoArquivo = "./listaProdutos.json"; // Caminho da lista de produtos

const cadastrarProduto = require("./cadastrarProduto.js");
const visualizarProduto = require("./visualizarProduto.js");
const atualizarEstoque = require("./atualizarEstoque.js");
const deletarProduto = require("./deletarProduto.js");

const criarArquivoSeNaoExiste = async (caminho) => {// caminho é um parametro que recebera valor
    if (!fs.existsSync(caminho)) {// conferir se o arquivo existe
        try {

            fs.writeFileSync(caminho, "[]")

        } catch (err) {

            console.error("Erro ao criar o arquivo.", err);

        }
    }
}

const exibirMenuDeProdutos = async () => {
    console.log("-------------------------------------------");
    console.log("MENU DE INTERAÇÃO DO ESTOQUE")
    console.log("-------------------------------------------");
    console.log("1 - Cadastrar Produto:\n 2 - Visualizar Produtos:\n 3 - Atualizar Estoque:\n 4 - Deletar Produto\n 5 - Sair do programa \n\n Escolha uma opção desejada:")
    console.log("-------------------------------------------");
    const opcao = readline.questionInt();
    console.log("-------------------------------------------");

    switch (opcao) {
        case 1:
            console.log("-------------------------------------------");
            console.log("Cadastre o produto");
            console.log("-------------------------------------------");
            await cadastrarProduto(caminhoDoArquivo, visualizarProduto.objProdutos(caminhoDoArquivo));
            break;
        case 2:
            console.log("-------------------------------------------");
            console.log("Produtos Cadastrados");
            console.log("-------------------------------------------");
            await visualizarProduto.apresentarProdutos(visualizarProduto.objProdutos(caminhoDoArquivo));
            break;
        case 3:
            console.log("-------------------------------------------");
            console.log("Atulizar produtos em estoque");
            console.log("-------------------------------------------");
            await atualizarEstoque(caminhoDoArquivo);
            break;
        case 4:
            console.log("-------------------------------------------");
            console.log("Deleta produtos do estoque");
            console.log("-------------------------------------------");
            await deletarProduto(caminhoDoArquivo);
            break;
        case 5:
            return false;
        default:
            console.log("Opção inválida");
    }
    return true;
}

const executarMenuProdutos = async () =>{
    let continuar = true;
    while(continuar){
        continuar = await exibirMenuDeProdutos();
    }
}

const main = async () =>{
    await criarArquivoSeNaoExiste(caminhoDoArquivo);
    await executarMenuProdutos();
 }

 main();