class Animal {
  move(distance: number = 0) {
    console.log(`Animal moved ${distance}m.`);
  }
  bark() {
    console.log("Bark!");
  }
}
class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const animal = new Animal();
const dog = new Dog();
animal.bark();
dog.bark();
dog.move(10);
dog.bark();

// accessors
class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    this._fullName = newName;
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}
