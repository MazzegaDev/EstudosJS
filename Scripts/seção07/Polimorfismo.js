class Funcao{
    constructor(descricao, salario){
        this._descricao = descricao;
        this._salario = salario;
    }

    get descricao(){
        return this._descricao;
    }

    set descricao(descricao){
        this._descricao = descricao;
    }

    get salario(){
        return this._salario;
    }

    set salario(salario){
        this._salario = salario;
    }
}
class Pessoa{
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf){
        this._cpf = cpf;
    }
    
    //Metodos extras

    get nomeCompleto(){
        return this._nome + ' ' + this._sobrenome;
    }

    set nomeCompleto(nomeCompleto){
        nomeCompleto = nomeCompleto.split(' '); // transforma a string em um array Ex (Guilherme Mazzega Barchi pos split(' ') ['Guilherme', 'Mazzega', 'Barchi']);

        this._nome = nomeCompleto.shift(); // remove e retorna o primeiro elemento do array

        this._sobrenome = nomeCompleto.join(' '); // junta os elementos do array separando cada elemento por espaço

        /*
            Na primeira parte o nome completo Ex(Edu silva) esta sendo separado pelo espaço ' ', então quando separamos temos um array com, 'Edu', 'Silva'.

            Na segunda parte o atributo _nome está recebendo com o shift o primeiro elemento deste array ou seja edu, e o sobrenome esta recebendo com o join apos o espaço 'Silva'
        */
    }

    imprimir_dados(){
        console.log(`Nome: ${this.nome} Sobrenome: ${this.sobrenome}`) // Aceesando pelo metodo get e não pelo atributo
    }
}

class Funcionario extends Pessoa{ // quem herda, de quem é herdado
    constructor(nome, sobrenome, email, cpf, funcao, registro,){
        super(nome, sobrenome, email, cpf); // Classe da qual estamos estendendo
        this._funcao = funcao;
        this._registro = registro;
    }

    get funcao(){
        return this._funcao;
    }

    set funcao(funcao){
        this._funcao = funcao;
    }

    get registro(){
        return this._registro;
    }

    set registro(registro){
        this._registro = registro;
    }

    // Podemos criar funções com o mesmo nomo da função da classe pai mas que fazem outra coisa, isso é chamado de sobreescrita de metodo
    imprimir_dados(){
        super.imprimir_dados();
        console.log(`Registro: ${this.registro} \nSalario: ${this.funcao.salario}`);
    }
}

class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome, sobrenome, email, cpf);
        this._renda = renda;
    }

    get renda(){
        return this._renda;
    }

    set renda(renda){
        this._renda = renda;
    }
}

const prog = new Funcao('Programador', 5900.44);
const f1 = new Funcionario('gui', 'mazzega', 'email', '142', prog, '874');
const c1 = new Cliente('Pedro', 'Sila', 'ppg', '5871.64', 9000);

f1.imprimir_dados();

c1.imprimir_dados();

/*
 Sobrescrita de metodo - Overwriting

 - Polimorfismo - Dois Objetos do mesmo tipo tendo comportamentos diferentes.
*/