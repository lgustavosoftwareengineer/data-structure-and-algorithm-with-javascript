export default class Person {
  constructor(name, age, sex, doSomething) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.doSomething = () => "opa";
  }
}
