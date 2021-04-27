export default class Stack {
  constructor(listSize = 0) {
    this.items = listSize != 0 ? new Array(listSize) : [];
  }

  push(element) {
    this.items = [...this.items, element];
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

const stack = new Stack();
stack.push(5);
stack.push(8);
stack.push(15);

console.log(stack.isEmpty());
console.log(stack.items);
