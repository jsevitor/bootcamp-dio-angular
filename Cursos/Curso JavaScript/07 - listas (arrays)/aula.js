
const alunos = ['João', 'Vitor', 'Marina'];

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);


// Adicionando elementos a lista
alunos.push('Renan');
console.log(alunos[3]);
console.log(alunos);

alunos[4] = 'Vinicius';
console.log(alunos);

// Removendo elementos da lista
// ultimo
alunos.pop();
console.log(alunos);

// primeiro 
alunos.shift();
console.log(alunos);