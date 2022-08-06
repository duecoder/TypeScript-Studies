export class Car {
  private readonly engine = new Engine();

  turnOn(): void {
    this.engine.turnOn();
  }

  accelerate(): void {
    this.engine.accelerate();
  }

  stop(): void {
    this.engine.stop();
  }

  turnOff(): void {
    this.engine.turnOff();
  }
}

export class Engine {
  turnOn(): void {
    console.log('Engine is turned on!');
  }

  accelerate(): void {
    console.log('Engine is speeding up!');
  }

  stop(): void {
    console.log('Engine stopped!');
  }

  turnOff(): void {
    console.log('Engine was turned off!');
  }
}

const car = new Car();
car.turnOn();
car.accelerate();
car.stop();
car.turnOff();
