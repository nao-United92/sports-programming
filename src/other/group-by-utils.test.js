import { groupBy } from './group-by-utils';

describe('groupBy', () => {
  it('should group by a function iteratee', () => {
    const collection = [6.1, 4.2, 6.3];
    const result = groupBy(collection, Math.floor);
    expect(result).toEqual({ '4': [4.2], '6': [6.1, 6.3] });
  });

  it('should group by a string iteratee (property name)', () => {
    const collection = [
      { 'dir': 'left', 'code': 97 },
      { 'dir': 'right', 'code': 100 }
    ];
    const result = groupBy(collection, 'dir');
    expect(result).toEqual({
      'left': [{ 'dir': 'left', 'code': 97 }],
      'right': [{ 'dir': 'right', 'code': 100 }]
    });
  });

  it('should group by length property', () => {
    const collection = ['one', 'two', 'three'];
    const result = groupBy(collection, 'length');
    expect(result).toEqual({ '3': ['one', 'two'], '5': ['three'] });
  });

  it('should return an empty object for null or undefined collections', () => {
    expect(groupBy(null, Math.floor)).toEqual({});
    expect(groupBy(undefined, 'length')).toEqual({});
  });

  it('should handle an empty collection', () => {
    expect(groupBy([], 'length')).toEqual({});
  });

  it('should handle various data types as keys', () => {
    const collection = [
      { group: 'a', value: 1 },
      { group: 'b', value: 2 },
      { group: 'a', value: 3 }
    ];
    const result = groupBy(collection, item => item.group);
    expect(result).toEqual({
      'a': [{ group: 'a', value: 1 }, { group: 'a', value: 3 }],
      'b': [{ group: 'b', value: 2 }]
    });
  });
});
