class Aluno extends Pessoa {
    constructor(nome, idade, id, serie) {
        super(nome, idade, id);
        this.serie = serie;
    }

    exibirSerie() {
        console.log("Série: " + this.serie);
    }
}