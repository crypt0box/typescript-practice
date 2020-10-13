"use strict";
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
const person = {
    name: 'Jack',
    age: 21
};
const fruits = ['Apple', 'Banana', 'Grape', 1];
const family = ['taro', 'ziro', 32, true];
const book = ['business', 1500, false];
book.push(21);
console.log(person);
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
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
};
coffee.size = CoffeeSize.SHORT;
let anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.foo = 'bar';
let banana = 'banana';
banana = anything; // String型で定義していてもany型を代入できる -> なるべくanyは使わない
let unionType = 10;
unionType = 'Hello';
unionType.toUpperCase();
let unionTypes = [21, 'hello'];
const apple = 'apple';
let clothSize = 'medium';
const cloth = {
    color: 'white',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('Hello!');
}
function sayHello2() {
    console.log('Hello!');
    return;
}
console.log(sayHello());
let tmp;
const anotherAdd = add;
const doubleNumber = (num) => num * 2;
const anotherDoubleNumber = num => num * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
