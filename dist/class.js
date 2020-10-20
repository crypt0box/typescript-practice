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
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    }
}
Person.species = 'Homo sapiens';
// const quill = new Person('Quill', 38);
// quill.greeting();
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
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}`);
    }
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject.');
        }
        this._subject = value;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this._subject}`);
    }
}
// const teacher = new Teacher('Quill', 34, 'Math');
// console.log(teacher.subject);
// teacher.greeting();
console.log(Person.species);
console.log(Person.isAdult(38));
const teacher = new Teacher('Quill', 38, 'Math');
teacher.greeting();
