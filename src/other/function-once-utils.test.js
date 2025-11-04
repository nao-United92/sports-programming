
import { once } from './function-once-utils.js';

describe('once', () => {
  test('should only invoke the function once', () => {
    const myFunc = jest.fn();
    const onceFunc = once(myFunc);

    onceFunc();
    onceFunc();
    onceFunc();

    expect(myFunc).toHaveBeenCalledTimes(1);
  });

  test('should return the value of the first invocation', () => {
    let i = 0;
    const myFunc = () => {
      i++;
      return i;
    };
    const onceFunc = once(myFunc);

    const result1 = onceFunc();
    const result2 = onceFunc();
    const result3 = onceFunc();

    expect(result1).toBe(1);
    expect(result2).toBe(1);
    expect(result3).toBe(1);
  });

  test('should pass arguments to the original function on the first call', () => {
    const myFunc = jest.fn((a, b) => a + b);
    const onceFunc = once(myFunc);

    const result = onceFunc(3, 4);

    expect(myFunc).toHaveBeenCalledWith(3, 4);
    expect(result).toBe(7);

    // Subsequent calls should not trigger the function again
    onceFunc(5, 6);
    expect(myFunc).toHaveBeenCalledTimes(1);
  });
});
