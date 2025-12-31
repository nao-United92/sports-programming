import { times } from './array-times-utils.js';

describe('times', () => {
  it('should invoke the iteratee n times and return an array of results', () => {
    const square = (n) => n * n;
    expect(times(3, square)).toEqual([0, 1, 4]);
  });

  it('should pass the index as an argument to the iteratee', () => {
    const identity = (n) => n;
    expect(times(5, identity)).toEqual([0, 1, 2, 3, 4]);
  });

  it('should return an empty array if n is 0', () => {
    expect(times(0, () => 'hello')).toEqual([]);
  });

  it('should return an empty array if n is negative', () => {
    expect(times(-5, () => 'hello')).toEqual([]);
  });

  it('should handle iteratee that returns undefined', () => {
    expect(times(2, () => undefined)).toEqual([undefined, undefined]);
  });
});