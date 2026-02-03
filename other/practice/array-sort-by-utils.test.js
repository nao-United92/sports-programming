import { sortBy } from './array-sort-by-utils.js';

describe('sortBy', () => {
  it('should sort an array of objects by a property name', () => {
    const users = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 35 }];
    const sortedUsers = sortBy(users, 'age');
    expect(sortedUsers).toEqual([
      { name: 'Jane', age: 25 },
      { name: 'John', age: 30 },
      { name: 'Bob', age: 35 },
    ]);
  });

  it('should sort an array of objects by a function', () => {
    const users = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 35 }];
    const sortedUsers = sortBy(users, (user) => user.name);
    expect(sortedUsers).toEqual([
      { name: 'Bob', age: 35 },
      { name: 'Jane', age: 25 },
      { name: 'John', age: 30 },
    ]);
  });

  it('should not modify the original array', () => {
    const users = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
    sortBy(users, 'age');
    expect(users).toEqual([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]);
  });

  it('should handle an empty array', () => {
    expect(sortBy([], 'age')).toEqual([]);
  });

  it('should handle array with single element', () => {
    const users = [{ name: 'John', age: 30 }];
    expect(sortBy(users, 'age')).toEqual([{ name: 'John', age: 30 }]);
  });
});