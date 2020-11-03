function Logging(constructor: Function) {
  console.log('Logging...')
  console.log(constructor)
}

@Logging  // デコレータはclassの定義時に実行される
class User {
  name = 'Quill';
  constructor() {
    console.log('User was created!');
  }
}