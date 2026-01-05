import tap from './function-tap-utils';

describe('tap', () => {
  test('should return the original value', () => {
    const value = 10;
    const interceptor = jest.fn();
    expect(tap(value, interceptor)).toBe(value);
  });

  test('should call the interceptor with the value', () => {
    const value = 'hello';
    const interceptor = jest.fn();
    tap(value, interceptor);
    expect(interceptor).toHaveBeenCalledTimes(1);
    expect(interceptor).toHaveBeenCalledWith(value);
  });

  test('should work with complex values', () => {
    const obj = { a: 1, b: 2 };
    const interceptor = jest.fn();
    expect(tap(obj, interceptor)).toBe(obj); // Ensure reference equality
    expect(interceptor).toHaveBeenCalledWith(obj);
  });

  test('should ignore the return value of the interceptor', () => {
    const value = 5;
    const interceptor = jest.fn(() => 'ignored');
    expect(tap(value, interceptor)).toBe(value);
  });

  test('should allow for side effects in the interceptor', () => {
    let sideEffect = 0;
    const value = 3;
    const interceptor = jest.fn((val) => {
      sideEffect = val * 2;
    });
    tap(value, interceptor);
    expect(sideEffect).toBe(6);
  });

  test('should throw an error if interceptor is not a function', () => {
    expect(() => tap(1, null)).toThrow(TypeError);
    expect(() => tap(1, 'not a function')).toThrow(TypeError);
    expect(() => tap(1, {})).toThrow(TypeError);
  });
});
