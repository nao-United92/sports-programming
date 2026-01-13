
import { containsAllElements } from './array-contains-all-elements-utils.js';

describe('containsAllElements', () => {
  const mainArr = [1, 2, 3, 4, 5];

  it('should return true if the main array contains all specified values', () => {
    expect(containsAllElements(mainArr, [1, 3, 5])).toBe(true);
  });

  it('should return true if the values array is empty', () => {
    expect(containsAllElements(mainArr, [])).toBe(true);
  });

  it('should return true if all values are present, even with duplicates in valuesArr', () => {
    expect(containsAllElements(mainArr, [1, 3, 3])).toBe(true);
  });

  it('should return false if any value is missing', () => {
    expect(containsAllElements(mainArr, [1, 3, 6])).toBe(false);
  });

  it('should return false if the main array is empty and values array is not', () => {
    expect(containsAllElements([], [1])).toBe(false);
  });

  it('should handle arrays with different data types', () => {
    const mixedArr = [1, 'hello', true];
    expect(containsAllElements(mixedArr, ['hello', true])).toBe(true);
    expect(containsAllElements(mixedArr, [1, false])).toBe(false);
  });

  it('should return false if mainArr is null or undefined', () => {
    expect(containsAllElements(null, [1])).toBe(false);
    expect(containsAllElements(undefined, [1])).toBe(false);
  });

  it('should return false if valuesArr is null or undefined', () => {
    expect(containsAllElements(mainArr, null)).toBe(false);
    expect(containsAllElements(mainArr, undefined)).toBe(false);
  });
});
