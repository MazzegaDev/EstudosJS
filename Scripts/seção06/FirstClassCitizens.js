function somar(num1, num2){
    return num1 + num2;
}

// console.log(somar(5,5));
// OU

// console.log(ret);

// Exemplo; 

let ret = somar(10,10);

let executar = somar;
// console.log(executar(20,20));// Funções em js podem ser utilizadas como tipo de dado, cidadões de primeira classe

function subtrair(num1, num2){
    return num1 - num2;
}

function fazAlgo(num1, num2, banana){
    return banana(num1, num2);
}

// console.log(fazAlgo(50,50,somar));// Não se utiliza parantesses pois apenas estamos passando esta função como parametro, e não a executando

// console.log(fazAlgo(500,100,subtrair));

function outra(z){
    return z;
}

const retorno =  outra(somar);
// console.log(retorno(44,44));
/*
Cidãos de primeira classe, First Class Citizens, Higher Order Function
*/

function mensagem(){
    // console.log('Gui')
}

mensagem();

let valores = [1, 3.4, true, somar];

for(i=0; i<valores.length; i++){
    console.log(typeof(valores[i]));
}
