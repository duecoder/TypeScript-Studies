export class Empresa {
  readonly nome: string; // public não necessário
  protected readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColab(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  showColab(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '0555.4244.523/0000-2');
  }

  popColab(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

const empresa1 = new Udemy();

const colaborador1 = new Colaborador('Eduardo', 'Castro');
const colaborador2 = new Colaborador('Levy', 'Cruz');
const colaborador3 = new Colaborador('Mateus', 'Fernandes');

empresa1.addColab(colaborador1);
empresa1.addColab(colaborador2);
empresa1.addColab(colaborador3);
empresa1.addColab({
  nome: 'Luiz',
  sobrenome: 'Oliveira',
});

empresa1.popColab();
empresa1.showColab();
