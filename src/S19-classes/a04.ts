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
  // sala: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string, public sala: string) {
    super(nome, sobrenome, idade, cpf);
    // this.sala = sala;
  }

  getFullName() {
    console.log('Doing this first');
    return super.getFullName();
  }
}

export class Cliente extends Pessoa {
  getFullName() {
    return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const aluno = new Aluno('Eduardo', 'Castro', 27, '442.455.198-94', '3B');
console.log(aluno);
