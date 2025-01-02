// Criando objetos atraves de uma factory function

const pessoa1 = (nome, sobrenome) =>{
    return {
        andar: () => console.log(`${nome}, ${sobrenome} está andando...`)
    }
}

const p1 = pessoa1('Gui', 'Mazzega');
console.log(p1);
// console.log(typeof(p1));
// p1.andar();

// Criando objeto atraves de uma função construtora

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.andar = function(){
        console.log(`${this.nome} ${this.sobrenome} está andando`);
    }
}

const p2 = new Pessoa2('Gui', 'Mazzega');
// p2.andar();
console.log(p2);
// console.log(typeof(p2));

// Criando objeto atraves de uma classe

class Pessoa3{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    andar(){
        console.log(`${this.nome} ${this.sobrenome} está andando`);
    }
}

const p3 = new Pessoa3('Guilherme', 'Mazzega Barchi');

// p3.andar();
console.log(p3);
// console.log(typeof(p3));