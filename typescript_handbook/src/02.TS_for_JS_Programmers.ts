interface User {
  name: string;
  id: number;
}
/* interface와 type
type User = {
  name: string;
  id: number;
};
*/

const user: User = {
  name: "peter",
  id: 0,
};

// union
type myBool = true | false;
type windowStates = "open" | "closed" | "middle";
type lockStates = "locked" | "unlocked";
type oddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type NumberArray2 = number[];

// struct
interface Point {
  x: number;
  y: number;
}
function printPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
const point = { x: 12, y: 26, z: 32 };
printPoint(point);

// class
class VirtualPoint {
  constructor(public x: number, public y: number) {
    this.x = x;
    this.y = y;
  }
}
const newVPoint = new VirtualPoint(13, 53);
printPoint(newVPoint);
