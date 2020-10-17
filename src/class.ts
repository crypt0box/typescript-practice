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

  constructor(public readonly name: string, private age: number) {
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
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }
}
const teacher = new Teacher('Quill', 34, 'Math');
teacher.greeting();