/*
Crie um array com 5 números reais, e para cada elemento utilize funções matemáticas para exibir respectivamente:

a. O quadrado
b. A raiz quadrada
c. Apenas a parte inteira
d. O número arredondado para baixo
e. O número arredondado para cima

Resultado:

Arquivo em formato .js com essas respostas
*/
let NumerosReais = [3.14, 2.718, 1.618, 0.577, 1.234];

NumerosReais.forEach(function(element) {
	/*Ajustado, incluido a função Math.pow*/
    console.log(`O quadrado de ${element} é: ${Math.pow(element, 2)}`);
    console.log(`A raiz quadrada de ${element} é: ${Math.sqrt(element)}`);
	/*Ajustado, trocado para função Math.trunc*/
    console.log(`Apenas a parte inteira de ${element} é: ${Math.trunc(element)}`); 
    console.log(`Arredondando para baixo ${element} é: ${Math.floor(element)}`);
    console.log(`Arredondando para cima ${element} é: ${Math.ceil(element)}`);
});
