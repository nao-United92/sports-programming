const { spyOn } = require('./function-spy-utils.js');

describe('spyOn', () => {
  test('should return a function', () => {
    const original = () => {};
    const spied = spyOn(original);
    expect(typeof spied).toBe('function');
  });

  test('should call the original function with the correct arguments', () => {
    let result = 0;
    const add = (a, b) => {
      result = a + b;
      return result;
    };
    const spiedAdd = spyOn(add);
    const returnValue = spiedAdd(2, 3);

    expect(result).toBe(5);
    expect(returnValue).toBe(5);
  });

  test('should record the arguments of each call', () => {
    const original = () => {};
    const spied = spyOn(original);

    spied(1, 2);
    spied('a', 'b', 'c');

    expect(spied.calls).toEqual([
      [1, 2],
      ['a', 'b', 'c']
    ]);
  });

  test('should correctly report the call count', () => {
    const original = () => {};
    const spied = spyOn(original);

    expect(spied.callCount).toBe(0);
    spied();
    expect(spied.callCount).toBe(1);
    spied();
    spied();
    expect(spied.callCount).toBe(3);
  });

  test('should preserve `this` context when called with .call or .apply', () => {
    const obj = {
      value: 10,
      method: function(n) {
        return this.value + n;
      }
    };
    const spiedMethod = spyOn(obj.method);
    const result = spiedMethod.call(obj, 5); // Explicitly set `this`

    expect(result).toBe(15);
    expect(spiedMethod.callCount).toBe(1);
    expect(spiedMethod.calls[0]).toEqual([5]);
  });
});
