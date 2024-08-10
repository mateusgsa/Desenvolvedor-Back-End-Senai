const readline = require("readline-sync");

const somar = require("./somar");
const subtrair = require("./subtrair");
const multiplicar = require("./multiplicar");
const dividir = require("./dividir");

let continuar;

do{
    //recebendo as entrada dos dados pelo usuário.
let numOne = readline.questionFloat("Digite um número 1: \n");
let numTwo = readline.questionFloat("Digite um número 2: \n");

let operacao = readline.question("Digite uma das seguintes operações: + para somar, - para subtrair, * para multiplicar  e / para dividir: \n");

//Looping While (Equanto) ara escolher a operação correta, caso o usuário não colocar a operação correta continuaram pedido o modelo correto.
while(operacao!=="+" && operacao!=="-" && operacao!=="*" && operacao!=="/"){
    operacao = readline.question(" OPERAÇÃO INVALIDA. \n Digite uma das seguintes operações: + para somar, - para subtrair, * para multiplicar  e / para dividir: \n");
}

//declaração de variavel para receber usuário.
let result = 0;

//Switch case para fazer a operação escolhido.
switch(operacao){
    case "+":
        result = somar (numOne, numTwo);
        break;
    case "-":
        result = subtrair (numOne, numTwo);
        break;
    case "*":
        result = multiplicar(numOne, numTwo);
        break;
    case "/":
        result = dividir(numOne, numTwo);
        break;
    default:
        console.log("Operação Invalida");
        break;
}

console.log(`Resultado: ${result}`);

let respotaUser = readline.question ("Para continuar digite algo");

if(respotaUser==""){
    continuar=false;
}
else
    continuar=true;

}while(continuar)
