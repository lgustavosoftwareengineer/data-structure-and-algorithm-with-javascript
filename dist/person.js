"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(name, age, sex, doSomething) {
  _classCallCheck(this, Person);

  this.name = name;
  this.age = age;
  this.sex = sex;
  this.doSomething = function () {
    return "opa";
  };
};

exports.default = Person;