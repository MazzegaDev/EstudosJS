class Carro{
    constructor(modelo){
        this._modelo = Carro.InformarMarca();
        this._marca = 'honda';
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    get marca(){
        return this._marca;
    }

    imprimirDados(){
        console.log(`Marca: ${this.marca} \nModelo: ${this.modelo}`);
    }

    //Não precisamos de instancia para acessar metodos estaticos
    static InformarMarca(){
        return 'honda';
    }
}

// const fit = new Carro('Fit');
// fit.imprimirDados();

// console.log(fit.marca);

console.log(Carro.InformarMarca());

console.log(Math.random());// acessando o metodo estatico random da classe Math

console.log(Math.PI);