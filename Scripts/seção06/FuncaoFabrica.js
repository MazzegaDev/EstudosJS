/*
Função Fabrica - Function Factory
*/

function fabricarCurso(n, p){
    const desconto = 0.90;
    return{
        nome: n,
        preco: (p * 0.90).toFixed(2)
    }
}

// arrow

// let FabricaCurso = (n, p) =>{codigo}

// Anonima

// let Fabrica = function(n, p){}

console.log(fabricarCurso('Js', 27.99));
console.log(fabricarCurso('APIs Django', 37.99));

let cursos = []

for(let i = 0; i < 5; i++){
    cursos.push(fabricarCurso(`Curso: ${i + 1}`, `${19.99 + i * 3}`));
}

console.log(cursos);