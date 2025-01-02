// var numero = 42;
// // console.log(numero);

// numero = numero + 18;
// // console.log(numero);

// // Let !!dar prioridade
// let num2 = 42;
// // console.log(num2);

// num2 = num2 + 18;
// // console.log(num2);

// let nome = 'Geek'
// // console.log(nome);

// nome = 'University';
// // console.log(nome);

// for(let i =0; i<5; i++){
//     let valor = i * 3;
//     console.log(valor);
// }
// console.log(valor); // ReferenceError, pois foi declarada como let escopo local {for}

// console.log(i);

// let numero = 80;
// console.log(numero);

// SyntaxErro, com let não podemos redeclarar uma variavel ja existente

// let numero = 32;
// console.log(numero)

// Const

const taxa = 1.44;
// console.log(taxa);

let res = 45 * taxa;
// console.log(res);

// taxa = 5;// TypeError, não podemos mudar o valor de uma constante!!
// console.log(taxa);

// Constante vs Mutação
const curso = {nome: 'Programação em JavaScript'};
// console.log(curso.nome);

// Não posso alterer o valor de uma constante
// curso = 43; // erro

// Podemos realizar mutação em dados contidos na constante
curso.nome = 'Programação em python' // Mutação
// console.log(curso);

/*
Dicas de como declarar variaveis em JavaScript:

- A variavel poderá ser alterar? (vai variar), se sim, use let!
- A variavel será constante (não vai variar?), se sim, use const!
*/

const valor = 5;

for(let i = 0; i< valor; i++){
    console.log(valor - i);
}
