/* Objetos */

// Objeto sem previsibilidade
let pessoa: object = {
    name: "joao",
    cidade: "itba",
    idade: 30
}

// Objeto com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 89.9,
    unidades: 5,
}