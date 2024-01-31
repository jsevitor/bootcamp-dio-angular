/* OBJETOS: coleção dinamica de chave e valor */

/*
const vitor = {
    nome: 'Vitor Oliveira',
    idade: 28,
};

// Imprimir
console.log(vitor.nome);
console.log(vitor.idade);
console.log(vitor);

// Incrementar
vitor.altura = 1.85;
console.log(vitor);

// Deletar
delete vitor.nome;
c
*/


const pessoa = {
    nome: 'Vitor Oliveira',
    idade: 28,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

pessoa.descrever();

// Acesso dinamico
console.log(pessoa['nome'])