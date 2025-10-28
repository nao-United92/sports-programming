import { curry } from './function-curry-utils';

describe('curry', () => {
  let add;
  let curriedAdd;

  beforeEach(() => {
    add = (a, b, c) => a + b + c;
  });

  it('should return a function when not all arguments are provided', () => {
    curriedAdd = curry(add);
    expect(typeof curriedAdd(1)).toBe('function');
    expect(typeof curriedAdd(1, 2)).toBe('function');
  });

  it('should return the result when all arguments are provided at once', () => {
    curriedAdd = curry(add);
    expect(curriedAdd(1, 2, 3)).toBe(6);
  });

  it('should return the result when arguments are provided in multiple calls', () => {
    curriedAdd = curry(add);
    const add1 = curriedAdd(1);
    const add1and2 = add1(2);
    expect(add1and2(3)).toBe(6);
  });

  it('should handle arguments provided in mixed calls', () => {
    curriedAdd = curry(add);
    expect(curriedAdd(1)(2, 3)).toBe(6);
    expect(curriedAdd(1, 2)(3)).toBe(6);
  });

  it('should maintain the `this` context', () => {
    const obj = {
      x: 10,
      add: curry(function(a, b) {
        return this.x + a + b;
      }),
    };

    expect(obj.add(1)(2)).toBe(13);
    expect(obj.add(1, 2)).toBe(13);
  });

  it('should work with functions having no arguments', () => {
    const greet = curry(() => 'Hello');
    expect(greet()).toBe('Hello');
  });

  it('should work with functions having one argument', () => {
    const identity = curry(a => a);
    expect(identity(5)).toBe(5);
  });

  it('should throw an error if func is not a function', () => {
    expect(() => curry(null)).toThrow('Expected a function');
    expect(() => curry('not a function')).toThrow('Expected a function');
  });
});
