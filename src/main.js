import {
  palindromeRecursive,
  hotPotato,
  palindrome,
} from "./Queue/solving-problems/";

const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
const { eliminated, winner } = hotPotato(names, 7);

eliminated.forEach((element) => console.log(`${element} was eliminated`));
console.log(`the winner is ${winner}`);
