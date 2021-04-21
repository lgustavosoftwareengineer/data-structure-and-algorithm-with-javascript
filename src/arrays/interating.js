const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = (num) => num % 2 === 0;

console.log(`Every(isEven): ${numbers.every(isEven)}`);
console.log(`Some(isEven): ${numbers.some(isEven)}`);
numbers.forEach((x) => console.log(isEven(x)));

const myMap = numbers.map(isEven);
console.log(`Map(isEven): ${myMap}`);

const evenNumbers = numbers.filter(isEven);
console.log(`Filter(isEven): ${evenNumbers}`);

const sumOfNumbers = numbers.reduce((previous, current) => previous + current);
console.log(`Reduce: ${sumOfNumbers}`);

let evens = [];
let odds = [];
for (let n of numbers) {
  isEven(n) ? evens.push(n) : odds.push(n);
}
console.log({
  odds,
  evens,
});

let iterator = numbers[Symbol.iterator]();
for (let n of iterator) {
  // console.log(iterator.next().value);
  console.log(n);
}

let entries = numbers.entries();
for (let n of entries) {
  // console.log(entries.next().value);
  console.log(n);
}

const objects = [
  { nome: "Luiz", idade: 19 },
  { nome: "Gustavo", idade: 19 },
];

const entriesTwo = objects.entries();
for (let n of entriesTwo) {
  //entries.next().value
  console.log(n);
}

// let count = 0;
// do {
//   let entriesElement = entriesTwo.next();
//   if (entriesElement.done) break;
//   console.log(entriesElement);
//   count++;
// } while (count <= objects.length);
console.log("keys ⬇️");
const keys = objects.keys();
for (let n of keys) {
  // keys.next().value
  console.log(n);
}
console.log("values ⬇️");
const values = objects.values();
for (let n of values) console.log(n);

const newIsEven = (x) => {
  let isEven = x % 2 === 0;
  if (!isEven) return;
  return x;
};
const numbersEvens = Array.from(numbers, newIsEven).filter(
  (x) => x != undefined
);
console.table(numbersEvens);

const numbersCopy = Array.of(...numbers);

let numbersCopyZeroFill = numbersCopy.fill(0);
// numbersCopy.fill(0, 1) -> começando do index 1
// numbersCopy.fill(0, 1, 3) -> começando do index 1 até o 3
console.log(numbersCopyZeroFill);

let copyArray = [...numbers];
console.log(copyArray.copyWithin(0, 3));
