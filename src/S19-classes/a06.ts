export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) { }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Eduardo', 'Castro', 27, '442.455.198-94');
console.log(pessoa);
const pessoa2 = Pessoa.criaPessoa('José', 'Albertinho');
console.log(pessoa2);
const pessoa3 = Pessoa.criaPessoa('Levy', 'Cruz');
console.log(pessoa3);
