let Clientes = [
    {nome:'Fernanda', idade: 32, empresa: 'Google'},
    {nome:'Gui', idade: 19, empresa: 'apple'},
    {nome:'Edu', idade: 19, empresa: 'google'}
];

let ArrIdades = Clientes.map(function(Clientes){
   return Clientes.idade
})

console.log(ArrIdades);
