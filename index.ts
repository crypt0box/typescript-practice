let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 21
}

const fruits: any[] = ['Apple', 'Banana', 'Grape', 1]
const family = ['taro', 'ziro', 32, true]

const book: [string, number, boolean] = ['business', 1500, false]
book.push(21)

console.log(person)

enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

/*
enum CoffeeSize {
  SHORT,
  TALL = 100
  GRANDE,
  VENTI,
}
*/

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.SHORT;

let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.foo = 'bar';
let banana = 'banana';
banana = anything; // String型で定義していてもany型を代入できる -> なるべくanyは使わない

let unionType: number | string = 10;
unionType = 'Hello';
unionType.toUpperCase();

let unionTypes: (number | string)[] = [21, 'hello'];
