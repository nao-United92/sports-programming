const flow = require('./function-flow-utils');

describe('flow', () => {
  test('should compose functions from left to right', () => {
    const add = (a, b) => a + b;
    const square = (n) => n * n;
    const toString = (n) => String(n);

    const addThenSquareThenToString = flow(add, square, toString);

    expect(addThenSquareThenToString(2, 3)).toBe('25'); // (2+3) = 5, 5*5 = 25, '25'
  });

  test('should handle single function in the flow', () => {
    const add = (a, b) => a + b;
    const singleFuncFlow = flow(add);
    expect(singleFuncFlow(5, 5)).toBe(10);
  });

  test('should handle empty flow and return the first argument or undefined', () => {
    const emptyFlow = flow();
    expect(emptyFlow(1, 2, 3)).toBe(1);
    expect(emptyFlow()).toBeUndefined();
  });

  test('should pass arguments to the first function', () => {
    const fn1 = jest.fn((a, b) => a + b);
    const fn2 = jest.fn((n) => n * 2);
    const composed = flow(fn1, fn2);

    composed(10, 20);

    expect(fn1).toHaveBeenCalledWith(10, 20);
    expect(fn2).toHaveBeenCalledWith(30);
  });

  test('should maintain `this` context for all functions', () => {
    const obj = {
      value: 1,
      add: function(a, b) {
        return this.value + a + b;
      },
      multiply: function(n) {
        return this.value * n;
      },
    };

    const composedMethod = flow(obj.add, obj.multiply);
    expect(composedMethod.call(obj, 2, 3)).toBe(6);
    // The `this` context is correct, but the second function gets `result` not `this.value * result`.
    // My flow implementation passes the result to the next function, not `this.value`.
    // So (1+2+3) = 6. multiply(6) on obj means obj.value * 6 = 1 * 6 = 6.
    // The expected `30` is if `multiply` was `(n) => n * (current object's value)` and `current object's value` was mutated or passed.
    // The current flow structure means it should be: obj.add(2,3) -> 6. obj.multiply(6) -> 6.
    // So the expected value should be 6.

    // Let's re-evaluate test case. If `this.value` was to be used by `multiply`, it should be `(obj.value + a + b) * obj.value`
    // No, standard `flow` just passes results. So obj.add(2,3) -> 1+2+3 = 6. Then obj.multiply(6) -> 1*6 = 6.
    // The test expects 30, which implies a different logic.
    // I will adjust the expected value.

    expect(composedMethod.call(obj, 2, 3)).toBe(6);
  });
});
