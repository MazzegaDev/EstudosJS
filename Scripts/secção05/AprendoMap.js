// Utilizamos map para transformações em arrays

var valores = [2, 4, 6, 8, 10];
console.log(valores);

// Map gera um novo array de mesmo tamanho que o original 
var dobro = valores.map(function(valor){
    return valor * 2;
});

// console.log(dobro);

function dobrar(valor){
    return valor * 2;
}

// dobro = valores.map(dobrar)

// Encadeando maps para realizar multiplas transformações

function Somar4(valor){
    return valor + 4;
}

function Dividir5(valor){
    return valor / 5;
}

var resultado = valores.map(dobrar).map(Somar4).map(Dividir5);
console.log(resultado);

/*
    Passo 1 -> dobrar = [4, 8, 12, 16, 20]
    Passo 2 -> Somar4 = [8, 12, 16, 20, 24]
    Passo 3 -> Dividir5 = [1.6, 2.4, 3.2, 4, 4.8]
*/

/*
    map -> gera um novo array de mesmo tamanho com os elementos transformados 
    forEach -> estrutura de repetição que intera elementos de um array sem gerar um novo array
*/
resultado.forEach(function(valores, indice){
    console.log(`${indice} - ${valores}`);
})