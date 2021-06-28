import { LinkedList } from "./core";

const linkedList = new LinkedList();
linkedList.push(2);
linkedList.push(3);

console.log("linkedList.head - ", linkedList.head);
console.log("linkedList.remove(2) - ", linkedList.remove(2));
console.log("linkedList.head - ", linkedList.head);
