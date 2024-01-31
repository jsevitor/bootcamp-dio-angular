// Exercício 01 - Média de Notas

const nota1 = 9;
const nota2 = 8;
const nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(2));

if (media < 5) {
    console.log("Reprovação!");
} else if (media > 7) {
    console.log("Passou de semestre!");
} else {
    console.log("Recuperação!");
}