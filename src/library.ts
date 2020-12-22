// import axios from 'axios';
// import _ from 'lodash';
namespace myApp {
  const hello = 'hello in namespace';
  export const name = 'Quill';
  export interface Nameable {
    name: string;
  }
}
let nameable: myApp.Nameable;