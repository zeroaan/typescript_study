function greeter(person: string) {
  return "Hello, " + person;
}

let user2 = "Jane";
greeter(user2);

/*
let user3 = [0, 1, 2];
greeter(user3);
*/

// interface

interface Person {
  firstName?: string;
  lastName?: string;
}
function whatName(person: Person) {
  return "Hello, " + person.firstName + "~~~ " + person.lastName;
}
console.log(whatName({ firstName: "one", lastName: "two" }));
console.log(whatName({ firstName: "one" }));
console.log(whatName({ lastName: "two" }));

// class
class Student {
  fullName2: string;
  constructor(
    public firstName2: string,
    public middleInitial2: string,
    public lastName2: string
  ) {
    this.fullName2 = firstName2 + " " + middleInitial2 + " " + lastName2;
  }
}

interface Person2 {
  firstName2: string;
  lastName2: string;
}

function greeter2(person2: Person2) {
  return "Hello, " + person2.firstName2 + " " + person2.lastName2;
}

let user4 = new Student("Jane", "M.", "User");

console.log(greeter2(user4));
