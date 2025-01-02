function somar1(){
    let soma = 0;
    for(let i =0; i<arguments.length; i++){
        soma = soma + arguments[i];
    }
    return soma;
}


// console.log(somar1());
// console.log(somar1(2));
// console.log(somar1(3,4,12));
// console.log(somar1(10,34,12,34));

function imprimirValores(n1,n2){
    for(let i in arguments){
        console.log(arguments[i]);
    }
}
/*Atraves do arguments recuperamos os valores que não tem seu parametro respectivamnete declarados */
// imprimirValores();
// imprimirValores(2,3,4,2,4,1) 

// Gambiarra 1:

function Gambiarra(n1,n2,n3){
    n1 = n1 || 1;
    n2 = n2 || 2;
    n3 = n3 || 3;

    return n1 + n2 + n3
}
// console.log(Gambiarra()); // = 6
// console.log(Gambiarra(2,2,3)); // = 7
// console.log(Gambiarra(10)); // = 15
// console.log(Gambiarra(20,30)); //= 53

// console.log(Gambiarra(0,0,0)); // era pra ser 6, mas ele retorna 6, pois no JS 0 representa um valor falso

// Gambiarra 2:
function Gambiarra2(n1,n2,n3){
    n1 = isNaN(n1) ? 1: n1; // se não for um numero(isNaN = true) recebe 1, se for um numero(isNaN = false) recebe o valor que veio como parametro para ele
    n2 = isNaN(n2) ? 2: n2;
    n3 = isNaN(n3) ? 3: n3;

    return n1 + n2 + n3;
}

// console.log(Gambiarra2()); // = 6
// console.log(Gambiarra2(2,2,3)); // = 7
// console.log(Gambiarra2(10)); // = 15
// console.log(Gambiarra2(20,30)); // = 53
// console.log(Gambiarra2(0,0,0)); // = 0

// Forma atual e recomendada

function FormaAtual(n1 = 1, n2 = 2, n3 = 3){
    return n1 + n2 + n3;
}
// console.log(FormaAtual()); // = 6
// console.log(FormaAtual(2,2,3)); // = 7
// console.log(FormaAtual(10)); // = 15
// console.log(FormaAtual(20,30)); // = 53
// console.log(FormaAtual(0,0,0)); // = 0

// console.log(FormaAtual('a', 'b', 'c')); // = 'abc'
// console.log(FormaAtual(true, false, 'c'));// false é ignorado = '1c'
// console.log(FormaAtual(2, true, false)); // true é considerado = 1, e false é considerado = 0
/*
Em JavaScript 1 é considerado true, e 0 é considerado false
*/

// Como resolver esse comportamento estranho

function FormaSegura(n1 = 1,n2 = 2,n3 = 3){
    if(Number.isSafeInteger(n1) && Number.isSafeInteger(n2) && Number.isSafeInteger(n3)){
        return n1 + n2 + n3;
    }else{
        return 'Não foi possivel somar.';
    }
}

console.log(FormaSegura()); // = 6
console.log(FormaSegura(2,2,3)); // = 7
console.log(FormaSegura(10)); // = 15
console.log(FormaSegura(20,30)); // = 53
console.log(FormaSegura(0,0,0)); // = 0

console.log(FormaSegura('a', 'b', 'c')); // erro de somar
console.log(FormaSegura(true, false, 'c'));// erro de somar
console.log(FormaSegura(2, true, false)); // erro de somar