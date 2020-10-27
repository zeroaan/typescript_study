type Person2 = {
  name: string;
  age?: number;
};
type Developer2 = Person2 & {
  skills: string[];
};

const person2: Person2 = {
  name: "peter",
};
const expert2: Developer2 = {
  name: "mark",
  skills: ["Javascript, Typescript"],
};

type People2 = Person2[];
const people2: People2 = [person2, expert2];

type Color2 = "red" | "orange" | "yellow";
const color2: Color2 = "red";
const colors2: Color2[] = ["red", "orange"];
