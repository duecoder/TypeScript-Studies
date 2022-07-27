// function add(a: number, b: number): number {
//   return a + b;
// }

function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(20, 20));
console.log(addOrConcat('Olá ', 'Amigos'));
