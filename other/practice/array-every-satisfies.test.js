import { arrayEverySatisfies } from './array-every-satisfies';

describe('arrayEverySatisfies', () => {
  const numbers = [1, 2, 3, 4, 5];
  const greaterThanZero = (num) => num > 0;
  const lessThanTen = (num) => num < 10;
  const isEven = (num) => num % 2 === 0;

  it('should return true if all elements satisfy the predicate', () => {
    expect(arrayEverySatisfies(numbers, greaterThanZero)).toBe(true);
    expect(arrayEverySatisfies(numbers, lessThanTen)).toBe(true);
  });

  it('should return false if any element does not satisfy the predicate', () => {
    expect(arrayEverySatisfies(numbers, isEven)).toBe(false);
    expect(arrayEverySatisfies([1, 3, 5, 7, 9], isEven)).toBe(false);
  });

  it('should return true for an empty array', () => {
    expect(arrayEverySatisfies([], greaterThanZero)).toBe(true);
  });

  it('should handle arrays with a single element', () => {
    expect(arrayEverySatisfies([5], (num) => num === 5)).toBe(true);
    expect(arrayEverySatisfies([5], (num) => num === 1)).toBe(false);
  });

  it('should pass index and array to the predicate', () => {
    const array = [10, 20, 30];
    const predicate = jest.fn((val, idx, arr) => {
      expect(arr).toEqual(array);
      return val === (idx + 1) * 10;
    });

    expect(arrayEverySatisfies(array, predicate)).toBe(true);
    expect(predicate).toHaveBeenCalledTimes(array.length);
  });

  it('should throw TypeError if first argument is not an array', () => {
    expect(() => arrayEverySatisfies(null, greaterThanZero)).toThrow(TypeError);
    expect(() => arrayEverySatisfies(undefined, greaterThanZero)).toThrow(TypeError);
    expect(() => arrayEverySatisfies('string', greaterThanZero)).toThrow(TypeError);
    expect(() => arrayEverySatisfies({}, greaterThanZero)).toThrow(TypeError);
  });

  it('should throw TypeError if second argument is not a function', () => {
    expect(() => arrayEverySatisfies(numbers, null)).toThrow(TypeError);
    expect(() => arrayEverySatisfies(numbers, 'function')).toThrow(TypeError);
    expect(() => arrayEverySatisfies(numbers, 123)).toThrow(TypeError);
  });
});
