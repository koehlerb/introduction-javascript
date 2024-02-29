'use strict';

const thing = {
  description: 'baseball',
  weight: 0.5,
  message() {
    return `The ${this.description} weighs ${this.weight} kg.`;
  },
};

class Person {
  constructor(name = 'John Doe') {
    this.name = name;
  }

  greeting() {
    alert(`Hello, I am ${this.name}.`);
  }
}

const p1 = new Person('Brian Koehler');
