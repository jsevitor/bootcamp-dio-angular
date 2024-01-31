/* FAÇA UM PROGRAMA PARA CALCULAR O VALOR DE UMA VIAGEM 

Você terá 3 variáveis, sendo elas:
1. Preço médio do combustével;
2. Gasto médio do combustível do carro por KM;
3. Distância em KM viagem.

*/

const precoMedComb = 5.39;
const gastoMedComb = 12;
let distancia = 160;

let valorViagem = (distancia / gastoMedComb) * precoMedComb;

console.log("R$ " + valorViagem.toFixed(2));