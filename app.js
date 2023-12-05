var a = 3;
var users = [
    {
        name: "Lionel",
        age: 3
    },
    {
        name: "spyke",
        age: 3
    },
];
var user = {
    name: "Lionel",
    age: 32
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
}());
var SomeObject = /** @class */ (function () {
    function SomeObject() {
    }
    SomeObject.print = function () {
        console.log("This is a static method!");
    };
    return SomeObject;
}());
var person = new Person("spyke", 3, +23764545167238);
person.speak();
SomeObject.print = function () { };
var Shape = /** @class */ (function () {
    function Shape() {
    }
    /*
      {
          @private: name
      }
      */
    Shape._name = "Shape";
    return Shape;
}());
var nos = {
    length: 32,
    name: "spyke",
    gender: "Se"
};
console.log(nos);
/**
 * Simple Types
 */
var firstname = "Spyke Lionel";
/**
 * Implicit types
 */
var implicitNAme = "Spyke Lionel";
/**
 * Special types
 */
var u = true;
// Error: Type 'string' is not assignable to type 'boolean'.
// u = "string";
// Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
// Math.round(u);
/**
 * Arrays
 */
var names = [];
names.push("Dylan"); // no error
var names2 = ["Dylan"];
// Error: Property 'push' does not exist on type 'readonly string[]'.
// names2.push("Jack");
// try removing the readonly modifier and see if it works?
