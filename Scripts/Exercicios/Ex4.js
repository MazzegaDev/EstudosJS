let exp = (anos) =>{
    if(anos<=1){
        console.log('Iniciante');
    }if(anos>1 && anos <3){
        console.log('Intermediario');
    }if(anos>=3 && anos <=6){
        console.log('Avançado');
    }if(anos>=7){
        console.log('Extremamente expereriente');
    }
}

let ExpAnos = 3;

exp(ExpAnos);