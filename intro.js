function sum(a, b) {
  return a + b;
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old`;
  }
}

const shoppingList = ['pasta', 'beer'];

module.exports = {
  sum,
  Person,
  shoppingList,
};
