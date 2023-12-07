var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
/**
 * Object types
 */
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
var car2 = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
Object.freeze(car2);
car2.model = "Meccedess";
console.log(car2);
/**
 * Optional properties
 */
var car3 = {
    // no error
    type: "Toyota"
};
car3.mileage = 2000;
/**
 * Index Signatures
 */
var nameAgeMap = {};
nameAgeMap["23"] = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
function Logger(constructor) {
    console.log("Loggin");
    console.log("Constructor");
}
var Per1 = /** @class */ (function () {
    function Per1() {
        this.person = "A person";
        console.log("Creating this object");
    }
    Per1 = __decorate([
        Logger
    ], Per1);
    return Per1;
}());
var p = new Per1();
