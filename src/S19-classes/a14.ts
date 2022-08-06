interface Name {
  name: string;
}

interface LastName {
  lastname: string;
}

type FullName = {
  fullName(): string;
};

// type NewLikePerson = Name & LastName & FullName;
interface LikePerson2 extends Name, LastName, FullName { }

class NewPerson implements LikePerson2 {
  constructor(public name: string, public lastname: string) { }

  fullName(): string {
    return this.name + ' ' + this.lastname;
  }
}

const person1 = new NewPerson('Eduardo', 'Castro');

console.log(person1.fullName());
