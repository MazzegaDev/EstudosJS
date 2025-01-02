let btn = document.querySelectorAll('.btn');
let div = document.querySelector('#app');

for(let i=0; i<btn.length; i++){
    btn[i].onclick = function(){
        div.removeChild(this);
    }
}