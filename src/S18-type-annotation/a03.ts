function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Eduardo',
  sobrenome: 'Castro',
  showName(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

noReturn('Eduardo', 'Castro');
pessoa.showName();

export { pessoa };
