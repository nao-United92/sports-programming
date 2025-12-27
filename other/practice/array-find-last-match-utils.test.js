import findLastMatch from './array-find-last-match-utils';

describe('findLastMatch', () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const objects = [
    { id: 1, value: 'a' },
    { id: 2, value: 'b' },
    { id: 3, value: 'a' },
    { id: 4, value: 'c' },
  ];

  it('should return the last element that satisfies the predicate function', () => {
    expect(findLastMatch(numbers, (num) => num % 2 === 0)).toBe(6);
  });

  it('should return undefined if no element satisfies the predicate', () => {
    expect(findLastMatch(numbers, (num) => num > 10)).toBeUndefined();
  });

  it('should return undefined for an empty array', () => {
    expect(findLastMatch([], (num) => num > 0)).toBeUndefined();
  });

  it('should return undefined if input array is not an array', () => {
    expect(findLastMatch(null, (num) => num > 0)).toBeUndefined();
    expect(findLastMatch(undefined, (num) => num > 0)).toBeUndefined();
  });

  it('should work with objects and complex predicates', () => {
    expect(findLastMatch(objects, (obj) => obj.value === 'a')).toEqual({
      id: 3,
      value: 'a',
    });
  });

  it('should pass index and array as arguments to the predicate', () => {
    const arr = [10, 20, 30];
    const predicate = jest.fn((val, idx, array) => {
      expect(array).toEqual(arr);
      return val === 20;
    });
    expect(findLastMatch(arr, predicate)).toBe(20);
    expect(predicate).toHaveBeenCalledTimes(2); // 30, then 20
  });

  it('should return undefined if predicate is not a function', () => {
    expect(findLastMatch(numbers, null)).toBeUndefined();
    expect(findLastMatch(numbers, 'string')).toBeUndefined();
  });
});