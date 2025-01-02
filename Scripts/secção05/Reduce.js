// Reduzir coleções de valores em um unico valor

var precos = [4.66, 3.78, 9.78, 1.34, 5.32];
console.log(precos)
var soma = 0;

for(let i =0; i<precos.length; i++){
    soma = soma + precos[i];
}

// console.log(soma);

soma = 0;

precos.forEach(function(valor){
    return soma += valor; // soma = soma + valor;
});

// console.log(soma)

function somar(anterior, atual){
    return anterior + atual;
}

var ret = precos.reduce(somar);
// console.log(ret);

/*
Como funciona o reduce

Primeira execução 
    - Pegos os primeiros valores (indice 0 e indice 1),soma e retorna este valor

Nas demais execução:
    - Pega o retorno da execução anterior e o proximo valor (indice 2...)

1 = 4.66 + 3.78 -> 8.44
2 = 8.44 + 9.78 -> 18.22
3 = 18.22 + 1.34 -> 19.56
4 = 19.56 + 5.32 -> 24.88

*/

// Exemplo map / reduce

function adicionarTaxa(valor){
    return valor + 5;
}

var ret = precos.map(adicionarTaxa).reduce(somar);
// console.log(ret);

// Exemplo filter/map/reduce

function PrecoMaior4(valor){
    return valor > 4;
}

ret = precos.filter(PrecoMaior4).map(adicionarTaxa).reduce(somar);
console.log(ret);