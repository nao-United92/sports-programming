const { groupBy } = require('./collection-group-by-utils.js');

describe('groupBy', () => {
  test('should group a collection by a string iteratee', () => {
    const collection = [
      { 'dir': 'left', 'code': 97 },
      { 'dir': 'right', 'code': 100 }
    ];
    const result = groupBy(collection, 'dir');
    expect(result).toEqual({ 'left': [{ 'dir': 'left', 'code': 97 }], 'right': [{ 'dir': 'right', 'code': 100 }] });
  });

  test('should group a collection by a function iteratee', () => {
    const collection = [6.1, 4.2, 6.3];
    const result = groupBy(collection, Math.floor);
    expect(result).toEqual({ '4': [4.2], '6': [6.1, 6.3] });
  });

  test('should handle an empty collection', () => {
    const result = groupBy([], 'length');
    expect(result).toEqual({});
  });

  test('should group by length property', () => {
    const collection = ['one', 'two', 'three'];
    const result = groupBy(collection, 'length');
    expect(result).toEqual({ '3': ['one', 'two'], '5': ['three'] });
  });

  test('should handle collections with various data types', () => {
    const collection = [
      { group: 'a', value: 1 },
      { group: 'b', value: 2 },
      { group: 'a', value: 3 }
    ];
    const result = groupBy(collection, 'group');
    expect(result).toEqual({
      'a': [{ group: 'a', value: 1 }, { group: 'a', value: 3 }],
      'b': [{ group: 'b', value: 2 }]
    });
  });
});
