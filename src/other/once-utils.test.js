import { once } from './once-utils.js';

describe('once', () => {
  test('should call the original function only once', () => {
    const myMock = jest.fn();
    const onceFn = once(myMock);

    onceFn();
    onceFn();
    onceFn();

    expect(myMock).toHaveBeenCalledTimes(1);
  });

  test('should return the result of the first call on subsequent calls', () => {
    let i = 0;
    const func = () => ++i;
    const onceFn = once(func);

    const result1 = onceFn();
    const result2 = onceFn();
    const result3 = onceFn();

    expect(result1).toBe(1);
    expect(result2).toBe(1);
    expect(result3).toBe(1);
  });

  test('should pass arguments to the original function', () => {
    const myMock = jest.fn();
    const onceFn = once(myMock);

    onceFn(1, 2, 3);
    onceFn(4, 5, 6); // This call should be ignored

    expect(myMock).toHaveBeenCalledWith(1, 2, 3);
    expect(myMock).not.toHaveBeenCalledWith(4, 5, 6);
  });

  test('should maintain the `this` context', () => {
    const myMock = jest.fn(function() { return this.value; });
    const context = { value: 42, onceFn: once(myMock) };

    const result = context.onceFn();

    expect(myMock).toHaveBeenCalledTimes(1);
    expect(result).toBe(42);
  });
});