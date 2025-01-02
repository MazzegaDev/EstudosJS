let a = document.querySelector('.link');

// console.log(a.innerText);

// Imprimir pai de um elemento
// console.log(a.parentNode);

// console.log(a.parentNode.parentNode); => a.parentNode = body, .parentNode = html

// console.log(a.parentNode.parentNode.parentNode) // document

// console.log(a.parentNode.parentNode.parentNode.parentNode) // null, document é a ultima estancia

// Mostra os filhos do elemento html
// console.log(a.parentNode.parentNode.childNodes); // => NodeList(3) [head, text, body.corpo], text pois no html a um enter entre a linha 6 e 7 e ele conta como um filho do html

// Primeiro filho de um elemento

// console.log(a.parentNode.parentNode.firstChild); // = head

// console.log(a.firstChild); // = #txt

// Ultimo filho de um elemento

// console.log(a.parentNode.parentNode.lastChild); // = body

// console.log(a.parentNode.parentNode.firstChild.nextSibling.firstChild.nextSibling);

console.log(a.parentNode.parentNode.firstChild.nextSibling.previousSibling); // = head


/* 
 !Alerta! - Tomar cuidado com o enter apos cada tag html Exemplo
 <html>
    <head>

    </head>
    enter
    <body>
    
    </body>
 </html>

 caso você perguntasse quem era o irmão de head a resposta seria #text, por causa do enter que é interpretado por \n
*/