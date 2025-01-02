var curso = [
    'Programação para leigos',
    'Algoritmos e logico de programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de dados',
    'Programação web com django e framework',
    'Programação em JavaScript',
];

// console.log(curso);
// console.log(curso.length);

// definir uma função 

function imprimir(curso, indice, array){// a cada indice ele tambem imprime o array completo com o parametro array
    console.log(indice + ' - ' + curso);
    console.log(array);
}

// Para cada
//curso.forEach(imprimir);// Imprime os indices e seus conteudos

// Utilização de uma função anonima (lambda/callback) e template string
curso.forEach(function(curso, indice){
    //console.log(`${indice} - ${curso}`);
});

for(var i=0; i<curso.length; i++){
    console.log(`${i} - ${curso[i]}`);
}