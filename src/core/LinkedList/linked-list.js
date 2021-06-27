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
  getElementAt(index) {}
  remove(element) {}
  removeAt(index) {}
  indexOf(element) {}
  isEmpty() {}
  size() {}
  toString() {}
}
