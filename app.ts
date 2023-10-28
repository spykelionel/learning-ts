const a: Number = 3

type User = {
    name: String,
    age: Number
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
}

interface AnotherUser {
    name: String,
    age: Number
}

interface MorePropertyPerson {
    name: String,
    age: Number,
    phone: Number
}

const person: User | MorePropertyPerson = new Person("", 3, 3)