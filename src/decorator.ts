function Logging(message: string) {
  return function Logging(constructor: Function) {
    console.log(message);
    console.log(constructor);
  }
}
function Component(template: string, selector: string) {
  return function <T extends { new(...args: any[]): { name: string } }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector('h1')!.textContent = instance.name;
        }
      }
    }
  }
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log('propertyLogging');
  console.log(target);
  console.log(propertyKey);
}

function MethodLogging(target: any, propertyKey: string, descripitor: PropertyDescriptor) {
  console.log('MethodLogging');
  console.log(target);
  console.log(propertyKey);
  console.log(descripitor);
}

function enumerable(isEnumerable: boolean) {
  return function (target: any, propertyKey: string, descripitor: PropertyDescriptor) {
    return {
      enumerable: isEnumerable
    }
  }
}

function AccessorLogging(target: any, propertyKey: string, descripitor: PropertyDescriptor) {
  console.log('AccessorLogging');
  console.log(target);
  console.log(propertyKey);
  console.log(descripitor);
}

function ParameterLogging(target: any, propertyKey: string, parameterIndex: number) {
  console.log('ParameterLogging');
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}

@Component('<h1>{{ name }}</h1>', '#app')
@Logging('Logging User')  // デコレータはclassの定義時に実行される
class User {
  @enumerable(false)
  @MethodLogging
  greeting( @ParameterLogging message: string) {
    console.log(message)
  }
  @PropertyLogging
  static name2 = 'Quill';
  name = 'Quill';
  constructor(private _age: number) {
    console.log('User was created!');
  }
  @AccessorLogging
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
}