const { withoutBy } = require('./array-without-by-utils');

describe('withoutBy', () => {
  test('should exclude values based on an iteratee function', () => {
    const array = [2.1, 1.2, 3.3];
    const values = [1.5, 2.4];
    const iteratee = Math.floor;
    expect(withoutBy(array, values, iteratee)).toEqual([3.3]);
  });

  test('should exclude values based on a property name', () => {
    const array = [{ 'x': 1 }, { 'x': 2 }];
    const values = [{ 'x': 1 }];
    const iteratee = 'x';
    expect(withoutBy(array, values, iteratee)).toEqual([{ 'x': 2 }]);
  });

  test('should return the original array if values to exclude are empty', () => {
    const array = [{ 'x': 1 }, { 'x': 2 }];
    expect(withoutBy(array, [], 'x')).toEqual(array);
  });

  test('should return an empty array if the input array is not an array', () => {
    expect(withoutBy(null, [1, 2], Math.floor)).toEqual([]);
  });

  test('should handle complex objects', () => {
    const array = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Cherry' }
    ];
    const values = [{ id: 2, name: 'Banana' }];
    expect(withoutBy(array, values, 'id')).toEqual([
      { id: 1, name: 'Apple' },
      { id: 3, name: 'Cherry' }
    ]);
  });

  test('should work with a function that returns a nested property', () => {
    const array = [
      { fruit: { name: 'apple', color: 'red' } },
      { fruit: { name: 'banana', color: 'yellow' } }
    ];
    const values = [{ fruit: { name: 'apple' } }];
    const iteratee = item => item.fruit.name;
    expect(withoutBy(array, values, iteratee)).toEqual([
      { fruit: { name: 'banana', color: 'yellow' } }
    ]);
  });
});
