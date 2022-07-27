// Array<T> ou T[]

function multiArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiArgs(2, 2, 3);
const concatena = concatenaString('Due ', 'Delas ', 'OH YEAH');
const upperCase = toUpperCase('Joelson', 'Batista', 'Dos Santos');

console.log(result);
console.log(concatena);
console.log(upperCase);
