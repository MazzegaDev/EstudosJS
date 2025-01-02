// Forma 1:

function somar1(n1,n2){
    return n1 + n2;
}
console.log(somar1(4,4));

// Forma 2:

let ret = function(n1,n2){
    return n1 + n2;
}
console.log(ret(10,20));

// Forma 3:

let RecebeFunc = somar1;
console.log(RecebeFunc(50,50));

// Arrow Function

let Arrow = (n1,n2) =>{
    return n1 + n2;
}
console.log(Arrow(100, 300));

/*
Atenção

caso a função tenha apenas um parametro de entrada e executa apenas uma linha podemos simplificar ainda mais usando arrow function
*/

let dobrar = valor => valor * 2;

console.log(dobrar(3));

//Tradicional
function mesagem(){
    console.log('Evolua seu lado geek');
}
mesagem();

//Arrow simplificada
const msg = () => console.log('Evolua seu lado geek');
msg();

let MariaEduarda = (gst) =>{
    return `Ela é muito ${gst}`;
}

console.log(MariaEduarda('Gostosa'));