// Criando uma função construtura

function Pessoa(n, s, raca = 'Humano'){
    // Atributos privados, so conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    // atributo publico pode ser acessado fora da função construtora
    this.raca = raca;

    // Metodo privado
    let imprimirDados = function(){
        console.log(`Nome: ${nome}, idade: ${idade}, Peso; ${peso}, altura: ${altura}, Sexo ${sexo}, Raça: ${raca}`);
    }

    // Metodo publico

    this.fazerAniversario = function(){
        idade += 1;
        imprimirDados();
    }

    this.getIdade = function(){
        return idade;
    }
}

// Instanciando um novo objeto, (new)
const Guilherme = new Pessoa('Guilherme', 'Masculino'); 

console.log(Guilherme); // Apenas os Metodos e atributos publicos são apresentados

console.log(Guilherme.peso); // Privado, exibe undefined
console.log(Guilherme.raca); // Publico, exibe "Humano";

Guilherme.fazerAniversario(); // Publico
Guilherme.fazerAniversario();

// Instanciando um novo objeto
// Atravez de funções contrutoras instanciamos objetos

const edu = new Pessoa('Edu', 'Masculino');
edu.fazerAniversario();
console.log(edu.getIdade());

console.log(typeof(Pessoa)); // Function
console.log(typeof(Guilherme)); // Object