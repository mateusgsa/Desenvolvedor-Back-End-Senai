// sistema para classificar modelos de veiculos
//readline
const readline = require("readline-sync");

//Super classe ou classe pai
class Veiculo {
    _marca
    _modelo
    _cor
    _ano
    _combustivel

    constructor(pMarca, pModelo, pCor, pAno, pCombustivel) {
        this._marca = pMarca;
        this._modelo = pModelo;
        this._cor = pCor;
        this._ano = pAno;
        this._combustivel = pCombustivel;
    }
    acelerarVeiculo() {
        let vezes = readline.questionInt('A cada vezes que acelerar o carro aumenta em 10km/h\nQuantas vezes gostaria de acelerar:\n');

        while (vezes <= 0) {
            console.log("Valor não pode ser negativo.");
            vezes = readline.questionInt('A caada vezes que acelerar o carro aumenta em 10km/h.\nQuantes vezes gostaria de acelerar:\n');
        }

        let velocidade = vezes * 10;
        console.log(`Velocidade atual do carro de ${velocidade} km/h`)
    }
}

// classe herdeiro, recebe todas as caracteristicas da super clasee, porém tem uma função difernte
class Carro extends Veiculo {
    _carroceria
    _motor
    _numeroPortas

    constructor(pMarca, pModelo, pCor, pAno, pCombustivel, pCarroceria, pMotor, pNumeroPortas) {
        super(pMarca, pModelo, pCor, pAno, pCombustivel);
        this._carroceria = pCarroceria;
        this._motor = pMotor;
        this._numeroPortas = pNumeroPortas;
    }

    portasAbertaFecha() {

        let porta = readline.question("Sua porta está Aberta(A) ou Fechada(F):\n");

        while (porta != 'A' && porta != 'F') {
            console.log("Utilize letras maiúsculas para escolher a opção 'A'aberta e 'F' Fechada")
            porta = readline.question("Sua porta está Aberta(A) ou Fechada(F):\n");

        }
        if (porta.toUpperCase() === 'A') {
            console.log("Porta Aberta");
        }
        else if (porta.toUpperCase() === 'F') {
            console.log("Porta Fechada");
        }
    }


}

class Motos extends Veiculo {
    _cilindrada

    constructor(pMarca, pModelo, pCor, pAno, pCombustivel, pCilindrada) {
        super(pMarca, pModelo, pCor, pAno, pCombustivel,);
        this._cilindrada = pCilindrada;
    }

    empinarMoto() {
        console.log("-----Vamos Empinar-----")
        let velocidade = readline.questionInt("Qual a velocidade da moto: \n");
        if (velocidade >= 30) {
            console.log("Radical, empinou a moto");
        }
        else {
            console.log("Acelerar mais na próxima.")
        }
    }
}

// coleta de dados do carro.
function informacaoCarro(){
    console.log("Informe os dados do carro");
    let carroMarca = readline.question ("Qual a marca do carro?\n");
    let carroModelo = readline.question ("Qual o modelo do carro?\n");
    let carroCor = readline.question("Qual a cor do carro?\n");
    let carroAno = readline.question("Qual o ano do carro?\n");
    let carroCombustivel = readline.question("Qual o combústivel do carro?\n");
    let carroCarroceria = readline.question("Qual a carroceria do carro?\n");
    let carroMotor = readline.question("Qual o motor do carro?\n");
    let carroNumeroPOrtas = readline.questionInt("Qual a quantidade de portas o carro tem?\n")

let carro = new Carro(carroMarca, carroModelo, carroCor, carroAno, carroCombustivel, carroCarroceria, carroMotor, carroNumeroPOrtas);
console.log(carro);
carro.portasAbertaFecha()
carro.acelerarVeiculo();

}

// coletade dados da moto
function informacaoMoto (){
    console.log("Informe os dados da moto: ");
    let motoMarca = readline.question ("Qual a marca da moto?\n");
    let motoModelo = readline.question ("Qual o modelo da moto?\n");
    let motoCor = readline.question ("Qual a cor da moto?\n");
    let motoAno = readline.questionInt ("Qual o ano da moto?\n")
    let motoCombustivel = readline.question("Qual o combustivel?\n");
    let motoCilindrada = readline.questionInt("Qual a cilindrada?\n");

    let moto = new Motos (motoMarca, motoModelo, motoCor, motoAno, motoCombustivel, motoCilindrada);
    console.log(moto);
    moto.acelerarVeiculo();
    moto.empinarMoto();

}

// meu da inciar o sistema.
function menuPrincipal() {
    console.log("---------------------------------------");
    console.log("-----MENU PARA DESCREVER O VEICULO-----");
    console.log("---------------------------------------");
    console.log("01 - Carro\n02 - Moto\n03 - Sair");
    console.log("---------------------------------------");
    const opcao = readline.questionInt();
    console.log("---------------------------------------");

    switch (opcao) {
        case 1:
            informacaoCarro();
            break;
        case 2:
            informacaoMoto();
            break;
        case 3:
            console.log("----------Programa finalizado----------");
            console.log("---------------------------------------");
            break;
    }
}
menuPrincipal();