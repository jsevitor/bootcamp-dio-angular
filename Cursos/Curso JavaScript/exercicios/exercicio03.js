// Exercício 03 - Valor Pago em um Produto

/**
 * Condições de Pagamento:
 * 1. Débito
 * 2. Dinheiro ou PIX
 * 3. Parcelado em 2x
 * 4. Parcelado em mais de 2x
**/

const precoEtiqueta = 580;
const condPagamento = 4;
let valorFinal = 0;

if (condPagamento === 1) {
    valorFinal = precoEtiqueta - (precoEtiqueta * 0.1);
} else if (condPagamento === 2) {
    valorFinal = precoEtiqueta - (precoEtiqueta * 0.15);
} else if (condPagamento === 3) {
    valorFinal = precoEtiqueta;
} else if (condPagamento === 4) {
    valorFinal = precoEtiqueta + (precoEtiqueta * 0.15);
}

console.log('R$ ' + valorFinal.toFixed(2));