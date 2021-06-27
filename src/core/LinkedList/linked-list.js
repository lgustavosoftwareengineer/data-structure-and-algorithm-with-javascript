import { defaultEquals } from "../utils";
import { Node } from "./models";

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    const pushAtFirst = () => {
      this.head = node;
      this.count++;
    };

    const pushAtSomewhere = () => {
      let current = this.head;
      for (let i = 1; i < this.count; i++) {
        current = current.next;
      }

      current.next = node;
      this.count++;
    };

    return this.head === undefined ? pushAtFirst() : pushAtSomewhere();
  }
  insert(element, position) {}
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;

      for (let i = 1; i < index; i++) {
        current = current.next;
      }

      return current;
    } else {
      return undefined;
    }
  }
  remove(element) {}
  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  indexOf(element) {}
  isEmpty() {}
  size() {}
  toString() {}
}
