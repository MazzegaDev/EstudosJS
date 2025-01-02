/*
 JSON - JavaScript Object Notation
*/

const curso = {
    nome: 'JS',
    professor: 'geek',
    horas: 27,
    preco(){
        return this.horas * 0.67
    }
}

// console.log(curso); // objeto JS
// console.log(typeof(curso));
// // console.log(curso.preco());

// // Converter objetos JavaScript para JSON
// const json = JSON.stringify(curso);
// console.log(json); // Objeto JSON, diferenças mais notaveis, As chaves ficam com aspas duplas "" e os valores tambem, o tipo se torna string, não tem mais a função andar e texto não possuem funções
// console.log(typeof(json));

// // Converter JSON para objeto JavaScript
// const obj = JSON.parse(json);
// console.log(obj);
// console.log(typeof(obj));

// Jeito errado

const jsonErrado = "{'nome': 'JS', 'Preco': 27.99}"
console.log(jsonErrado);
console.log(typeof(jsonErrado));

// const novoObj = JSON.parse(jsonErrado);
// console.log(novoObj);
// console.log(typeof(novoObj));

// Jeito certo

/*Se usa aspas duplas "" dentro usar aspas simples '' fora, se usa aspas simples '' dentro, usa aspas duplas "" fora  */

const jsonCerto = '{"nome": "JS", "Preco": 27.99}'
console.log(jsonCerto);
console.log(typeof(jsonCerto));

const novoObj2 = JSON.parse(jsonCerto);
console.log(novoObj2);
console.log(typeof(novoObj2));
