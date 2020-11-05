function Logging(message: string) {
  return function Logging(constructor: Function) {
    console.log(message);
    console.log(constructor);
  }
}

@Logging('Logging User')  // デコレータはclassの定義時に実行される
class User {
  name = 'Quill';
  constructor() {
    console.log('User was created!');
  }
}