// Instalar readline-sync
// para istalar colocar no console rpm install readline-sync

//importanod a biblioteca.
const readline = require("readline-sync");

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
        result = numOne + numTwo;
        break;
    case "-":
        result = numOne - numTwo;
        break;
    case "*":
        result = numOne * numTwo;
        break;
    case "/":
        result = numOne / numTwo;
        break;
    default:
        console.log("Operação Invalida");
        break;
}

//transforma o valor em rea com apenas duas casas decimais.
result = parseFloat(result.toFixed(2));

// Imressão do resultado.
console.log(`Resultado: ${result}`);