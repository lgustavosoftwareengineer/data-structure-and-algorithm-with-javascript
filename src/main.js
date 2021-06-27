import { LinkedList } from "./core";

const linkedList = new LinkedList();
linkedList.push(2);
linkedList.push(3);
console.log(`removeAt: ${linkedList.removeAt(1)}`);
console.log(`linkedList: ${linkedList.head.element}`);
