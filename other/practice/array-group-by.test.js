const { groupBy } = require('./array-group-by');

describe('groupBy', () => {
  it('should group an array of objects by a specified key', () => {
    const people = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 25 },
      { name: 'David', age: 30 },
    ];
    const groupedByAge = groupBy(people, 'age');
    expect(groupedByAge).toEqual({
      25: [
        { name: 'Alice', age: 25 },
        { name: 'Charlie', age: 25 },
      ],
      30: [
        { name: 'Bob', age: 30 },
        { name: 'David', age: 30 },
      ],
    });
  });

  it('should group an array of objects using a function', () => {
    const numbers = [1.2, 1.5, 2.3, 2.6, 3.1];
    const groupedByFloor = groupBy(numbers, Math.floor);
    expect(groupedByFloor).toEqual({
      1: [1.2, 1.5],
      2: [2.3, 2.6],
      3: [3.1],
    });
  });

  it('should return an empty object for an empty array', () => {
    expect(groupBy([], 'key')).toEqual({});
  });

  it('should ignore objects where the key does not exist', () => {
    const items = [
      { category: 'A', value: 1 },
      { value: 2 },
      { category: 'B', value: 3 },
      { category: 'A', value: 4 },
    ];
    const groupedByCategory = groupBy(items, 'category');
    expect(groupedByCategory).toEqual({
      A: [
        { category: 'A', value: 1 },
        { category: 'A', value: 4 },
      ],
      B: [{ category: 'B', value: 3 }],
    });
  });

  it('should throw a TypeError if the first argument is not an array', () => {
    expect(() => groupBy({}, 'key')).toThrow(TypeError);
    expect(() => groupBy(null, 'key')).toThrow(TypeError);
    expect(() => groupBy('string', 'key')).toThrow(TypeError);
  });
});
