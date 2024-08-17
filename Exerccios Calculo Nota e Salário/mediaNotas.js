// Programa para conseguir a média das notas informadas pelo usuário escolhe a matéria e informa a nota.

// readline para interagir com o usuário
const readline = require("readline-sync");

// Informações para o usuário.
console.log("Vamos calcular à média das notas, para verificarmos se passou de ano, escolha a materia abaixo:\n");
console.log("1 - Ciências\n2 - Física\n3 - Geográfia\n4 - História\n5 - Matemática\n6 - Português\n7 - Quimica\n \n");

// Entrada de dados
let disciplina = readline.questionInt("Informe o numero da materia desejada: \n");

// Nome escolha disciplina
if (disciplina == 1) {
    disciplina = "Ciência";
    console.log(`Informe as notas da matéria: ${disciplina}\n`);

}
if (disciplina == 2) {
    disciplina = "Fisica";
    console.log(`Informe as notas da matéria: ${disciplina}\n`);

}
if (disciplina == 3) {
    disciplina = "Geografia";
    console.log(`Informe as notas da matéria: ${disciplina}\n`);

}
if (disciplina == 4) {
    disciplina = "História";
    console.log(`Informe as notas da matéria: ${disciplina}\n`);
}
if (disciplina == 5) {
    disciplina = "Matemática";
    console.log(`Informe as notas da matéria: ${disciplina}\n`);

}
if (disciplina == 6) {
    disciplina = "Português";
    console.log(`Informe as notas da matéria: ${disciplina}\n`);

}
if (disciplina == 7) {
    disciplina = "Quimica";
    console.log(`Informe as notas da matéria: ${disciplina}\n`);

}

// Solicitando o numero de notas
let numNotas = readline.questionInt("Informe a quantidade de notas que possui: \n")

// Lopping para lançamento das notas

let somaNotas = 0
for (let i = 0; i < numNotas; i++) {
    let nota = readline.questionFloat("Informe a nota: \n");
    somaNotas += nota
}

// Calculo da media da notas
media = somaNotas / numNotas

console.log(`Média da matéria ${disciplina} é: ${media}`);

// Mostrando se passou na materia
if (media>=6){
    console.log(`Aprovado na matéria ${disciplina}`);
}
else{
    console.log(`Reprovado na matéria ${disciplina}`);
}