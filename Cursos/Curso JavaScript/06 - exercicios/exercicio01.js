// Exercício 01 - Criando a Classe Carro

class Carro {
    marca;
    cor;
    gastoMedComb;

    constructor(marca, cor, gastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedComb = gastoPorKm;
    }

    calcularGastoPercurso(distancia, precoMedComb) {
        let valorGasto = distancia * this.gastoMedComb * precoMedComb;
        return ('R$ ' + valorGasto.toFixed(2));
    }
}

const uno = new Carro('Fiat', 'Verde', 1/12);
const palio = new Carro('Fiat', 'Preto', 1/10);
const classic = new Carro('Chevrolet', 'Branco', 1/8);

// console.log(uno);
console.log(uno.calcularGastoPercurso(140, 5.39));
console.log(palio.calcularGastoPercurso(140, 5.39));
console.log(classic.calcularGastoPercurso(140, 5.39));