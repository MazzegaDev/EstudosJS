let btns = document.querySelectorAll('button');

for(let i=0; i < btns.length; i++){
    // Atribui uma função de click para cada botão do array
    btns[i].onclick = function(){
        /*Seleciona a tag body abre o campo estilo e sua propriedade cor de fundo,                                                                      
        seleciona o atributo do proprio botão clicado (this), 
        o atributo classe (btn-red) é selecionado e logo
        apos repartido apos o traço (-) em um array [btn], [red] e então o indice 1 (red) eselecionado.*/ 
        document.querySelector('body').style.backgroundColor = this.getAttribute('class').split('-')[1];

       
    }
}