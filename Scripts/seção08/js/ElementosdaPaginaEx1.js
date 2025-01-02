let btn = document.querySelector('.btn');
btn.onclick = function(){
    let textElement = ''; // Declara a variavel de texto que sera adicionado ao paragrafo

    let input = document.querySelector('#nome').value;

    //Cria o elemento paragrafo <p></p>
    let pElement = document.createElement('p');

    // Adiciona o atributo class ao paragrao, atributo valor
    pElement.setAttribute('class', 'classe-p');

    // Verifica se o texto está vazio ou não 
    if(input== ''){
        // Texto padrão caso vazio
        textElement = document.createTextNode('Vazio');
    }else{
        // Variavel de texto recebe o valor do input
        textElement = document.createTextNode(input);
    }
    
    // Adiciona o texto como filho do paragrafo
    pElement.appendChild(textElement);

    // recuperando a div para inserir o paragrafo

    let divElement = document.querySelector('#app');
    // Adiciona o paragrafo como filho da div
    divElement.appendChild(pElement);

    // limpa o input a cada ação
    document.querySelector('#nome').value = '';
}