import { orderBy } from './array-order-by-utils.js';

describe('orderBy', () => {
  const users = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'London' },
    { name: 'Bob', age: 35, city: 'New York' },
    { name: 'Alice', age: 25, city: 'London' },
  ];

  it('should sort an array of objects by a single property in ascending order', () => {
    const sortedUsers = orderBy(users, ['age']);
    expect(sortedUsers).toEqual([
      { name: 'Jane', age: 25, city: 'London' },
      { name: 'Alice', age: 25, city: 'London' },
      { name: 'John', age: 30, city: 'New York' },
      { name: 'Bob', age: 35, city: 'New York' },
    ]);
  });

  it('should sort an array of objects by a single property in descending order', () => {
    const sortedUsers = orderBy(users, ['age'], ['desc']);
    expect(sortedUsers).toEqual([
      { name: 'Bob', age: 35, city: 'New York' },
      { name: 'John', age: 30, city: 'New York' },
      { name: 'Jane', age: 25, city: 'London' },
      { name: 'Alice', age: 25, city: 'London' },
    ]);
  });

  it('should sort an array of objects by multiple properties with mixed orders', () => {
    const sortedUsers = orderBy(users, ['age', 'name'], ['asc', 'desc']);
    expect(sortedUsers).toEqual([
      { name: 'Jane', age: 25, city: 'London' },
      { name: 'Alice', age: 25, city: 'London' },
      { name: 'John', age: 30, city: 'New York' },
      { name: 'Bob', age: 35, city: 'New York' },
    ]);
  });

  it('should not modify the original array', () => {
    const originalUsers = [...users];
    orderBy(users, ['age']);
    expect(users).toEqual(originalUsers);
  });

  it('should handle an empty array', () => {
    expect(orderBy([], ['age'])).toEqual([]);
  });
});
