class Usuario{
    constructor(Email, Senha){
        this._email = Email;
        this._senha = Senha;
    }

    get Email(){
        return this._email;
    }

    set Email(Email){
        this._email = Email;
    }

    get Senha(){
        return this._senha;
    }

    set Senha(Senha){
        this._senha = Senha;
    }

    VerificarAdmin(){
        if(this._Admin == true){
            return true;
        }else{
            return false;
        }
    }
}

class Admin extends Usuario{
    constructor(Email, Senha, Admin){
        super(Email, Senha);
        this._Admin = true;
    }

    get Admin(){
        return this._Admin;
    }

}

let User1 = new Usuario('Guilherme@gmail.com','Mazzeguinha');
let User2 = new Admin('Amanda@gmail.com','Amanda123');

console.log(User1.VerificarAdmin()); // False
console.log(User2.VerificarAdmin()); // True