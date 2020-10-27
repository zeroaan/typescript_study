// function
function wrap<T>(param: T) {
  return {
    param,
  };
}
const wrapped = wrap(10);

// interface
interface Items<T> {
  list: T[];
}
const items: Items<string> = {
  list: ["a", "b", "c"],
};

// type
type Items2<T> = {
  list: T[];
};
const items2: Items2<number> = {
  list: [1, 2, 3],
};

// class
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item3: T) {
    this.list.push(item3);
  }
  dequeue() {
    return this.list.shift();
  }
}
const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.list);
console.log(queue.dequeue());
console.log(queue.list);
console.log(queue.dequeue());
console.log(queue.list);
console.log(queue.dequeue());
console.log(queue.list);
console.log(queue.dequeue());
console.log(queue.list);
