/* FAÇA UM PROGRAMA PARA CALCULAR O VALOR DE UMA VIAGEM 

Você terá 5 variáveis, sendo elas:
    1. Preço do etanol;
    2. Preço da gasolina;
    3. O tipo de combustível que está no carro;
    4. Gasto médio do combustível do carro por KM;
    5. Distância em KM viagem.

Imprima no console o valor que será gasto para realizar a viagem

*/

const precoEtanol = 3.19;
const precoGasolina = 5.39;
const tipoCombustivel = 'etanol';
const gastoMedComb = 10;
const distancia = 350;
let valorViagem = 0;

if (tipoCombustivel === 'gasolina') {
    valorViagem = (distancia / gastoMedComb) * precoGasolina;
} else {
    valorViagem = (distancia / gastoMedComb) * precoEtanol;
}

console.log('R$ ' + valorViagem.toFixed(2));