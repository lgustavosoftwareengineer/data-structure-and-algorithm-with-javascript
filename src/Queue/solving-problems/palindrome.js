import Deque from "../deque";

export function palindrome(text = "") {
  let isEqualElementsAmount = 0;
  let deque = new Deque();
  let lastElement;
  let firstElement;

  for (let i = 0; i < text.length; i++) {
    deque.addBack(text[i]);
  }

  for (let y = 0; y < deque.size(); y++) {
    lastElement = deque.removeBack();
    firstElement = deque.removeFront();

    if (lastElement === firstElement) {
      isEqualElementsAmount++;
    }
  }

  return isEqualElementsAmount === deque.size();
}
