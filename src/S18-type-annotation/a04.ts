const objectA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// Não da mais certo por conta do readonly
// objectA.chaveA = 'Novo valor';
objectA.chaveC = 'New one';
objectA.chaveD = 25;
