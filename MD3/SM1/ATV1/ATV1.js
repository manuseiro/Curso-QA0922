// Lê a primeira nota
var nota1 = parseFloat(prompt("Digite a primeira nota:"));

// Lê a segunda nota
var nota2 = parseFloat(prompt("Digite a segunda nota:"));

// Calcula a média aritmética
var media = (nota1 + nota2) / 2;

// Exibe a nota obtida
console.log("A nota obtida é: " + media);

// Verifica se a nota é maior ou menor que 6
if (media >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}