// InterSection Types : & , AND

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  idade: 27,
  nome: 'Eduardo',
  sobrenome: 'Castro',
};

console.log(pessoa);

export { pessoa };
