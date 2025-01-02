// destructuring com array
const numeros = [1, 3, 5, 7];

const [n1, n2, n3, n4] = numeros;

// console.log(n1, n2, n3, n4);

// Podemos descartar valores

const [num1, ,num3, num4] = numeros;
// console.log(n1,n3,n4)

// Podemos colocar um valor default que será utilizado caso não haja no container

const [nu1,nu2, nu3, nu4 = 34, nu5 = 99] = numeros;

// console.log(nu1,nu2,nu3,nu4,nu5);

// Destruturing com objeto
const produto = {
    nome: 'PS4',
    preco: 1678.44
};

// const {nome, preco} = produto;

// console.log(nome, preco);

// console.log(`${nome} custa ${preco}`)

/*A chave deve ter o mesmo nome que esta no objeto */
const {nome} = produto;

console.log(nome);