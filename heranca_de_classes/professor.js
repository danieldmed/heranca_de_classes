class Professor extends Pessoa {
    constructor(nome, idade, id, materia) {
        super(nome, idade, id);
        this.materia =materia;
    }

    exibirMateria() {
        console.log("Matéria: " + this.materia);
    }
}