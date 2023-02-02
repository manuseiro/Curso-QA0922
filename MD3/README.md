# Curso Analista de teste de software - (QA0922) - MODULO 3

### MODULO 3. Programação JavaScript (JS) e teste de unidade
Conhecimento em lógica de programação é um requisito básico para quem quer evoluir na carreira de teste de software. A linguagem JavaScript é utilizada por diversas aplicações e tem essa fama por ser versátil na construção de aplicações web ou mobile, através de diferentes frameworks.

### ATIVIDADE 1:  

Aqui estão algumas instruções: 

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
```javascript
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

## ATIVIDADE 2: 
Crie um programa Javascript baseado nas tarefas descritas a seguir:

1. Crie um array com 10 elementos e mostre-os na tela usando cada uma das estruturas de repetição: 
while, do-while, for e foreach.
```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Estrutura de repetição while
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// Estrutura de repetição do-while
i = 0;
do {
    console.log(arr[i]);
    i++;
} while (i < arr.length);

// Estrutura de repetição for
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Estrutura de repetição forEach
arr.forEach(function(element) {
    console.log(element);
});
```
2. Faça um algoritmo para exibir a tabuada de 2. O resultado na tela deve ser algo parecido com isso:

resultado:
// Resultado esperado
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
}
```


 3. Crie um array com 5 números reais, e para cada elemento utilize funções matemáticas para exibir respectivamente:

a. O quadrado
b. A raiz quadrada
c. Apenas a parte inteira
d. O número arredondado para baixo
e. O número arredondado para cima

Arquivo em formato .js com essas respostas

```javascript
let numbers = [3.14, 2.718, 1.618, 0.577, 1.234];

numbers.forEach(function(element) {
    console.log(`O quadrado de ${element} é: ${element * element}`);
    console.log(`A raiz quadrada de ${element} é: ${Math.sqrt(element)}`);
    console.log(`Apenas a parte inteira de ${element} é: ${Math.floor(element)}`);
    console.log(`Arredondando para baixo ${element} é: ${Math.floor(element)}`);
    console.log(`Arredondando para cima ${element} é: ${Math.ceil(element)}`);
});
```
## ATIVIDADE 3: 

Vamos praticar um pouco mais?

Assista ao vídeo disponibilizado pelo prof. Rodrigo e tente reproduzir os comandos apresentados.

Aproveite a aula ao vivo para fazer perguntas e praticar um pouco mais!

# REFERÊNCIA:

 - [Lógica de Programação](https://www.devmedia.com.br/logica-de-programacao-introducao-a-algoritmos-e-pseudocodigo/37918/checklist-de-testes-de-seguran%C3%A7a-para-qas-fef900b798b6)
 - [Configurando o Node](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/development_environment#instalando_o_node)
 - [Introdução a JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction)
 - [Guia JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction)
 - [10 Dicas para se Tornar Ninja em JavaScript](https://medium.com/womakerscode/10-dicas-para-se-tornar-ninja-em-javascript-31a963ad17a1)
 - [JavaScript para quem sabe nada de JavaScript](https://medium.com/reprogramabr/javascript-pra-quem-sabe-nada-de-javascript-16c0d57a8960)
 - [Como o Javascript funciona: entendendo as funções e suas formas de uso](https://medium.com/reactbrasil/como-o-javascript-funciona-entendendo-as-fun%C3%A7%C3%B5es-e-suas-formas-de-uso-eb387c7fa138)
