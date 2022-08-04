export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) { }

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log("Can't write without a tool.");
      return;
    }
    this.tool.write();
  }
}

export abstract class Tool {
  constructor(private _name: string) { }
  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  write(): void {
    console.log(`${this.name} está escrevendo...`);
  }
}

export class WriteMachine extends Tool {
  write(): void {
    console.log(`${this.name} está escrevendo...`);
  }
}

const writer = new Writer('Due');
const pen = new Pen('Bic');
const tool = new WriteMachine('John Deree')

console.log(writer.name);
console.log(pen.name);
console.log(tool.name);

writer.tool = tool;
writer.write();
