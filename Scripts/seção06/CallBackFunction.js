const curso = [
    'Python',
    'C',
    'JavaScript',
    'Java'
];

function exibir(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
}

// curso.forEach(exibir); // Aqui está o callback

// // Usando lambda
// curso.forEach(function(curso, indice){
//     console.log(`${indice + 1} - ${curso}`);
// });

// //Usando arrow

// curso.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`));

const precos = [23.55, 78.23, 899.43, 12.34, 123.42, 999.10];

menores = [];

// Forma 1
menores = precos.filter(function(precos){
    return precos < 50;
});

console.log(menores);

// Forma 2
menores = precos.filter(precos => precos < 50);

console.log(menores);