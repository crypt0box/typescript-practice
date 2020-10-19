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

  constructor(public readonly name: string, protected age: number) {
  }
 
  incrementAge() {
    this.age += 1;
  }
  greeting(this: Person) {
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

class Teacher extends Person{
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
  constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  greeting() {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this._subject}`);
  }
}

const teacher = new Teacher('Quill', 34, 'Math');
console.log(teacher.subject);
teacher.greeting();