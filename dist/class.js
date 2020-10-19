"use strict";
class Person {
    // name: string;
    // private age: number;
    // constructor(initName: string, initAge: number) {
    //   this.name = initName;
    //   this.age = initAge;
    // }
    // greeting(this: { name: string }) {
    //   console.log(`Hello! My name is ${this.name}`);
    // }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
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
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    get subject() {
        return 'Music';
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this._subject}`);
    }
}
const teacher = new Teacher('Quill', 34, 'Math');
console.log(teacher.subject);
teacher.greeting();
