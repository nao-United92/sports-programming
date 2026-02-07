const { groupBy } = require('./array-grouping-creator');

describe('groupBy', () => {
  it('should group an array of objects by a property', () => {
    const people = [
      { name: 'Alice', age: 21 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 21 },
    ];
    const grouped = groupBy(people, 'age');
    expect(grouped).toEqual({
      21: [
        { name: 'Alice', age: 21 },
        { name: 'Charlie', age: 21 },
      ],
      25: [{ name: 'Bob', age: 25 }],
    });
  });

  it('should group an array of items by a function', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const grouped = groupBy(numbers, (n) => (n % 2 === 0 ? 'even' : 'odd'));
    expect(grouped).toEqual({
      odd: [1, 3, 5],
      even: [2, 4, 6],
    });
  });

  it('should return an empty object for an empty array', () => {
    expect(groupBy([], 'key')).toEqual({});
  });

  it('should handle keys that do not exist', () => {
    const arr = [{ a: 1 }, { b: 2 }];
    const grouped = groupBy(arr, 'c');
    expect(grouped).toEqual({
      undefined: [{ a: 1 }, { b: 2 }],
    });
  });
});
