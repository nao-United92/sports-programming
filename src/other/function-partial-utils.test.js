import { partial } from './function-partial-utils.js';

describe('partial', () => {
  const greet = (greeting, name) => `${greeting}, ${name}!`;

  test('should prepend arguments to the function', () => {
    const sayHello = partial(greet, 'Hello');
    expect(sayHello('John')).toBe('Hello, John!');
  });

  test('should handle multiple partial arguments', () => {
    const add = (a, b, c) => a + b + c;
    const add5and10 = partial(add, 5, 10);
    expect(add5and10(15)).toBe(30);
  });

  test('should maintain the `this` context', () => {
    const obj = {
      name: 'World',
      greet: function(greeting) {
        return `${greeting}, ${this.name}!`;
      }
    };
    const sayHi = partial(obj.greet, 'Hi');
    expect(sayHi.call(obj)).toBe('Hi, World!');
  });

  test('should work with no partial arguments', () => {
    const identity = (a) => a;
    const partialIdentity = partial(identity);
    expect(partialIdentity(10)).toBe(10);
  });
});