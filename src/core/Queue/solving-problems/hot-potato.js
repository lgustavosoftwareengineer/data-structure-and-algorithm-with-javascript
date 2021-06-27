import Queue from "../queue";

export default function hotPotato(elementsList = [], num) {
  const queue = new Queue();
  const eliminatedList = [];

  elementsList.forEach((element) => queue.enqueue(element));

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }

    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  };
}
