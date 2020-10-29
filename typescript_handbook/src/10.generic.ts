function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("Hello");
let output2 = identity<number>(2);

function loggingIdentity2<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}
