function MostrarAlerta(){
    alert('O botão foi clicado!')
}
/*
    Função inline
    <button onclick="MostrarAlerta()" type="button">Clique aqui</button>
*/

function MudarTexto(elemento){
    elemento.innerHTML = 'Eu estou avisando';
}

function Resetar(elemento){
    elemento.innerHTML = '<b>Atenção</b>Não clique no botão acima!'
}
/*
    O parametro this passa por paramentro ele mesmo ou seja o proprio elemento span

     <span onmouseover="MudarTexto(this);" class="info"><b>Atenção</b>Não clique no botão acima!</span>

    O elemento span é passado como o parametro elemento para a função requisitada acima
*/

function MudarCor(){
    let cores = ['green','red','magenta','purple','blue','yellow','black','orange'];

    const numero = Math.floor((Math.random() * cores.length) + 1);

    document.bgColor = cores[numero];
}
/*
    Math.random gera um valor aleatorio
    Math.floor pega so o valor inteiro gerado

    Math.floor(Math.random()), vai gerar apenas numeros 0, pois a perte decimal ocultamos com o floor, agora multiplicamos este numero 0 com o tamanho do nosso array de 7 posições, porem nosso tem 8 elementos então somamos isso com mais 1 para iterar de forma correta, adicionamos este numero aleatorio em uma variavel e utilizamos este numero como um indice da cor aleatoria document.bgColor = cores[numero];
*/

function escrever(input){
    let span = document.getElementById('texto');

    span.innerHTML = input.value;
}