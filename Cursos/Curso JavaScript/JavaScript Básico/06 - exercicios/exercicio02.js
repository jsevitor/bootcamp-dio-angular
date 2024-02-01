// class Pessoa {
//     nome;
//     peso;
//     altura;

//     constructor(nome, peso, altura) {
//         this.nome = nome;
//         this.peso = peso;
//         this.altura = altura;
//     }

//     calcularImc() {
//         const imc = (this.peso / Math.pow(this.altura, 2)).toFixed(2);
//         return Number(imc); 
//     }

//     classificarImc() {
//         const imc = this.calcularImc();

//         if (imc < 18.5) {
//             return "Abaixo do peso";
//         } else if (imc >= 18.5 && imc < 25) {
//             return "Peso normal";
//         } else if (imc >= 25 && imc < 30) {
//             return "Acima do peso";
//         } else if (imc >= 30 && imc <= 40) {
//             return "Obesidade";
//         } else {
//             return "Obesidade grave";
//         }
//     }
// }

// const jose = new Pessoa('José', 65, 1.70);
// const renan = new Pessoa('Renan', 63, 1.75);
// const vitor = new Pessoa('Vitor', 85, 1.85);

// console.log(jose);
// console.log(jose.nome + ': ' + jose.calcularImc() + ' - ' + jose.classificarImc());
// console.log(renan.nome + ': ' + renan.calcularImc() + ' - ' + renan.classificarImc());
// console.log(vitor.nome + ': ' + vitor.calcularImc() + ' - ' + vitor.classificarImc());


class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function descreverPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`);
}

const renan = new Pessoa('Renan', 30);
console.log(descreverPessoa(renan));