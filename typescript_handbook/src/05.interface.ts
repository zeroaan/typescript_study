interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "test label" };
printLabel(myObj);

// readonly
interface Point2 {
  readonly x2: number;
  readonly y2: number;
}

let p2: Point2 = { x2: 10, y2: 20 };
// p2.x2 = 15;

// excess check
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return { color, area };
}

let mySquare = createSquare({
  color: "red",
  width: 100,
  test: "qwe",
});

// interface extends
interface Shape {
  color4: string;
}

interface PenStroke {
  penWidth4: number;
}

interface Square extends Shape, PenStroke {
  sideLength4: number;
}

let square = {} as Square;
square.color4 = "blue";
square.sideLength4 = 10;
square.penWidth4 = 5.0;
