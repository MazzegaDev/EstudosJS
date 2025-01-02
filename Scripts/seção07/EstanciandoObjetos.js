//SEMPRE LETRA MAIUSCULA
class Pessoa{
    constructor(nome, sobrenome){
        // atributo  parametro
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    falar(msg){ // metodos
        console.log(`${this.nome} está falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} está comendo...`);
    }

    beber(){
        console.log(`${this.nome} está bebendo`)
    }
}

class carro{
    constructor(modelo){
        this._marca = 'honda';
        this._modelo = modelo;
    }

    get marca(){
        return this ._marca;
    }

    get modelo(){
        return this ._modelo;
    }

    set modelo(modelo){
        this ._modelo = modelo;
    }

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }
}

// Instanciação de objetos - Forma 1
// Objetos no JS são uma coleção dinamica entre chave e valor, nome: 'Prog em js'

// const curso = new Object();
// curso.nome = 'Prog em javascript';
// curso.preco = 27.99;

// console.log(curso)


// // Acresentando atributos dinamicamente
// curso['qtd alunos'] = 999;
// console.log(curso);

// // Deletando atributos

// delete curso['qtd alunos'];
// delete curso['preco'];
// console.log(curso)

// Instanciação de objetos - Forma 2 - Forma literal

const programa = {
    nome: 'Photoshop',
    preco: 8999.99,

    fabricante: {
        nome: 'adobe',
        contato: 'contactadobe.com',

        edereco: {
            rua: 'rua',
            bairro: 'bla',
            cidade: 'mart'
        },
        filiais: [
            {cidade: 'RJ'},
            {cidade: 'SP'}
             
        ]
    }
}

// console.log(programa);
// console.log(programa.nome); // 'Photoshop'
// // console.log(programa.fabricante.nome) // 'adobe'
// // console.log(programa.fabricante.filiais.length); // 2

// // console.log(programa['fabricante']['filiais'].length);

// // altera o valor do atributo
// programa.nome = 'PS4 os';

// console.log(programa.nome);
// console.log(programa);

// delete programa.fabricante.filiais;

// console.log(programa.fabricante.filiais); // undefined

// console.log(programa.fabricante.filiais.length) // ReferenceError

// Instanciação de objetos - Forma 3 - Forma literal

// const pessoa = {}

// pessoa.nome = 'gui';
// console.log(pessoa)

// Instanciação de objetos - Forma 4 - Função construtora

// function Lampada(cor){
//     this.cor = cor;
// }

// // instanciando um obj
// const l1 = new Lampada('Branca');

// console.log(l1);

// Instanciação de objetos - Forma 5 - Objeto a partir das nossas classes

// const p1 = new Pessoa('Gui', 'Mazzega');
// console.log(p1);
// console.log(typeof(p1));
// console.log(p1.nome); // usando a função gets
// console.log(p1.sobrenome); // usando a função gets

// p1.nome = 'Guilherme';
// console.log(p1); // utilizando o set

// p1.falar('oi'); // Utiliza o () pois é um metodo comun, não um set ou get
// p1.comer();
// p1.beber();

const car = new carro('fit');

car.imprimir();

const Deep = new Pessoa('Dalva', 'Puta');

console.log(Deep.nome);
Deep.nome = 'Talita'
console.log(Deep.nome)
Deep.falar('Me estupra');