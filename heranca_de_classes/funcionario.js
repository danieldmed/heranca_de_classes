class Funcionario extends Pessoa {
    constructor(nome, idade, id, cargo) {
        super(nome, idade, id);
        this.cargo = cargo;
    }

    exibirCargo() {
        console.log("Cargo: " + this.cargo);
    }
}