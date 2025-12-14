import findLastIndex from './array-find-last-index-utils';

describe('findLastIndex', () => {
  test('should find the last index of an element in an array', () => {
    const array = [1, 2, 3, 2, 1];
    expect(findLastIndex(array, (x) => x === 2)).toBe(3);
  });

  test('should return -1 if element is not found', () => {
    const array = [1, 2, 3, 2, 1];
    expect(findLastIndex(array, (x) => x === 4)).toBe(-1);
  });

  test('should work with an empty array', () => {
    expect(findLastIndex([], (x) => x === 1)).toBe(-1);
  });

  test('should work with a complex predicate', () => {
    const array = [{ a: 1 }, { a: 2 }, { a: 1 }];
    expect(findLastIndex(array, (x) => x.a === 1)).toBe(2);
  });
});
