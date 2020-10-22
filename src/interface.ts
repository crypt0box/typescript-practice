// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
  (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Human {
  name: string;
  age: number;
  greeting(message: string): void;
}

// const human: Human = {
//   name: 'Quill',
//   age: 38,
//   greeting(message: string) {
//     console.log(message);
//   }
// }

// let developer: Human;

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number) {}
  greeting(message: string) {
    console.log(message);
  }
}

const tmpDeveloper = {
  name: 'Quill',
  age: 38,
  experience: 3,
  greeting(message: string) {
    console.log(message);
  }
}
const user: Human = tmpDeveloper;