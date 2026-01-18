// other/practice/array-is-sorted-utils.test.js

const arrayIsSorted = require('./array-is-sorted-utils');

describe('arrayIsSorted', () => {
  test('should return true for an empty array', () => {
    expect(arrayIsSorted([])).toBe(true);
  });

  test('should return true for a single-element array', () => {
    expect(arrayIsSorted([1])).toBe(true);
  });

  test('should return true for a sorted array of numbers', () => {
    expect(arrayIsSorted([1, 2, 3, 4, 5])).toBe(true);
  });

  test('should return true for a sorted array of strings', () => {
    expect(arrayIsSorted(['a', 'b', 'c'])).toBe(true);
  });

  test('should return false for an unsorted array of numbers', () => {
    expect(arrayIsSorted([1, 3, 2, 4, 5])).toBe(false);
  });

  test('should return false for an unsorted array of strings', () => {
    expect(arrayIsSorted(['a', 'c', 'b'])).toBe(false);
  });

  test('should handle arrays with duplicate elements correctly', () => {
    expect(arrayIsSorted([1, 2, 2, 3])).toBe(true);
    expect(arrayIsSorted([1, 3, 2, 2])).toBe(false);
  });

  test('should work with a custom comparator for descending order', () => {
    const descendingComparator = (a, b) => (a > b ? -1 : a < b ? 1 : 0);
    expect(arrayIsSorted([5, 4, 3, 2, 1], descendingComparator)).toBe(true);
    expect(arrayIsSorted([1, 5, 3], descendingComparator)).toBe(false);
  });

  test('should work with a custom comparator for objects by a property', () => {
    const initialUsers = [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 35 },
    ];

    // Check if initialUsers is sorted by name (it is)
    expect(arrayIsSorted(initialUsers, (a, b) => a.name.localeCompare(b.name))).toBe(true);
    // Check if initialUsers is NOT sorted by age (it is not)
    expect(arrayIsSorted(initialUsers, (a, b) => a.age - b.age)).toBe(false);


    const usersByName = JSON.parse(JSON.stringify(initialUsers)).sort((a, b) => a.name.localeCompare(b.name));
    const usersByAge = JSON.parse(JSON.stringify(initialUsers)).sort((a, b) => a.age - b.age);

    expect(arrayIsSorted(usersByName, (a, b) => a.name.localeCompare(b.name))).toBe(true);
    expect(arrayIsSorted(usersByAge, (a, b) => a.age - b.age)).toBe(true);
  });
});