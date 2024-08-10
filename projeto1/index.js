// var aceita as variaveis int, float, string, etc.
// let pode usar ele como maneira privada, vai usar apenas uma função

var nome = "Mateus";
// variavel para armazenar o nome do usuário.
let sobrenome = "Sá";
// variavel para armazenar o sobrenome.
const nomeCompleto = nome + " " + sobrenome;
/*
const que concatena o noem do usuário.
*/

console.log("Olá seu nome é " + nomeCompleto);
// Impressão do nome do usuário

nome = "Yuri";
sobrenome = "Feio"

console.log(`Olá, você é  o ${nome} e é ${sobrenome}`);
// Forma de concatenação, em uma unica linha para impressão.

let numeroUm = 7;
let numeroDois = 9;

function somar(numeroUm, numeroDois) {
    return numeroUm + numeroDois;
}
// função para somar dois numeros.

console.log(somar(numeroUm, numeroDois));