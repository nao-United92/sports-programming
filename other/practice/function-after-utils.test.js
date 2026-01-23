import { after } from './function-after-utils.js';

describe('after', () => {
  it('should invoke the function after `n` calls', () => {
    const log = jest.fn();
    const initialize = after(3, log);

    initialize();
    expect(log).not.toHaveBeenCalled();
    initialize();
    expect(log).not.toHaveBeenCalled();
    initialize('last call');
    expect(log).toHaveBeenCalledTimes(1);
    expect(log).toHaveBeenCalledWith('last call');
  });

  it('should return undefined before `n` calls', () => {
    const func = () => 'invoked';
    const throttled = after(2, func);

    expect(throttled()).toBeUndefined();
    expect(throttled()).toBe('invoked');
    expect(throttled()).toBe('invoked'); // Subsequent calls also return the result of the last invocation
  });

  it('should pass the last arguments to the invoked function', () => {
    const sum = jest.fn((a, b) => a + b);
    const calculateAfterTwo = after(2, sum);

    calculateAfterTwo(1, 2);
    calculateAfterTwo(3, 4);
    expect(sum).toHaveBeenCalledWith(3, 4);
  });

  it('should preserve `this` context', () => {
    const obj = {
      count: 0,
      increment: function() {
        this.count++;
      },
    };
    const incrementAfterThree = after(3, obj.increment);

    incrementAfterThree.call(obj);
    incrementAfterThree.call(obj);
    incrementAfterThree.call(obj);
    expect(obj.count).toBe(1);
  });

  it('should throw an error if func is not a function', () => {
    expect(() => after(1, null)).toThrow('Expected a function');
    expect(() => after(1, undefined)).toThrow('Expected a function');
    expect(() => after(1, 'string')).toThrow('Expected a function');
  });
});
