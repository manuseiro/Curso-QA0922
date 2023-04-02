
/*1. Crie um array com 10 elementos e mostre-os na tela usando cada uma das estruturas de repetição: 
while, do-while, for e foreach.*/

/*FOREACH*/
meuArray.forEach(function(elemento) {
    console.log(elemento);
});
/*WHITE*/
let i = 0;
while (i < meuArray.length) {
    console.log(meuArray[i]);
    i++;
}
/*FOR*/
for (let i = 0; i < meuArray.length; i++) {
    console.log(meuArray[i]);
}

/*DO-WHITE*/
let i = 0;
do {
    console.log(meuArray[i]);
    i++;
} while (i < meuArray.length);

/*OBS: A lógica de cada estrutura é bastante semelhante à implementação em PHP, mas a sintaxe é diferente.*/
