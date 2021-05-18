import Stack from "../stack";

export function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;

  let binaryString = "";

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

export const decimalToBinaryE6 = (decNumber = 0) => {
  const remStack = new Stack();
  let number = decNumber;
  let rem;

  let binaryString = "";

  do {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  } while (number > 0);

  do {
    binaryString += remStack.pop().toString();
  } while (!remStack.isEmpty());

  return binaryString;
};

export function myDecimalToBinary(decimalNum) {
  const decimalNumbersStack = new Stack();
  let number = decimalNum;
  let rem;
  let result = "";

  while (number !== 0) {
    rem = Math.floor(number % 2);
    number = Math.floor(number / 2);

    decimalNumbersStack.push(rem);
  }

  while (!decimalNumbersStack.isEmpty()) {
    result += decimalNumbersStack.pop();
  }

  return result;
}
