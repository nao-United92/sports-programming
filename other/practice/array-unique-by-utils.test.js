import { uniqueBy } from './array-unique-by-utils';

describe('uniqueBy', () => {
  it('should return unique elements based on the iteratee function', () => {
    const array = [{ id: 1, value: 'a' }, { id: 2, value: 'b' }, { id: 3, value: 'a' }];
    expect(uniqueBy(array, item => item.value)).toEqual([{ id: 1, value: 'a' }, { id: 2, value: 'b' }]);
  });

  it('should work with Math.floor on numbers', () => {
    const array = [1.2, 1.5, 2.1, 3.8, 2.9];
    expect(uniqueBy(array, Math.floor)).toEqual([1.2, 2.1, 3.8]);
  });

  it('should return an empty array for invalid input', () => {
    expect(uniqueBy(null, Math.floor)).toEqual([]);
    expect(uniqueBy(undefined, item => item)).toEqual([]);
  });

  it('should handle an empty array input', () => {
    expect(uniqueBy([], item => item)).toEqual([]);
  });

  it('should not mutate the original array', () => {
    const originalArray = [{ id: 1 }, { id: 2 }, { id: 1 }];
    uniqueBy(originalArray, item => item.id);
    expect(originalArray).toEqual([{ id: 1 }, { id: 2 }, { id: 1 }]);
  });
});