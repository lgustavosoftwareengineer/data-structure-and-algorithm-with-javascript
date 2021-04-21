import Person from "./person.js";

class Programmer extends Person {
  constructor(name, age, sex, area) {
    super(name, age, sex);
    this.area = area;
  }

  coding() {
    return "I'm Typing...";
  }
}

const Luiz = new Person("Luiz Gustavo");
const Gustavo = new Programmer();

console.log(Luiz.name);
