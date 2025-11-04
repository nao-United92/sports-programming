
import { partialRight } from './function-partial-right-utils.js';

describe('partialRight', () => {
  const greet = (greeting, name) => `${greeting}, ${name}!`;

  test('should append arguments to the function', () => {
    const greetJohn = partialRight(greet, 'John');
    expect(greetJohn('Hello')).toBe('Hello, John!');
  });

  test('should handle multiple partial arguments', () => {
    const add = (a, b, c) => a + b + c;
    const add10and15 = partialRight(add, 10, 15);
    expect(add10and15(5)).toBe(30);
  });

  test('should maintain the `this` context', () => {
    const obj = {
      name: 'World',
      greet: function(greeting) {
        return `${greeting}, ${this.name}!`;
      }
    };
    const greetWorld = partialRight(obj.greet, obj.name);
    expect(greetWorld.call(obj, 'Hello')).toBe('Hello, World!');
  });

  test('should work with no partial arguments', () => {
    const identity = (a) => a;
    const partialRightIdentity = partialRight(identity);
    expect(partialRightIdentity(10)).toBe(10);
  });
});
