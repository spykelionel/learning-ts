var a = 3;
var users = [
  {
    name: "Lionel",
    age: 3,
  },
  {
    name: "spyke",
    age: 3,
  },
];
var user = {
  name: "Lionel",
  age: 32,
};
var Person = /** @class */ (function () {
  function Person(name, age, phone) {
    this.name = name;
    this.age = age;
    this.phone = phone;
  }
  Person.prototype.speak = function () {
    console.log("My name is " + this.name);
  };
  return Person;
})();
var SomeObject = /** @class */ (function () {
  function SomeObject() {}
  SomeObject.print = function () {
    console.log("This is a static method!");
  };
  return SomeObject;
})();
var person = new Person("spyke", 3, +23764545167238);
person.speak();
SomeObject.print = function () {};
var Shape = /** @class */ (function () {
  function Shape() {}
  /*
      {
          @private: name
      }
      */
  Shape._name = "Shape";
  return Shape;
})();

var nos = {
  length: 32,
  name: "spyke",
  gender: "Se",
};
console.log(nos);
