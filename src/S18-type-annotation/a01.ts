/* eslint-disable */

let nome: string = 'Eduardo';
let idade: number = 27;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer');

// Arryas
let numberArray: Array<number> = [1,2,3,4,5];
let stringArray: Array<string> = ['due', 'castro'];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    nome: 'Due', idade: 27,
}

// Funções
function soma(x: number, y: number){
    return x + y;
}

const soma2: (x: number, y: number) => number = (x,y) => x + y;
