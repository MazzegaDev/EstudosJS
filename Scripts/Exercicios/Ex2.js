let pares = [];

let Pares = (n1, n2) =>{
    for(i = n1; i <=n2; i++){
        if(i%2==0){
            pares.push(i);
        }
    }
    console.log(pares);
}

Pares(1,10);