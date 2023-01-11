--- Aqui estão algumas instruções: 

- Primeiramente, precisamos instalar NodeJs, seguindo as instruções encontradas no material;
- Depois; instale o Npm no seu computador;
- Com as instalações já feitas, pedimos que você crie um algoritmo lógico para uma situação descrita.

Crie um algoritmo para efetuar a leitura de duas notas para um determinado aluno. Realize o cálculo da média aritmética, exiba a nota obtida na tela e verifique se a nota é maior ou menor que 6. Se for maior, exiba o texto “Aprovado”, se for menor, exiba “Reprovado”.

Para envio da atividade, pedimos que você crie um documento (PDF ou Google Doc) com os seguintes elementos:

- Print screen do terminal mostrando:
```bash
node -v
npm -v
```
Texto do algoritmo:
```bash
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
```