
import { groupByCustom } from './array-group-by-custom-utils.js';

describe('groupByCustom', () => {
  it('should group elements by a numerical predicate', () => {
    const arr = [{ id: 1, type: 'A' }, { id: 2, type: 'B' }, { id: 3, type: 'A' }];
    const predicate = (item) => item.type;
    expect(groupByCustom(arr, predicate)).toEqual({
      A: [{ id: 1, type: 'A' }, { id: 3, type: 'A' }],
      B: [{ id: 2, type: 'B' }],
    });
  });

  it('should group elements by a string length predicate', () => {
    const arr = ['apple', 'banana', 'cat', 'dog'];
    const predicate = (item) => item.length;
    expect(groupByCustom(arr, predicate)).toEqual({
      5: ['apple'],
      6: ['banana'],
      3: ['cat', 'dog'],
    });
  });

  it('should handle an empty array', () => {
    const arr = [];
    const predicate = (item) => item.id;
    expect(groupByCustom(arr, predicate)).toEqual({});
  });

  it('should handle a predicate that returns different types', () => {
    const arr = [1, 'hello', 2, 'world'];
    const predicate = (item) => typeof item;
    expect(groupByCustom(arr, predicate)).toEqual({
      number: [1, 2],
      string: ['hello', 'world'],
    });
  });

  it('should handle a predicate that returns boolean values', () => {
    const arr = [1, 2, 3, 4, 5];
    const predicate = (item) => item % 2 === 0;
    expect(groupByCustom(arr, predicate)).toEqual({
      false: [1, 3, 5],
      true: [2, 4],
    });
  });
});
