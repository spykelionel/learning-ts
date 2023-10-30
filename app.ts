const a: Number = 3

type User = {
    name: string,
    age: number
}

const users: Array<User> = [
    {
        name: "Lionel",
        age: 3
    },
    {
        name: "spyke",
        age: 3
    }
]

const user: User = {
    name: "Lionel",
    age: 32
}

class Person {
    name: String
    age: Number
    phone: Number

    
    constructor(name: String, age: Number, phone: Number) {
        this.name = name
        this.age = age
        this.phone = phone
    }

    speak() {
        console.log(`My name is ${this.name}`)
    }

}

class SomeObject {
    static print(){
        console.log("This is a static method!")
    }
}

interface AnotherUser {
    name: String,
    age: Number
}

interface MorePropertyPerson {
    name: String,
    age: Number,
    phone: Number,
    speak: () => void
}

const person: MorePropertyPerson = new Person("spyke", 3, +23764545167238)

person.speak()
SomeObject.print = () => {

}

class Shape {
    /* 
    {
        @private: name
    } 
    */
    private static _name = "Shape"
    // [type: Number] Number | Boolean = true
}

interface NumberOrStringDictionary {
    length: number; // ok, length is a number
    name: string; // ok, name is a string
    [index: string]: number | string; // any special prop
}