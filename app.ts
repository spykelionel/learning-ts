const a: Number = 3;

type User = {
  name: string;
  age: number;
};

const users: Array<User> = [
  {
    name: "Lionel",
    age: 3,
  },
  {
    name: "spyke",
    age: 3,
  },
];

const user: User = {
  name: "Lionel",
  age: 32,
};

class Person {
  name: String;
  age: Number;
  phone: Number;

  constructor(name: String, age: Number, phone: Number) {
    this.name = name;
    this.age = age;
    this.phone = phone;
  }

  speak() {
    console.log(`My name is ${this.name}`);
  }
}

class SomeObject {
  static print() {
    console.log("This is a static method!");
  }
}

interface AnotherUser {
  name: String;
  age: Number;
}

interface MorePropertyPerson {
  name: String;
  age: Number;
  phone: Number;
  speak: () => void;
}

const person: MorePropertyPerson = new Person("spyke", 3, +23764545167238);

person.speak();
SomeObject.print = () => {};

class Shape {
  /* 
    {
        @private: name
    } 
    */
  private static _name = "Shape";
  // [type: Number] Number | Boolean = true
}

interface NumberOrStringDictionary {
  length: number; // ok, length is a number
  name: string; // ok, name is a string
  [index: string]: number | string; // any special prop
}

const nos: NumberOrStringDictionary = {
  length: 32,
  name: "spyke",
  gender: "Se",
};

console.log(nos);

/**
 * Simple Types
 */

const firstname: String = "Spyke Lionel";

/**
 * Implicit types
 */

const implicitNAme = "Spyke Lionel";

/**
 * Special types
 */
let u = true;
// Error: Type 'string' is not assignable to type 'boolean'.
// u = "string";
// Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
// Math.round(u);

/**
 * Arrays
 */
const names: string[] = [];
names.push("Dylan"); // no error

const names2: readonly string[] = ["Dylan"];
// Error: Property 'push' does not exist on type 'readonly string[]'.
// names2.push("Jack");
// try removing the readonly modifier and see if it works?

/**
 * Object types
 */
const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

/**
 * Alternative Object types
 */

interface Car {
  type: string;
  model: string;
  year: number;
}

const car2: Car = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

Object.freeze(car2);
car2.model = "Meccedess";

console.log(car2);
