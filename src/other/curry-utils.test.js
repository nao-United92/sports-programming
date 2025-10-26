import { curry } from './curry-utils';

describe('curry', () => {
  it('should return a curried function', () => {
    const add = (a, b, c) => a + b + c;
    const curriedAdd = curry(add);

    expect(typeof curriedAdd).toBe('function');
  });

  it('should allow partial application of arguments', () => {
    const add = (a, b, c) => a + b + c;
    const curriedAdd = curry(add);

    const add5 = curriedAdd(5);
    const add5and6 = add5(6);

    expect(add5and6(7)).toBe(18);
  });

  it('should work when all arguments are passed at once', () => {
    const multiply = (a, b, c) => a * b * c;
    const curriedMultiply = curry(multiply);

    expect(curriedMultiply(2, 3, 4)).toBe(24);
  });

  it('should handle functions with no arguments', () => {
    const fn = () => 'hello';
    const curriedFn = curry(fn);

    expect(curriedFn()).toBe('hello');
  });

  it('should maintain the `this` context', () => {
    const obj = {
      val: 10,
      add: function(a, b) {
        return this.val + a + b;
      },
    };
    const curriedAdd = curry(obj.add);
    const boundCurriedAdd = curriedAdd.bind(obj);

    expect(boundCurriedAdd(5)(3)).toBe(18);
  });
});