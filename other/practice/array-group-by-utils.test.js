import { groupBy } from './array-group-by-utils.js';

describe('groupBy', () => {
  it('should group elements by a given iteratee', () => {
    const array = [6.1, 4.2, 6.3];
    const result = groupBy(array, Math.floor);
    expect(result).toEqual({ '4': [4.2], '6': [6.1, 6.3] });
  });

  it('should group elements by a string property', () => {
    const array = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 25 },
    ];
    const result = groupBy(array, item => item.age);
    expect(result).toEqual({
      '25': [
        { name: 'Alice', age: 25 },
        { name: 'Charlie', age: 25 },
      ],
      '30': [{ name: 'Bob', age: 30 }],
    });
  });

  it('should return an empty object for an empty array', () => {
    const array = [];
    const result = groupBy(array, item => item);
    expect(result).toEqual({});
  });

  it('should handle various data types as keys', () => {
    const array = ['one', 'two', 'three'];
    const result = groupBy(array, 'length');
    expect(result).toEqual({ '3': ['one', 'two'], '5': ['three'] });
  });
});