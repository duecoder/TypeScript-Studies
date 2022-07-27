// Enum

enum Cores {
  VERMELHO = 10, // 0
  AZUL = 100, // 1
  AMARELO = 200, // 2
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

// console.log(Cores[10]);
// console.log(Cores.ROXO);
// console.log(Cores[202]);

function escolheACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolheACor(123345);
