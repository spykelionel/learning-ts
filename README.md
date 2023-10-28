# What is TypeScript?
TypeScript is a superset of JavaScript, meaning that it does everything that JavaScript does, but with some added features.

The main reason for using TypeScript is to add static typing to JavaScript. Static typing means that the type of a variable cannot be changed at any point in a program. It can prevent a LOT of bugs!

On the other hand, JavaScript is a dynamically typed language, meaning variables can change type. Here's an example:

```javascript
// JavaScript
let foo = "hello";
foo = 55; // foo has changed type from a string to a number - no problem

// TypeScript
let foo = "hello";
foo = 55; // ERROR - foo cannot change from string to number
```

# Types
```ts
let a: Number = 3
let b = 3

// Both a and b define a number with type Number
// the type of a is explicitly provided
// b is inferred.

```

# Data Hiding

A class can control the visibility of its data members to members of other classes. This capability is termed as Data Hiding or Encapsulation.

Object Orientation uses the concept of access modifiers or access specifiers to implement the concept of Encapsulation. The access specifiers/modifiers define the visibility of a class’s data members outside its defining class.