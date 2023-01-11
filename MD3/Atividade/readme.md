## ATIVIDADE 2:
Crie um programa Javascript baseado nas tarefas descritas a seguir:

1. Crie um array com 10 elementos e mostre-os na tela usando cada uma das estruturas de repetição: 
while, do-while, for e foreach.
```bash
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

```bash
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

```bash

```