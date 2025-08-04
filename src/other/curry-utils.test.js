import { curry } from './curry-utils.js';

describe('curry', () => {
  test('should curry a function with multiple arguments', () => {
    const add = (a, b, c) => a + b + c;
    const curriedAdd = curry(add);

    expect(curriedAdd(1)(2)(3)).toBe(6);
    expect(curriedAdd(1, 2)(3)).toBe(6);
    expect(curriedAdd(1)(2, 3)).toBe(6);
    expect(curriedAdd(1, 2, 3)).toBe(6);
  });

  test('should maintain context (this) if applicable', () => {
    const obj = {
      name: 'test',
      greet: function(greeting, punctuation) {
        return `${greeting}, ${this.name}${punctuation}`;
      },
    };

    const curriedGreet = curry(obj.greet);
    const boundGreet = curriedGreet.bind(obj);

    expect(boundGreet('Hello')('!')).toBe('Hello, test!');
  });

  test('should work with functions having no arguments', () => {
    const sayHello = () => 'Hello';
    const curriedSayHello = curry(sayHello);
    expect(curriedSayHello()).toBe('Hello');
  });
});