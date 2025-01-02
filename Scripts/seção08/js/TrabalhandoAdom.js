//Acessando pelo id
// let itexto = document.getElementById('Produto');

// console.log(itexto);

//Acessando pela tag
let spans = document.getElementsByTagName('span'); // Retorna um array de elementos com essa tag

// console.log(spans);

//Acessando por classe

// let element = document.getElementsByClassName('texto'); // Retorna um array com elementos desta classe
// console.log(element);

/*Sempre quando a função estiver no plurral vai ser um array de elementos (getElementsByClassName)*/

// Ler valores
// console.log(spans[0].textContent);
// console.log(spans[1].innerHTML);

// // Alterar Valores
// spans[0].textContent = 'Mazzega';
// spans[1].innerHTML = 'Barchi';

// // console.log(spans[0].textContent);
// // console.log(spans[1].textContent);

// let Spans = document.getElementsByTagName('span')[0]; // acessando apenas o primeiro elemento do array (primeiro que achar)
// console.log(Spans.innerHTML);

// Spans.style.textTransform = 'uppercase';

// let inp = document.querySelector('input'); // Buscando pela tag

// let classe = document.querySelector('.texto'); // Busca pela classe, apenas pega o primeiro elemento dessa classe

// let classes = document.querySelectorAll('.texto'); // Busca pela classe, porem tras todos os elementos desta classe

// console.log(classe)
// console.log(classes);
// console.log(inp);

// let div = document.querySelector('#div1'); // Busca elemento pelo ID
// console.log(div);

// let input = document.querySelector('input[name=Produto]');
// console.log(input);

// let input2 = document.querySelector('input[name=Preco]');
// console.log(input2);

// Exemplo 1 - Eventos direto no JS

// let btn = document.querySelector('.btn-primary');

// btn.onclick = function(){
//     alert('QUERO FUDEEEEEEEEEEEEEEEE');
// }

// Exemplo 2 - Eventos direto no JS

let btn = document.querySelector('.btn-primary');
let inp = document.querySelector('input[name=Produto]');

let inp2 = document.querySelector('input[name=Preco]');

btn.onclick = function(){
    alert(`Temos o texto '${inp.value}', e com o preço de ${inp2.value} `);
}