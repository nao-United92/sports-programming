import { isUniqueBy } from './array-is-unique-by-utils.js';

describe('isUniqueBy', () => {
  it('should return true if all elements are unique by a given function', () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
    expect(isUniqueBy(arr, (item) => item.id)).toBe(true);
  });

  it('should return false if there are duplicate elements by a given function', () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 1 }];
    expect(isUniqueBy(arr, (item) => item.id)).toBe(false);
  });

  it('should return true for an empty array', () => {
    expect(isUniqueBy([], (item) => item.id)).toBe(true);
  });

  it('should return true if all elements are unique by a given property name', () => {
    const arr = [{ id: 1, value: 'a' }, { id: 2, value: 'b' }];
    expect(isUniqueBy(arr, 'id')).toBe(true);
  });

  it('should return false if there are duplicate elements by a given property name', () => {
    const arr = [{ id: 1, value: 'a' }, { id: 2, value: 'b' }, { id: 1, value: 'c' }];
    expect(isUniqueBy(arr, 'id')).toBe(false);
  });
});
