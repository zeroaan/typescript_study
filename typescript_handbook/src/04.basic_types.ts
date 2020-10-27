let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = "red";

let numList: number[] = [1, 2, 3];
let numList2: Array<number> = [1, 2, 3];

enum Color {
  Red = 1,
  Green = 4,
  Blue = 5,
}
let c: Color = Color.Green;
console.log(c);
let colorName: string = Color[4];
console.log(colorName);

let notSure: any = 4;
notSure = "string";
notSure = true;

declare function create(o: object): void;
create({ prop: 0 });
// create(null);
// create(42);
// create("string");
// create(false);
// create(undefined);

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
