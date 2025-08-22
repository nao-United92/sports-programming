import { groupBy, partition } from './array-grouping-utils';

describe('groupBy', () => {
  it('should group an array of objects by a given key', () => {
    const people = [
      { name: 'Alice', age: 21 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 21 },
    ];
    const grouped = groupBy(people, 'age');
    expect(grouped).toEqual({
      21: [{ name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 }],
      25: [{ name: 'Bob', age: 25 }],
    });
  });

  it('should group an array of objects by a function', () => {
    const numbers = [1.3, 2.1, 2.4];
    const grouped = groupBy(numbers, Math.floor);
    expect(grouped).toEqual({
      1: [1.3],
      2: [2.1, 2.4],
    });
  });
});

describe('partition', () => {
  it('should partition an array based on a predicate function', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const [even, odd] = partition(numbers, (n) => n % 2 === 0);
    expect(even).toEqual([2, 4, 6]);
    expect(odd).toEqual([1, 3, 5]);
  });

  it('should handle an empty array', () => {
    const [[pass, fail]] = [partition([], (x) => x > 3)];
    expect(pass).toEqual([]);
    expect(fail).toEqual([]);
  });

  it('should partition with various data types', () => {
    const mixed = [1, 'a', true, 2, 'b', false];
    const [numbers, others] = partition(mixed, (x) => typeof x === 'number');
    expect(numbers).toEqual([1, 2]);
    expect(others).toEqual(['a', true, 'b', false]);
  });
});
