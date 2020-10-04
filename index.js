"use strict";
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
var person = {
    name: 'Jack',
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape', 1];
var family = ['taro', 'ziro', 32, true];
var book = ['business', 1500, false];
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
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
var anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.foo = 'bar';
var banana = 'banana';
banana = anything; // String型で定義していてもany型を代入できる -> なるべくanyは使わない
var unionType = 10;
unionType = 'Hello';
unionType.toUpperCase();
var unionTypes = [21, 'hello'];
var apple = 'apple';
var clothSize = 'medium';
var cloth = {
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
var tmp;
var anotherAdd = add;
var doubleNumber = function (num) { return num * 2; };
var anotherDoubleNumber = function (num) { return num * 2; };
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
var anyInput;
var text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
