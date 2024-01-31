// Exercício 03 - Valor Pago em um Produto

/**
 * Condições de Pagamento:
 * 1. Débito
 * 2. Dinheiro ou PIX
 * 3. Parcelado em 2x
 * 4. Parcelado em mais de 2x
**/

// function aplicarDesconto(valor, desconto) {
//     return (valor - (valor * (desconto/100)));
// }

// function aplicarJuros(valor, juros) {
//     return (valor + (valor * (juros/100)));
// }



// const precoEtiqueta = 100;
// const condPagamento = 4;
// let valorFinal = 0;

// if (condPagamento === 1) {
//     valorFinal = aplicarDesconto(precoEtiqueta, 10);
// } else if (condPagamento === 2) {
//     valorFinal = aplicarDesconto(precoEtiqueta, 15);
// } else if (condPagamento === 3) {
//     valorFinal = precoEtiqueta;
// } else if (condPagamento === 4) {
//     valorFinal = aplicarJuros(precoEtiqueta, 10);
// }

// console.log('R$ ' + valorFinal.toFixed(2));

function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
}

console.log(calcularMedia(5, 5));