import { curry, partial } from './function-transform-utils.js';

describe('curry', () => {
  const add = (a, b, c) => a + b + c;

  it('should curry a function', () => {
    const curriedAdd = curry(add);
    expect(curriedAdd(1)(2)(3)).toBe(6);
    expect(curriedAdd(1, 2)(3)).toBe(6);
    expect(curriedAdd(1)(2, 3)).toBe(6);
    expect(curriedAdd(1, 2, 3)).toBe(6);
  });

  it('should work with functions with fewer arguments', () => {
    const multiply = (a, b) => a * b;
    const curriedMultiply = curry(multiply);
    expect(curriedMultiply(2)(3)).toBe(6);
  });

  it('should preserve context', () => {
    const obj = { value: 1, add: curry(function(a, b) { return this.value + a + b; }) };
    expect(obj.add(2)(3)).toBe(6);
  });
});

describe('partial', () => {
  const greet = (greeting, name) => `${greeting}, ${name}!`;

  it('should partially apply arguments to a function', () => {
    const sayHello = partial(greet, 'Hello');
    expect(sayHello('John')).toBe('Hello, John!');
  });

  it('should apply arguments from both bound and remaining', () => {
    const sayHiTo = partial(greet, 'Hi', 'Jane');
    expect(sayHiTo()).toBe('Hi, Jane!');
  });

  it('should preserve context', () => {
    const obj = { value: 1, add: function(a, b) { return this.value + a + b; } };
    const addOne = partial(obj.add, 1);
    expect(addOne.call(obj, 2)).toBe(4);
  });
});
