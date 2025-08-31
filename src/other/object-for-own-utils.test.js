import { forOwn } from './object-for-own-utils.js';

describe('forOwn', () => {
  function Foo() {
    this.a = 1;
  }
  Foo.prototype.b = 2;

  it('should iterate over own properties', () => {
    const iteratee = jest.fn();
    forOwn(new Foo(), iteratee);
    expect(iteratee).toHaveBeenCalledWith(1, 'a', expect.any(Object));
    expect(iteratee).not.toHaveBeenCalledWith(2, 'b', expect.any(Object));
    expect(iteratee).toHaveBeenCalledTimes(1);
  });

  it('should return the original object', () => {
    const object = { 'a': 1 };
    const result = forOwn(object, () => {});
    expect(result).toBe(object);
  });

  it('should handle null and undefined input', () => {
    const iteratee = jest.fn();
    expect(forOwn(null, iteratee)).toBeNull();
    expect(forOwn(undefined, iteratee)).toBeUndefined();
    expect(iteratee).not.toHaveBeenCalled();
  });
});
