import { forIn } from './object-for-in-utils.js';

describe('forIn', () => {
  function Foo() {
    this.a = 1;
  }
  Foo.prototype.b = 2;

  it('should iterate over own and inherited properties', () => {
    const iteratee = jest.fn();
    forIn(new Foo(), iteratee);
    expect(iteratee).toHaveBeenCalledWith(1, 'a', expect.any(Object));
    expect(iteratee).toHaveBeenCalledWith(2, 'b', expect.any(Object));
    expect(iteratee).toHaveBeenCalledTimes(2);
  });

  it('should return the original object', () => {
    const object = { 'a': 1 };
    const result = forIn(object, () => {});
    expect(result).toBe(object);
  });

  it('should handle null and undefined input', () => {
    const iteratee = jest.fn();
    expect(forIn(null, iteratee)).toBeNull();
    expect(forIn(undefined, iteratee)).toBeUndefined();
    expect(iteratee).not.toHaveBeenCalled();
  });
});
