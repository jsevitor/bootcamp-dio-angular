// Exercicio 03 = Invocar uma função dentro da outra

function escerverMeuNome(nome) {
     return "Meu nome é " + nome;
}

escerverMeuNome('Vitor');
escerverMeuNome('José');

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escerverMeuNome('Vitor') + ', Maior de Idade')
    } else {
        console.log('Menor');
    }
}

verificarIdade(18);