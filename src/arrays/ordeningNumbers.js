const numbers = [3, 4, 6, 14, 1, 11, 2, 3, 10];

console.log(numbers.sort());

console.log(numbers.sort((a, b) => a - b));
// or
let compareFn = (a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};

console.log(numbers.sort(compareFn));

let compareAgeFn = (a, b) => {
  if (a.age > b.age) return 1;
  if (a.age < b.age) return -1;
  return 0;
};

const friends = [
  { name: "John", age: 30 },
  { name: "Ana", age: 20 },
  { name: "Chris", age: 19 },
];

const friendsOrdered = friends.sort(compareAgeFn);
console.log(friendsOrdered);
