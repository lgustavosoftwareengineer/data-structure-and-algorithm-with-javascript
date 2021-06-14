export default class Deque {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  addFront(element) {
    if (this.isEmpty()) this.addBack(element);

    for (let i = this.count; i > 0; i--) {
      this.items[i] = this.items[i - 1];
    }
    this.count++;
    this.items[0] = element;
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) return;
    const response = this.items[0];

    delete this.items[0];
    return response;
  }

  removeBack() {
    if (this.isEmpty()) return;
    const response = this.items[this.count - 1];

    delete this.items[this.count - 1];
    return response;
  }

  peekFront() {
    return this.items[0];
  }

  peekBack() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.count = 0;
    this.items = {};
  }

  size() {
    return this.count;
  }

  toString() {
    if (this.isEmpty()) {
      return;
    }
    let response = "";
    for (let i = 0; i < this.size(); i++) {
      if (i === this.size() - 1) {
        response += `${this.items[i]}`;
        break;
      }
      response += `${this.items[i]},`;
    }
    return response;
  }
}
