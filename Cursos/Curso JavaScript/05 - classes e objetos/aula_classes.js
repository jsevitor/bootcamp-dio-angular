/**
 * CLASSE: uma definição do que deve ser um objeto. Ex: carro
 * INSTÂNCIA: uma ocorrência de um objeto. Ex: carro branco 2009
 *
*/

class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2024 - idade;
    }

    descrver() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}

// const vitor = new Pessoa();
// vitor.nome = 'Vitor Oliveira';
// vitor.idade = 28;

// const renan = new Pessoa();
// renan.nome = 'Renan J Paula';
// renan.idade = 30;

const vitor = new Pessoa('Vitor', 28);
const renan = new Pessoa('Renan', 30);

// vitor.descrver();
// renan.descrver();

// console.log(vitor);
// console.log(renan);

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p2. idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

compararPessoas(vitor, renan);