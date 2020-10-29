enum Access {
  // 상수 멤버
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,

  // 계산된 멤버
  G = "123".length,
}
//console.log(Access);

enum Enum {
  A,
}
let a = Enum.A;
let nameOfA = Enum[a];
//console.log(a);
//console.log(nameOfA);

enum Enum2 {
  AA = 1,
  BB,
  CC = 2,
}
console.log(Enum2);
let aa = Enum2.BB;
let nameAA = Enum[aa];
console.log(nameAA);
