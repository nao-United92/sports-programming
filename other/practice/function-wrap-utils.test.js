import { wrap } from './function-wrap-utils.js';

describe('wrap', () => {
  it('should wrap a function with another function', () => {
    const greet = (name) => `Hello, ${name}!`;
    const wrapper = (func, name) => `Wrapper says: ${func(name)}`;
    const wrappedGreet = wrap(greet, wrapper);

    expect(wrappedGreet('Alice')).toBe('Wrapper says: Hello, Alice!');
  });

  it('should pass additional arguments to the wrapper', () => {
    const sum = (a, b) => a + b;
    const wrapper = (func, a, b, extra) => `Result: ${func(a, b)}, Extra: ${extra}`;
    const wrappedSum = wrap(sum, wrapper);

    expect(wrappedSum(1, 2, 'data')).toBe('Result: 3, Extra: data');
  });

  it('should preserve `this` context', () => {
    const obj = {
      value: 10,
      add: function(num) {
        return this.value + num;
      },
    };
    const wrapper = function(func, num) {
      return func.call(this, num) * 2;
    };
    const wrappedAdd = wrap(obj.add, wrapper);

    const result = wrappedAdd.call({ value: 5 }, 3);
    expect(result).toBe(16); // (5 + 3) * 2
  });

  it('should allow the wrapper to completely change the behavior', () => {
    const originalFunction = () => 'Original';
    const newBehaviorWrapper = () => 'New Behavior';
    const wrappedFunction = wrap(originalFunction, newBehaviorWrapper);

    expect(wrappedFunction()).toBe('New Behavior');
  });

  it('should handle no arguments correctly for the wrapped function', () => {
    const sayHello = () => 'Hello';
    const wrapper = (func) => `---${func()}---`;
    const wrappedSayHello = wrap(sayHello, wrapper);

    expect(wrappedSayHello()).toBe('---Hello---');
  });
});
