let numeros = [1,2,3,4,5,6,];

let dobrar = (valor) =>{
    return valor * 2;
}

let result = numeros.map(dobrar);
console.log(numeros);
console.log(result);

// Funções anonimas

let result2 = numeros.map(function(valor){
    return valor * 2;
});

console.log(result2);

console.log(dobrar(10));

const anonima = function(valor){
    return valor * 5;
}

console.log(anonima(30));

function somar(v1, v2){
    return v1 + v2;
}

let mostrar = function(n1,n2, calculo = somar){
    console.log(calculo(n1,n2));
}

mostrar(5, 5);
mostrar(3,9, somar);
mostrar(3,4,function(n1,n2){
    return n1 + n2;
})

mostrar(3, 6,(v1, v2) => v1 * v2);