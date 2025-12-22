import { once } from './function-once-utils';

describe('once', () => {
  it('should only call the function once', () => {
    const mockFn = jest.fn();
    const onceFn = once(mockFn);
    onceFn();
    onceFn();
    onceFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should return the result of the first call', () => {
    const fn = (a, b) => a + b;
    const onceFn = once(fn);
    expect(onceFn(1, 2)).toBe(3);
    expect(onceFn(3, 4)).toBe(3);
  });

  it('should maintain the context of the original function', () => {
    const obj = {
      name: 'test',
      greet: once(function() {
        return `hello ${this.name}`;
      })
    };
    expect(obj.greet()).toBe('hello test');
  });
});
