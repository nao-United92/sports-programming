import { curry } from './curry-practice.js';

describe('curry', () => {
  it('should curry a function with multiple arguments', () => {
    const add = (a, b, c) => a + b + c;
    const curriedAdd = curry(add);

    expect(curriedAdd(1)(2)(3)).toBe(6);
    expect(curriedAdd(1, 2)(3)).toBe(6);
    expect(curriedAdd(1)(2, 3)).toBe(6);
    expect(curriedAdd(1, 2, 3)).toBe(6);
  });

  it('should work with functions having no arguments', () => {
    const greet = () => 'Hello';
    const curriedGreet = curry(greet);
    expect(curriedGreet()).toBe('Hello');
  });

  it('should maintain the context', () => {
    const obj = {
      value: 10,
      add: curry(function(a) {
        return this.value + a;
      }),
    };

    expect(obj.add(5)).toBe(15);
  });
});
