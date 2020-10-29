let myAdd = function (x: number, y: number): number {
  return x + y;
};

let myAdd2: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};

function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return `${firstName} ${lastName}`;
  } else {
    return firstName;
  }
}
let result1 = buildName("Bob");
// let result2 = buildName("Bob", "Adams", "Sr.");
let result3 = buildName("Bob", "Adams");

function buildName2(firstName2: string, lastName2 = "Smith") {
  return `${firstName2} ${lastName2}`;
}
let result4 = buildName2("Bob");
let result7 = buildName2("Bob", undefined);
// let result5 = buildName2("Bob", "Adams", "Sr.");
let result6 = buildName2("Bob", "Adams");
console.log(result4);
console.log(result6);
console.log(result7);

// rest parameter

function restName(fName: string, ...restOfName: string[]) {
  return fName + " " + restOfName.join(" ");
}
let employeeName = restName("Joseph", "Samual", "Lucas", "Alie");
console.log(employeeName);
