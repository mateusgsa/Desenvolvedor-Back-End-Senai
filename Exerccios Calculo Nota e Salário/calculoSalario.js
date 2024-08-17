//Programa para calculo de salário do funcionário.

// readline para interagir com o usuário
const readline = require("readline-sync");


// Função para calcular desconto do INSS no salario
function calcInss(salarioBruto){
    let descontoInss = 0;

    if (salarioBruto <= 1412){
        descontoInss = salarioBruto * 0.075;
    }
    else if (salarioBruto <= 2666.68){
        descontoInss = salarioBruto * 0.09 - 21.18;
    }
    else if (salarioBruto <= 4000.03){
        descontoInss = salarioBruto * 0.12 - 101.18;
    }
    else if (salarioBruto <= 7786.02){
        descontoInss = salarioBruto * 0.12 - 181.18;
    }

    return descontoInss
}

// Função para calcular imposto de renda
function calcIr(salarioBruto){
    let descontoIr = 0;

    if (salarioBruto <= 2112){
        descontoIr = 0;
    }
    else if(salarioBruto <= 2826,65){
        descontoIr = salarioBruto * 0.075 - 158.40;
    }
    else if(salarioBruto <= 3751.05){
        descontoIr = salarioBruto * 0.15 - 370.40;
    }
    else if(salarioBruto <= 4664.68){
        descontoIr = salarioBruto * 0.225 - 651.73;
    }
    else if(salarioBruto >= 4664.69){
        descontoIr = salarioBruto * 0.275 - 884.96;
    }
    return descontoIr
}

function calcularLiquido (salarioBruto){
    const descontoInss = calcInss (salarioBruto);
    const salarioBase = salarioBruto - descontoInss;
    const descontoIr = calcIr(salarioBase);
    const salarioLiquido = salarioBase - descontoIr;

    return {
        descontoInss,
        salarioBase,
        salarioBruto,
        salarioLiquido,
        descontoIr,
    }
}

const salarioBruto = readline.questionFloat("Informe o Salario Bruto: \n");

if (isNaN(salarioBruto) || salarioBruto <= 0){
    console.log("Valor inválido do salario bruto")
}
else {
    const resutado = calcularLiquido(salarioBruto);
    console.log(`Salario Bruto: R$ ${resutado.salarioBruto.toFixed(2)}`);
    console.log(`Desconto INSS: R$ ${resutado.descontoInss.toFixed(2)}`);
    console.log(`Salario Base: R$ ${resutado.salarioBase.toFixed(2)}`);
    console.log(`Descoto Imposto de Renda: R$ ${resutado.descontoIr.toFixed(2)}`);
    console.log(`Salario Liquido: R$ ${resutado.salarioLiquido.toFixed(2)}`);
}