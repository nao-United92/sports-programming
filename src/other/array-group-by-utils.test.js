import { groupBy } from './array-group-by-utils';

describe('groupBy', () => {
  it('should group by a given iteratee function', () => {
    const array = [6.1, 4.2, 6.3];
    const result = groupBy(array, Math.floor);
    expect(result).toEqual({ '4': [4.2], '6': [6.1, 6.3] });
  });

  it('should group by a given property name', () => {
    const array = [
      { name: 'Alice', age: 20 },
      { name: 'Bob', age: 20 },
      { name: 'Charlie', age: 30 }
    ];
    const result = groupBy(array, 'age');
    expect(result).toEqual({
      '20': [{ name: 'Alice', age: 20 }, { name: 'Bob', age: 20 }],
      '30': [{ name: 'Charlie', age: 30 }]
    });
  });

  it('should return an empty object for an empty array', () => {
    expect(groupBy([], 'length')).toEqual({});
  });

  it('should work with string values', () => {
    const array = ['one', 'two', 'three'];
    const result = groupBy(array, 'length');
    expect(result).toEqual({ '3': ['one', 'two'], '5': ['three'] });
  });
});
