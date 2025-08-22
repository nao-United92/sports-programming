import { iteratee } from './function-iteratee-utils';

describe('iteratee', () => {
  it('should return the function itself if it is a function', () => {
    const func = (x) => x * 2;
    expect(iteratee(func)).toBe(func);
  });

  it('should return identity if func is null or undefined', () => {
    expect(iteratee(null)(5)).toBe(5);
    expect(iteratee(undefined)(10)).toBe(10);
  });

  it('should return a matches function if func is an object', () => {
    const predicate = iteratee({ a: 1, b: 2 });
    expect(predicate({ a: 1, b: 2, c: 3 })).toBe(true);
    expect(predicate({ a: 1, b: 3 })).toBe(false);
  });

  it('should return a property function if func is a string', () => {
    const getter = iteratee('a.b');
    expect(getter({ a: { b: 10 } })).toBe(10);
    expect(getter({ a: { c: 10 } })).toBeUndefined();
  });
});
