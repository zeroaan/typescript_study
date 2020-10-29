function padLeft(value: string, padding: any) {
  if (typeof padding === "string") {
    return padding + value;
  } else if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  throw new Error(`Expected string or number, got '${typeof padding}'.`);
}
console.log(padLeft("Hello world", 4));
console.log(padLeft("Hello world", "What, "));
console.log(padLeft("Hello world", true));
