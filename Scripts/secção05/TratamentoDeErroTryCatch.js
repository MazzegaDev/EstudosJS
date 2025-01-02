// console.log(nome); // ReferenceError

// console.log('Oi...')

// console.log(4..oi());

// Tramos erro com trycatch
// try{
//     console.log(nome);
// }catch(e){
//     console.log('Não foi possivel imprimir nome.');
//     console.log(e.name);// Fala o nome do erro
//     console.log(e.message);// Mensagem do erro
// }

// console.log('oi');

// Lançando erros

function dividir(n1, n2){
    if(n1 === 0 || n2 === 0){
        throw("Os valores devem ser positivos.") // Lançando uma exceção (erro)
    }else{
        return n1 / n2;
    }
}

try{
    let ret =  dividir(8, 2);
    console.log(ret)
}catch(e){
    console.log('Não foi possivel dividir');
}finally{// Sempre executado idependente de erro ou não
    console.log("Vamos continuar...");
}