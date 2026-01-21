import uniqueElements from './array-unique-elements.js';

describe('uniqueElements', () => {
  it('should remove duplicate elements from an array', () => {
    const array = [1, 2, 2, 3, 4, 4, 5];
    expect(uniqueElements(array)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with no duplicates', () => {
    const array = [1, 2, 3, 4, 5];
    expect(uniqueElements(array)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an empty array', () => {
    expect(uniqueElements([])).toEqual([]);
  });

  it('should handle an array with various data types', () => {
    const array = [1, 'hello', 1, 'world', 'hello'];
    expect(uniqueElements(array)).toEqual([1, 'hello', 'world']);
  });
});
