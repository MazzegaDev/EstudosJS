/*
    Array de 5 elementos -> = 5
    [0][1][2][3][4] = indices -> Posição do elemeto no array

    //valores em um array
    [12][24][36][48][52]
    0    1    2   3   4

    //Detalhes sobre arrays
    - Possuem tamanho infinito* ate a memoria do computador
    - Podemos colocar qualquer tipo de dado -> ['Geek'][true][12], recomendado manter um mesmo tipo de dado
*/


    // //Forma 1:
    // console.log('Forma new Array');
    // var array = new Array('Gui','T90M','T80UK');
    // //var alunos = ['Gui','T90M','T80UK'] forma recomendada 
    // console.log(array)//representação visual por colchete e separados por virgula

    // //Forma 2 e recomendada: 
    // console.log('Forma recomendada array = [elementos]');
    // var array2 = [1,2,3,4,5];
    // console.log(array2);

    // //Criando um array vazio:
    // console.log('Array vazio array = []');
    // var ArrayVazio = [];
    // console.log(ArrayVazio);

    // //Fazendo acesso ao valor de um indice no array:
    // console.log('Acessando valores array[indice]');
    // console.log(array[2]);

    // //Alterando valores em um vetor:
    // console.log('Alterando valores array[indice] = valor');
    // array2[3] = 'Guilherme';
    // console.log(array2);

    // //Atenção ao acessar um valor com um indice que não existe
    // array2[9] = 10; // não existe indice 9
    // // console.log(array2) // [ 1, 2, 3, 'Guilherme', 5, <4 empty items>, 10 ]

    // // /*JS informa quantas posições estão vazias ate o indice que não existe e coloca o elemento neste indice*/

    
    // // if(array2[5] == undefined){
    // //     array2[5] = 54;
    // // }

    // // console.log(array2[5])// undefined
    // // console.log(array2[6])// undefined
    // // console.log(array2[7])// undefined
    // // console.log(array2[8])// undefined
    // // console.log(array2[9])// 10
    // // console.log(array2[5] == undefined); // false

    // // inserindo no final do array
    
    // var nomes = ['Paula', 'Maria', 'Julia'];
    // // console.log(nomes);

    // console.log('Inserindo no final do array, array.push(elemento)');

    // nomes.push('Vanessa'); // insere o valor no final do array
    // // console.log(nomes)

    // // Tamanho do array
    // // console.log(nomes.length);

    // var tam = nomes.length;

    // //Ordenar dados de um array
    // var alunos = ['Vera', 'Lucia','Pedro','Fernanda','Mario','Ana','Carla']
    // console.log(alunos);

    // alunos.sort();//Ordenar o array de strings
    // //console.log(alunos);

    // var precos = [123.55, 42.27, 546.99, 23.12];
    // //console.log(precos);

    // // precos.sort() // ATENÇÃO Ordenação de floats não funciona assim!
    // // console.log(precos);

    // // Para ondernar floats
    // precos.sort(function(a, b){return a - b;});// função lambda ou callback
    // //console.log(precos)

    // var idades = [5, 1, 8, 12, 44, 78];
    // //console.log(idades);
    // // idades.sort();  // ATENÇÃO Ordenação de ints não funciona assim!

    // // para ordernar ints

    // idades.sort(function(a, b){return a - b;});// função lambda ou callback
    // //console.log(idades)

    // Deletando elementos de um array
    var idades = [5, 1, 8, 12, 44, 78];
    // console.log(idades)

    delete idades[3];

    //console.log('Apos deletar o indice 3:')
    //console.log(idades)

    idades[3] = 12;;
    //console.log('Apos adicionar de novo o indice 3:')
    //console.log(idades);

    // Para não aparecer <1 empty item> usamos:

    // Forma recomendada 
    // console.log('Usando splice')
    // idades.splice(3, 2); // Oque quer dizer?, A partir do indice 3 delete 2 elemento
    //Oque acontece?: deleta ele mesmo e o proximo
    idades.sort(function(a, b){return a - b;});
    //console.log(idades);
   
    // idades.splice(3, 0, 56, 89)// A partir do indice 3, não delete nenhum, mas adicione 56 e 89
    // // ele adiciona antes do indice informado
    // console.log(idades);
    
    // idades.splice(3, 1, 23); // A partir do indice 3, deleta ele mesmo e adiciona 23
    // console.log(idades); // mesma coisa: idades[3] = 23;

    // iterar em um array
    for(var i =0; i<idades.length; i++){
        //console.log(idades[i]);
    }

    // Removendo elementos da ultima posição do array
    //idades.pop(); // remove o ultimo elemento
    //console.log(idades);

    //var ret = idades.pop(); // O metodo pop alem de remover o ultimo elemento ele tambem retorna o elemento removido
    //console.log(ret);
    //console.log(idades);

    // Removendo o primeiro elemento de um array
    // idades.shift(); // remove o primeiro elemento do array, alem de retornar o elemento removido
    // console.log(idades);

    // var ret = idades.shift();
    // console.log(ret);
    // console.log(idades);

    // Inserindo elementos no inicio de um array
    // idades.unshift(99); // Adiciona o elemento no inicio, elementoNovo, elementoInicial
    // console.log(idades)

    // retorna um novo array apartir do indice informado
    // var novo = idades.slice(3)
    // console.log(novo)

    // var novo = idades.slice(1, 2); // a partir do indice 1, pegue ate o indice 2 sem inclui-lo
    // console.log(novo)

    var pares = [2, 4, 6, 8, 10];
    var impares = [1, 3, 5, 7, 9];

    var rest = pares.concat(impares); // concatena os dois arrays
    //console.log(rest);
    //pares primeiro, depois impares

    rest = impares.concat(pares); // impares primeiro, depois pares
    //console.log(rest)

    rest.sort(function(a, b){return a - b;});
    //console.log(rest);

    // 4 x 4 
    var tabuleiro = [[1,2,3,4], [5, 6, 7, 8], [9, 10, 11, 12], [13,14,15,16]];

    /*
        [   C0  C1  C2  C3
            [1, 2,  3,  4], linha 0 
            [5, 6,  7,  8], linha 1
            [9, 10, 11, 12], linha 2
            [13,14,15, 16], linha 3
        ];
    */

    // acessando na matriz
    // [linha][coluna]  
    console.log(tabuleiro[0][0]); // linha 0 coluna 0 -> 1
    console.log(tabuleiro[2][2]); // linha 2 coluna 2 -> 11