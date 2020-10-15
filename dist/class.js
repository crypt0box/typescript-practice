"use strict";
class Person {
    constructor(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    // greeting(this: { name: string }) {
    //   console.log(`Hello! My name is ${this.name}`);
    // }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    }
}
const quill = new Person('Quill', 38);
quill.greeting();
// const anotherQuill = {
//   name: 'anotherQuill',
//   greeting() {},
//   anotherGreeting: quill.greeting
// }
// anotherQuill.anotherGreeting(); // thisは呼び出された時に決まる
