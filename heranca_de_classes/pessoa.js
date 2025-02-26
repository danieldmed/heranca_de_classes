class Pessoa {
    constructor(nome, idade, id) {
        this.nome = nome;
        this.idade = idade;
        this.id = id;
    }

    exibirInformacoes() {
        console.log("Nome: " + this.nome + ", Idade: " + this.idade + ", ID: " + this.id);
    }
}