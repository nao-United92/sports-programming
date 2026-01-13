
import { uniqByPredicate } from './array-uniq-by-predicate-utils.js';

describe('uniqByPredicate', () => {
  it('should return unique elements based on a numerical predicate', () => {
    const arr = [{ id: 1, value: 'a' }, { id: 2, value: 'b' }, { id: 1, value: 'c' }, { id: 3, value: 'd' }];
    const predicate = (item) => item.id;
    expect(uniqByPredicate(arr, predicate)).toEqual([{ id: 1, value: 'a' }, { id: 2, value: 'b' }, { id: 3, value: 'd' }]);
  });

  it('should return unique elements based on a string predicate', () => {
    const arr = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Alice', age: 35 }];
    const predicate = (item) => item.name;
    expect(uniqByPredicate(arr, predicate)).toEqual([{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    const predicate = (item) => item.id;
    expect(uniqByPredicate(arr, predicate)).toEqual([]);
  });

  it('should handle an array with all unique elements', () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const predicate = (item) => item.id;
    expect(uniqByPredicate(arr, predicate)).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  it('should handle an array with all duplicate elements', () => {
    const arr = [{ id: 1, value: 'a' }, { id: 1, value: 'b' }, { id: 1, value: 'c' }];
    const predicate = (item) => item.id;
    expect(uniqByPredicate(arr, predicate)).toEqual([{ id: 1, value: 'a' }]);
  });
});
