"use strict";
var _a, _b;
const quill = {
    name: 'quill',
    role: 'front-end',
    follower: 1000
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
const upperHello = function (x) { return 0; };
let unionFunc;
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    constructor() {
        this.kind = 'dog';
    }
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
    }
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('fulutter');
    }
}
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
// const input = <HTMLInputElement>document.getElementById('input');
const input = document.getElementById('input');
input.value = 'initial input value';
const designer = {
    name: 'Quill',
    role: 'web'
};
const downloadedData = {
    id: 1
};
console.log((_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name);
const userData = (_b = downloadedData.user) !== null && _b !== void 0 ? _b : 'no-user';
let target = function (a, b) { };
let source = function (a) { };
target = source;
target('hi', 'hello');
function advancedFn(...args) {
}
advancedFn(0, 'hi', true, 32);
const array = [10, 20];
const peter = {
    name: 'Peter',
    age: 38
};
