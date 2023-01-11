
/*1. Crie um array com 10 elementos e mostre-os na tela usando cada uma das estruturas de repetição: 
while, do-while, for e foreach.*/
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
