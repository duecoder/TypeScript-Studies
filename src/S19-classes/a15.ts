// Declaration merging
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  readonly idade?: number;
}

const pessoa3: Pessoa = {
  nome: 'Eduardo',
  sobrenome: 'Castro',
  enderecos: ['Av. Brasil'],
};

// pessoa3.enderecos.push('R. Francisco Fiorentino');
console.log(pessoa3);
