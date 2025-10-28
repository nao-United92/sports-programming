import { tap } from './function-tap-utils';

describe('tap', () => {
  it('should invoke the interceptor with the value and return the value', () => {
    const interceptor = jest.fn();
    const value = 123;
    const result = tap(value, interceptor);

    expect(interceptor).toHaveBeenCalledTimes(1);
    expect(interceptor).toHaveBeenCalledWith(value);
    expect(result).toBe(value);
  });

  it('should work with different types of values', () => {
    const interceptor = jest.fn();

    const obj = { a: 1 };
    expect(tap(obj, interceptor)).toBe(obj);
    expect(interceptor).toHaveBeenCalledWith(obj);

    const arr = [1, 2];
    expect(tap(arr, interceptor)).toBe(arr);
    expect(interceptor).toHaveBeenCalledWith(arr);

    const str = 'hello';
    expect(tap(str, interceptor)).toBe(str);
    expect(interceptor).toHaveBeenCalledWith(str);
  });

  it('should allow for side effects within the interceptor', () => {
    let sideEffect = 0;
    const increment = (val) => { sideEffect += val; };
    const value = 5;

    const result = tap(value, increment);

    expect(result).toBe(value);
    expect(sideEffect).toBe(5);
  });

  it('should throw an error if interceptor is not a function', () => {
    expect(() => tap(1, null)).toThrow('Expected a function');
    expect(() => tap(1, 'not a function')).toThrow('Expected a function');
  });

  it('should not modify the original value', () => {
    const obj = { a: 1 };
    const interceptor = (val) => { val.b = 2; };
    const result = tap(obj, interceptor);

    expect(result).toBe(obj);
    expect(obj).toEqual({ a: 1, b: 2 }); // Interceptor modified the object, but tap returned the original reference
  });
});
