import { once } from './function-once-utils.js';

describe('once', () => {
  it('should invoke the function only once', () => {
    let count = 0;
    const increment = once(() => {
      count++;
      return count;
    });

    expect(increment()).toBe(1);
    expect(increment()).toBe(1);
    expect(increment()).toBe(1);
    expect(count).toBe(1);
  });

  it('should return the same result on subsequent calls', () => {
    const getValue = once((val) => val * 2);

    expect(getValue(5)).toBe(10);
    expect(getValue(10)).toBe(10); // Should still return 10 from the first call
    expect(getValue(20)).toBe(10);
  });

  it('should preserve the `this` context', () => {
    const obj = {
      value: 1,
      getValueOnce: once(function() {
        return this.value;
      })
    };

    expect(obj.getValueOnce()).toBe(1);
    obj.value = 2; // Change value after first call
    expect(obj.getValueOnce()).toBe(1); // Should still return 1
  });

  it('should pass arguments correctly on the first call', () => {
    const sumOnce = once((a, b) => a + b);

    expect(sumOnce(1, 2)).toBe(3);
    expect(sumOnce(10, 20)).toBe(3); // Arguments from subsequent calls are ignored
  });

  it('should work with functions that return undefined', () => {
    let called = false;
    const doSomethingOnce = once(() => {
      called = true;
    });

    expect(doSomethingOnce()).toBeUndefined();
    expect(called).toBe(true);
    called = false; // Reset for next call
    expect(doSomethingOnce()).toBeUndefined();
    expect(called).toBe(false); // Should not have been called again
  });
});