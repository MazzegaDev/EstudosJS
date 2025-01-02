let Clientes = [
    {nome:'Fernanda', idade: 32, empresa: 'Google'},
    {nome:'Gui', idade: 19, empresa: 'apple'},
    {nome:'Edu', idade: 19, empresa: 'Google'}
];

function Filtrar(array){
    return array.empresa == 'Google'
}

let filtrados = Clientes.filter(Filtrar);

console.log(filtrados);