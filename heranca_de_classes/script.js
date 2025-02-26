const aluno1 = new Aluno("João", 20, 123, "8º");
const professor1 = new Professor("Maria", 35, 321, "Matemática");
const funcionario1 = new Funcionario("Carlos", 45, 231, "Faxineiro");

aluno1.exibirInformacoes();
aluno1.exibirSerie();

professor1.exibirInformacoes();
professor1.exibirMateria();

funcionario1.exibirInformacoes();
funcionario1.exibirCargo();