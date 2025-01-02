function habilidades(array){
    
    for(i=0; i<array.length; i++){
        if(array[i] == 'JavaScript'){
            console.log('Sabe JavaScript');
        }else{
            console.log('Não sabe JavaScript');
        }
    }
}
tec1 = ['Python', 'C', 'C++','JavaScript'];
tec2 = ['CSS', 'HTML', 'Java'];

habilidades(tec1);
habilidades(tec2);