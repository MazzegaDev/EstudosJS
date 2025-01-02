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
