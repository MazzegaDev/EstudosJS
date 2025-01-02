let idade = 19;

const nome = 'Guilherme';

function soma(idade){
    return idade + 3;
}

console.log(nome + ' tem ' + idade + ' anos ');

// Template Strings (Prefira sempre utilizar template strings)
console.log(`${nome} tem ${soma(idade)}  anos`);