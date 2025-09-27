import { sortBy } from './array-sort-utils';

describe('sortBy', () => {
  const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
  ];

  test('should sort by age in ascending order', () => {
    const sorted = sortBy(people, 'age');
    expect(sorted.map(p => p.name)).toEqual(['Bob', 'Alice', 'Charlie']);
  });

  test('should sort by age in descending order', () => {
    const sorted = sortBy(people, 'age', 'desc');
    expect(sorted.map(p => p.name)).toEqual(['Charlie', 'Alice', 'Bob']);
  });

  test('should sort by name in ascending order', () => {
    const sorted = sortBy(people, 'name');
    expect(sorted.map(p => p.name)).toEqual(['Alice', 'Bob', 'Charlie']);
  });

  test('should not mutate the original array', () => {
    sortBy(people, 'age');
    expect(people[0].name).toBe('Alice');
  });
});
