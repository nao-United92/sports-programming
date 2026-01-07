const { groupBy } = require('./array-group-by-utils');

describe('groupBy', () => {
  test('should group an array of numbers by a function', () => {
    expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
      '4': [4.2],
      '6': [6.1, 6.3],
    });
  });

  test('should group an array of objects by a property name string', () => {
    const users = [
      { id: 1, name: 'Alice', active: true },
      { id: 2, name: 'Bob', active: false },
      { id: 3, name: 'Charlie', active: true },
    ];
    expect(groupBy(users, 'active')).toEqual({
      'true': [
        { id: 1, name: 'Alice', active: true },
        { id: 3, name: 'Charlie', active: true },
      ],
      'false': [{ id: 2, name: 'Bob', active: false }],
    });
  });

  test('should handle an empty array, returning an empty object', () => {
    expect(groupBy([], 'id')).toEqual({});
  });

  test('should return an empty object for non-array inputs', () => {
    expect(groupBy(null, 'id')).toEqual({});
    expect(groupBy(undefined, 'id')).toEqual({});
    expect(groupBy({}, 'id')).toEqual({});
  });

  test('should group by a complex iteratee function', () => {
    const data = [
      { category: 'A', value: 10 },
      { category: 'B', value: 20 },
      { category: 'A', value: 30 },
    ];
    const iteratee = item => item.category + '-' + (item.value > 15 ? 'high' : 'low');
    expect(groupBy(data, iteratee)).toEqual({
      'A-low': [{ category: 'A', value: 10 }],
      'B-high': [{ category: 'B', value: 20 }],
      'A-high': [{ category: 'A', value: 30 }],
    });
  });

  test('should group items with undefined keys when iteratee returns undefined', () => {
    const items = [
      { a: 1 },
      { b: 2 },
      { a: 3 },
    ];
    expect(groupBy(items, 'b')).toEqual({
      'undefined': [{ a: 1 }, { a: 3 }],
      '2': [{ b: 2 }]
    });
  });
});
