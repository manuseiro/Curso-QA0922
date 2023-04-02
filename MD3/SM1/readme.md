## ATIVIDADE 1:  Módulo 3. Programação JavaScript (JS) e teste de unidade. Semana 1 - JavaScript básico 1: Introdução à programação, ao JavaScript e exemplos reais usando comandos

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
```bash
let nt1 = 5;
let nt2 = 6; 
let media;

media = (nt1 + nt2) / 2 ; 

console.log("A nota é: " + media);

if (media >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
```

## ATIVIDADE 2: Módulo 3. Programação JavaScript (JS) e teste de unidade. Semana 2 - JavaScript básico 2: exemplos de JavaScript básico no VSCode
Crie um programa Javascript baseado nas tarefas descritas a seguir:

1. Crie um meuArrayay com 10 elementos e mostre-os na tela usando cada uma das estruturas de repetição: 
while, do-while, for e foreach.
```bash
let meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let index in meuArray) {
    console.log(meuArray[index]);
}
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

```bash
for (let i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
}
```


 3. Crie um meuArrayay com 5 números reais, e para cada elemento utilize funções matemáticas para exibir respectivamente:

a. O quadrado
b. A raiz quadrada
c. Apenas a parte inteira
d. O número meuArrayedondado para baixo
e. O número meuArrayedondado para cima

Arquivo em formato .js com essas respostas

```bash
let numbers = [3.14, 2.718, 1.618, 0.577, 1.234];

numbers.forEach(function(element) {
    console.log(`O quadrado de ${element} é: ${element * element}`);
    console.log(`A raiz quadrada de ${element} é: ${Math.sqrt(element)}`);
    console.log(`Apenas a parte inteira de ${element} é: ${Math.floor(element)}`);
    console.log(`Arredondando para baixo ${element} é: ${Math.floor(element)}`);
    console.log(`Arredondando para cima ${element} é: ${Math.ceil(element)}`);
});
```

# REFERÊNCIA:

 - [Lógica de Programação](https://www.devmedia.com.br/logica-de-programacao-introducao-a-algoritmos-e-pseudocodigo/37918/checklist-de-testes-de-seguran%C3%A7a-para-qas-fef900b798b6)
 - [Configurando o Node](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/development_environment#instalando_o_node)
 - [Introdução a JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction)