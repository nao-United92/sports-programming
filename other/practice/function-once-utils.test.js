import once from './function-once-utils';

describe('once', () => {
  test('should only invoke the function once', () => {
    const spy = jest.fn();
    const initialize = once(spy);

    initialize();
    initialize();
    initialize();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('should return the value of the first invocation', () => {
    let num = 5;
    const canOnlyDoubleOnce = once(() => (num *= 2));

    expect(canOnlyDoubleOnce()).toBe(10);
    expect(canOnlyDoubleOnce()).toBe(10);
    expect(num).toBe(10);
  });

  test('should pass arguments to the original function', () => {
    const add = (a, b) => a + b;
    const addOnce = once(add);

    expect(addOnce(3, 4)).toBe(7);
    expect(addOnce(5, 6)).toBe(7);
  });
});