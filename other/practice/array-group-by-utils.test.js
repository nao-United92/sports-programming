import { groupBy } from './array-group-by-utils.js';

describe('groupBy', () => {
  it('should group an array of objects by a given key', () => {
    const people = [
      { name: 'Alice', age: 21 },
      { name: 'Bob', age: 24 },
      { name: 'Charlie', age: 21 }
    ];
    const grouped = groupBy(people, 'age');
    expect(grouped).toEqual({
      21: [{ name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 }],
      24: [{ name: 'Bob', age: 24 }]
    });
  });

  it('should group an array of objects by a function', () => {
    const numbers = [6.1, 4.2, 6.3];
    const grouped = groupBy(numbers, Math.floor);
    expect(grouped).toEqual({
      4: [4.2],
      6: [6.1, 6.3]
    });
  });

  it('should return an empty object for an empty array', () => {
    expect(groupBy([], 'age')).toEqual({});
  });
});
