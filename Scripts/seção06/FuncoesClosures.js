// let variavel = 'global'; // Pode ser acessada de forma global

// function imprimir(){
//     console.log(variavel);
// }

// /*O Closure nada mais é que o escopo da função, ou seja as linhas de codigo que ficam entre {codigo} chaves */

// function imprimir2(){
//     let variavel = 'local'; // Apenas pode ser acessada no bloco da função
//     imprimir();
//     console.log(variavel) // => 'local', variaveis locais tem pressedencia a variaveis globais
// }

// imprimir2();

// Novo exemplo
let variavel = 'global';

function externa(){
    let variavel = 'local';

    function interna(){
        return variavel;
    }

    return interna;
}

let executa = externa();

console.log(executa()); // => 'local'

/* 
 Estamos estudando Closures (contexto lexico de uma função)

 Linguagem de Programação chamada Clojure
*/