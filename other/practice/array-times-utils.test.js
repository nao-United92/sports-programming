import { times } from './array-times-utils.js';

describe('times', () => {
  it('should generate an array by calling the iteratee n times', () => {
    const result = times(5, (i) => i * 2);
    expect(result).toEqual([0, 2, 4, 6, 8]);
  });

  it('should return an empty array if n is 0', () => {
    expect(times(0, (i) => i)).toEqual([]);
  });

  it('should return an array of undefined if no iteratee is provided', () => {
    expect(times(3)).toEqual([0, 1, 2]);
  });

  it('should handle negative n by returning an empty array', () => {
    expect(times(-5, (i) => i)).toEqual([]);
  });

  it('should generate an array with custom iteratee output', () => {
    const result = times(3, () => 'hello');
    expect(result).toEqual(['hello', 'hello', 'hello']);
  });
});
