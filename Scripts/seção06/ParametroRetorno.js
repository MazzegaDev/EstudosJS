function CalcIdade1(AnoNasc){
    const data = new Date(); // gera a data atual

    const idade = data.getFullYear() - AnoNasc;

    return idade;
}

function CalcIdade2(AnoNasc){
    const data = new Date();

    const idade = data.getFullYear() - AnoNasc;

    console.log(idade);
}
let ret = CalcIdade1(2005);
// console.log(ret);

// CalcIdade2(2003)

// const data = new Date();
// console.log(`Hoje é ${data}`);

// console.log(`Ano: ${data.getFullYear()}`);

// console.log(`Mês: ${data.getMonth() + 1}`); // Para JS os meses começam em 0, então adicionamos o +1 para concertar 

function somar(n1,n2){
    return n1 + n2;
}

console.log(somar(3,3)); // = 6
console.log(somar(3)); // = NaN
console.log(somar(3,4,5)); // = 7, como não tem parametro para o 5 ele é descartado
console.log(somar(3,5,10,23,34)); // = 8, como não tem parametro para os demais numeros eles são descartados