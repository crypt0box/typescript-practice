"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
// const human: Human = {
//   name: 'Quill',
//   age: 38,
//   greeting(message: string) {
//     console.log(message);
//   }
// }
// let developer: Human;
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message) {
        console.log(message);
    }
};
const user = tmpDeveloper;
