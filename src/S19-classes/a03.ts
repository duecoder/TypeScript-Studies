export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) { }

  getAge(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName() {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getFullName() {
    return 'Isso vem do aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}

export class Cliente extends Pessoa {
  getFullName() {
    return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Eduardo', 'Castro', 27, '442.455.198-94');
const aluno = new Aluno('Eduardo', 'Castro', 27, '442.455.198-94');
const cliente = new Cliente('Eduardo', 'Castro', 27, '442.455.198-94');

console.log(pessoa.getFullName());
console.log(aluno.getFullName());
console.log(cliente.getFullName());
