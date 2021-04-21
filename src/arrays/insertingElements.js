//manual way
const array = [];
array[array.length] = 0;

//with push (adding in the final)
array.push(1);

// creating a personalized prototype array function, which puts the value in the first position
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

//inserting the value -1 in the first position
array.insertFirstPosition(-1);

//inserting a value using the unshift method
array.unshift(-2);

console.log(array);
