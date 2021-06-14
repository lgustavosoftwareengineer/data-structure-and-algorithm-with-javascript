import Deque from "./Queue/deque";
import { palindrome } from "./Queue/solving-problems/palindrom";

//console.log(palindrome("ana"));

const deque = new Deque();
deque.addBack(1);
console.log(deque.removeBack());

console.log(deque.toString());
