import { once } from './once-utils.js';

describe('once', () => {
  let originalFunc;

  beforeEach(() => {
    originalFunc = jest.fn();
  });

  test('should return a function', () => {
    const onceFunc = once(originalFunc);
    expect(typeof onceFunc).toBe('function');
  });

  test('should call the original function only on the first call', () => {
    const onceFunc = once(originalFunc);
    onceFunc();
    onceFunc();
    onceFunc();
    expect(originalFunc).toHaveBeenCalledTimes(1);
  });

  test('should pass arguments to the original function', () => {
    const onceFunc = once(originalFunc);
    onceFunc(1, 'a', true);
    expect(originalFunc).toHaveBeenCalledWith(1, 'a', true);
  });

  test('should return the result of the first invocation on all subsequent calls', () => {
    let counter = 0;
    const func = () => ++counter;
    const onceFunc = once(func);

    const result1 = onceFunc();
    const result2 = onceFunc();
    const result3 = onceFunc();

    expect(result1).toBe(1);
    expect(result2).toBe(1);
    expect(result3).toBe(1);
  });

  test('should maintain the context of the original function', () => {
    const obj = {
      counter: 0,
      increment: once(function() {
        this.counter++;
      })
    };

    obj.increment();
    obj.increment();

    expect(obj.counter).toBe(1);
  });
});
