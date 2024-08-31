
const readline = require("readline-sync");

// classe do objeto
class Pessoa{
    nome;
    idade;
    altura;
    peso;

    constructor(pNome, pIdade, pAltura, pPeso){ // parametros
        this.nome = pNome;
        this.idade = pIdade;
        this.altura = pAltura;
        this.peso = pPeso;
    }

    //Verificação do arquivo.
    calculoImc(){
        let imc = this.peso / (this.altura * this.altura);
        return imc;
}
}

// recebendo dados do usuário
let nomePessoa = readline.question("Qual seu nome? \n");
let idadePessoa = readline.questionInt("Qual sua idade? \n");
let alturaPessoa = readline.questionFloat("Qual sua altura? \n");
let pesoPessoa = readline.questionFloat("Qual seu peso? \n");

// atribuido os dados ao objeto
let pessoa = new Pessoa (nomePessoa, idadePessoa, alturaPessoa, pesoPessoa);
const imc = pessoa.calculoImc();

//Imprimindo as informações coletadas
console.log(`O nome do usuário: ${pessoa.nome} Idade: ${pessoa.idade} Altura ${pessoa.altura} IMC: ${imc.toFixed(2)}`);