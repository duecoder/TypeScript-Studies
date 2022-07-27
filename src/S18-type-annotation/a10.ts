// Any : permite você fazer o que quiser com qualquer coisa
// Unknown : te obriga a checar antes de qqr coisa

let x: any;

x = 10;
x = 'Eduardo';
x = '24';

const y = 250;

console.log(x + y); // No caso Concatena o x em string com o y em num

// Unknown

let z: unknown;

z = 10;

if (typeof z === 'number') console.log(z + y);
