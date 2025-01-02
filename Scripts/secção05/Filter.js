var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];  
console.log(numeros)

function filtrarPares(n){
    return n % 2 === 0;
}

// console.log(filtrarPares(3)) // false
// console.log(filtrarPares(8)) // true



function filtrarImpares(n){
    return n % 2 != 0;
}

function MultiploCinco(n){
    return n % 5 === 0;
}

// Usando filter

// Gera um novo array filtrado
var ret = numeros.filter(filtrarPares);
// console.log(ret);

ret = numeros.filter(MultiploCinco);
// console.log(ret);

var alunos = [
    {nome: 'Pedro', nota: 8.5},
    {nome: 'Maria', nota: 10},
    {nome: 'Fernanda', nota: 9.2},
    {nome: 'Ricardo', nota: 7.3}
];

console.log(alunos);

function notasMaioires8(alunos){
    return alunos.nota > 8;
}

var filtrados = alunos.filter(notasMaioires8);
console.log(filtrados);
// Filter gera um array de tamanho diferente do array original dependendo do filtro aplicado, map gera um novo array do mesmo tamanho que o orignal não importa oque aconteça