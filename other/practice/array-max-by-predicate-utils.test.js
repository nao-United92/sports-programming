
import { maxByPredicate } from './array-max-by-predicate-utils.js';

describe('maxByPredicate', () => {
  it('should return the element with the maximum value based on a numerical predicate', () => {
    const arr = [{ id: 1, value: 10 }, { id: 2, value: 30 }, { id: 3, value: 20 }];
    const predicate = (item) => item.value;
    expect(maxByPredicate(arr, predicate)).toEqual({ id: 2, value: 30 });
  });

  it('should return the element with the maximum value based on a string length predicate', () => {
    const arr = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
    const predicate = (item) => item.name.length;
    expect(maxByPredicate(arr, predicate)).toEqual({ name: 'Charlie' });
  });

  it('should return undefined for an empty array', () => {
    const arr = [];
    const predicate = (item) => item.value;
    expect(maxByPredicate(arr, predicate)).toBeUndefined();
  });

  it('should handle an array with one element', () => {
    const arr = [{ id: 1, value: 10 }];
    const predicate = (item) => item.value;
    expect(maxByPredicate(arr, predicate)).toEqual({ id: 1, value: 10 });
  });

  it('should return the first element if multiple elements have the same maximum value', () => {
    const arr = [{ id: 1, value: 30 }, { id: 2, value: 10 }, { id: 3, value: 30 }];
    const predicate = (item) => item.value;
    expect(maxByPredicate(arr, predicate)).toEqual({ id: 1, value: 30 });
  });
});
