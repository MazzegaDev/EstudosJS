const curso = {
    nome: 'JavaScript',
    horas: 25,
    preco: 27
}

console.log(curso);
// console.log(typeof(curso));

// console.log(Object.keys(curso)); // Imprime um array com as chvaes

// console.log(Object.values(curso)); // retorna o valor do atributo

// console.log(Object.entries(curso)); // retorna chave e valor [ [ 'nome', 'JavaScript' ], [ 'horas', 25 ], [ 'preco', 27 ] ]

// Object.entries(curso).forEach(par =>{
//     console.log(`${par[0]}: ${par[1]}`);
// });

// Object.entries(curso).forEach(([chave, valor]) =>{
//     console.log(`${chave}: ${valor}`);
// })

// curso.nome = 'Java';

// console.log(curso);

// Object.defineProperty(curso, 'pub',{
//     enumerable: true, // aparece como chave e valor
//     writable: false, // pode atualizar, no caso não
//     value: '07/12/2019'
// });

// curso.pub = '01/01/2020'; // a configuração writable faz com que o valor desse atributo não seja alterado

// console.log(curso);

// console.log(curso.pub);
// /*
//  se as configurações do atributo forem enumerable false ele não ira aparecer quando imprimimos o objeto curso, porem ele existe, ele so se torna visivel quando imprimimos o atributo em si console.log(curso.pub);
// */

// const outro = {};

// Object.defineProperty(outro, '', {

// });

Object.freeze(curso);

curso.nome = 'Dança da Garrafa'; /*Congela o objeto não deixando que faça alteração de valores */
console.log(curso);

const usuarios = [
    {nome: 'Aline Moraes', empresa: 'Geek University'},
    {nome: 'Sweetie fox', empresa: 'Pornhub'},
    {nome: 'Lorena', empresa: 'Onlyfans'}
]

// console.log(usuarios);

// console.table(usuarios);

console.table(curso);

