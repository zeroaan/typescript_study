"use strict";
// function
function wrap(param) {
    return {
        param: param,
    };
}
var wrapped = wrap(10);
var items = {
    list: ["a", "b", "c"],
};
var items2 = {
    list: [1, 2, 3],
};
// class
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (item3) {
        this.list.push(item3);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
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
