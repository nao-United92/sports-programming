import { once } from './once-utils.js';

describe('once', () => {
  test('should call the function only once', () => {
    const mockFunc = jest.fn(() => 'hello');
    const onceFunc = once(mockFunc);

    expect(onceFunc()).toBe('hello');
    expect(onceFunc()).toBe('hello');
    expect(onceFunc()).toBe('hello');

    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  test('should return the same result on subsequent calls', () => {
    let counter = 0;
    const increment = once(() => {
      counter++;
      return counter;
    });

    expect(increment()).toBe(1);
    expect(increment()).toBe(1);
    expect(increment()).toBe(1);
    expect(counter).toBe(1);
  });

  test('should pass arguments to the original function on the first call', () => {
    const mockFunc = jest.fn((a, b) => a + b);
    const onceFunc = once(mockFunc);

    expect(onceFunc(1, 2)).toBe(3);
    expect(mockFunc).toHaveBeenCalledWith(1, 2);
  });
});
