import { groupBy } from './array-group-by-utils.js';

describe('groupBy', () => {
  it('should group an array of objects by a specified key', () => {
    const people = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 25 },
    ];
    const grouped = groupBy(people, 'age');
    expect(grouped).toEqual({
      25: [
        { name: 'Alice', age: 25 },
        { name: 'Charlie', age: 25 },
      ],
      30: [{ name: 'Bob', age: 30 }],
    });
  });

  it('should return an empty object for an empty array', () => {
    expect(groupBy([], 'key')).toEqual({});
  });

  it('should handle arrays with objects that do not have the key', () => {
    const items = [
      { category: 'A', value: 1 },
      { value: 2 },
      { category: 'A', value: 3 },
    ];
    const grouped = groupBy(items, 'category');
    expect(grouped).toEqual({
      A: [
        { category: 'A', value: 1 },
        { category: 'A', value: 3 },
      ],
      undefined: [{ value: 2 }],
    });
  });
});