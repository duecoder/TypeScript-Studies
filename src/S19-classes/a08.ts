export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) { } // eslint-disable-line

  doAttack(personagem: Personagem): void {
    this.speaks();
    personagem.lostLife(this.attack);
  }

  lostLife(attackStrenght: number): void {
    this.life -= attackStrenght;
    console.log(`${this.emoji} ${this.name} agora tem ${this.life} de vida...`);
  }

  speaks(): void { } // eslint-disable-line
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  speaks(): void {
    console.log(this.emoji + ' WOMEN POWER BITCH!!!!');
  }
}

export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  speaks(): void {
    console.log(this.emoji + ' GRRRR!!! IMMA KILL U!!!');
  }
}

const guerreira = new Guerreira('Lindsey', 100, 1000);
const monstro = new Monstro('Bowser', 85, 1000);

guerreira.doAttack(monstro);
monstro.doAttack(guerreira);
guerreira.doAttack(monstro);
monstro.doAttack(guerreira);
