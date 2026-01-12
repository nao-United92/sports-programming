import { remove } from './array-remove-util';

describe('remove', () => {
  it('should remove elements from an array for which the predicate function returns false', () => {
    const array = [1, 2, 3, 4, 5];
    const evens = remove(array, (n) => n % 2 === 0);
    expect(evens).toEqual([2, 4]);
  });

  it('should return an empty array if no elements match the predicate', () => {
    const array = [1, 3, 5];
    const evens = remove(array, (n) => n % 2 === 0);
    expect(evens).toEqual([]);
  });

  it('should return the same array if all elements match the predicate', () => {
    const array = [2, 4, 6];
    const evens = remove(array, (n) => n % 2 === 0);
    expect(evens).toEqual([2, 4, 6]);
  });

  it('should return an empty array for an empty array', () => {
    expect(remove([], (n) => n % 2 === 0)).toEqual([]);
  });

  it('should return an empty array for non-array values', () => {
    expect(remove(null, (n) => n % 2 === 0)).toEqual([]);
    expect(remove(undefined, (n) => n % 2 === 0)).toEqual([]);
  });
});
