type LikePerson = {
  name: string;
  lastname: string;
  fullName(): string;
};

class Person implements LikePerson {
  constructor(public name: string, public lastname: string) { }

  fullName(): string {
    return this.name + ' ' + this.lastname;
  }
}

const person = new Person('Eduardo', 'Castro');

console.log(person.fullName());
