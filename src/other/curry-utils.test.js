import { curry } from './curry-utils';

describe('curry', () => {
  let add;
  let curriedAdd;

  beforeEach(() => {
    add = (a, b, c) => a + b + c;
    curriedAdd = curry(add);
  });

  test('should return a function if not all arguments are provided', () => {
    expect(typeof curriedAdd(1)).toBe('function');
    expect(typeof curriedAdd(1, 2)).toBe('function');
  });

  test('should return the result if all arguments are provided at once', () => {
    expect(curriedAdd(1, 2, 3)).toBe(6);
  });

  test('should return the result when arguments are provided in multiple calls', () => {
    expect(curriedAdd(1)(2)(3)).toBe(6);
    expect(curriedAdd(1, 2)(3)).toBe(6);
    expect(curriedAdd(1)(2, 3)).toBe(6);
  });

  test('should work with functions having no arguments', () => {
    const greet = () => 'Hello';
    const curriedGreet = curry(greet);
    expect(curriedGreet()).toBe('Hello');
  });

  test('should work with functions having one argument', () => {
    const identity = (a) => a;
    const curriedIdentity = curry(identity);
    expect(curriedIdentity(5)).toBe(5);
  });

  test('should preserve context', () => {
    const obj = {
      name: 'Test',
      greet: function(greeting, punctuation) {
        return `${greeting}, ${this.name}${punctuation}`;
      },
    };
    const curriedGreet = curry(obj.greet);

    expect(curriedGreet.call(obj, 'Hi')('!')).toBe('Hi, Test!');
    expect(curriedGreet('Hello').call(obj, '.')).toBe('Hello, Test.');
  });
});
