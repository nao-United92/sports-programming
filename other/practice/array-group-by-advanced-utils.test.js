const { groupBy } = require('./array-group-by-advanced-utils');

describe('groupBy', () => {
  test('should group array of objects by a property', () => {
    const people = [
      { name: 'Alice', age: 21 },
      { name: 'Bob', age: 24 },
      { name: 'Charlie', age: 21 },
    ];
    const grouped = groupBy(people, 'age');
    expect(grouped).toEqual({
      21: [
        { name: 'Alice', age: 21 },
        { name: 'Charlie', age: 21 },
      ],
      24: [{ name: 'Bob', age: 24 }],
    });
  });

  test('should group array of objects by a function', () => {
    const people = [
      { name: 'Alice', age: 21 },
      { name: 'Bob', age: 24 },
      { name: 'Charlie', age: 21 },
    ];
    const grouped = groupBy(people, (person) => person.name.length);
    expect(grouped).toEqual({
      3: [{ name: 'Bob', age: 24 }],
      5: [{ name: 'Alice', age: 21 }],
      7: [{ name: 'Charlie', age: 21 }],
    });
  });

  test('should group an array of numbers using a function', () => {
    const numbers = [6.1, 4.2, 6.3];
    const grouped = groupBy(numbers, Math.floor);
    expect(grouped).toEqual({
      4: [4.2],
      6: [6.1, 6.3],
    });
  });

  test('should return an empty object for an empty array', () => {
    expect(groupBy([], 'age')).toEqual({});
  });
});
