const array = [1, 2, 3, 4, 5];

// removing the last element with the `pop()` method from the class Array
array.pop();

// removing undefined values from a array
Array.prototype.reIndex = function () {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i]) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

// removing first values
Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }

  return this.reIndex();
};

// removing first element with a Array class method
array.shift();

// removing the first element from a array
console.log(array.removeFirstPosition());
