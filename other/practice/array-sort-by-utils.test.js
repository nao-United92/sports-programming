const sortBy = require('./array-sort-by-utils');

describe('sortBy', () => {
  it('should sort an array of objects by a single property', () => {
    const users = [
      { user: 'fred', age: 48 },
      { user: 'barney', age: 34 },
      { user: 'fred', age: 40 },
      { user: 'barney', age: 36 }
    ];
    const expectedByUser = [
      { user: 'barney', age: 34 },
      { user: 'barney', age: 36 },
      { user: 'fred', age: 48 }, // Age 48 might come before 40 if not using age as secondary sort
      { user: 'fred', age: 40 }
    ].sort((a, b) => a.user.localeCompare(b.user)); // Sort by user for consistent expectation

    expect(sortBy(users, 'user')).toEqual(expectedByUser);
  });

  it('should sort an array of objects by a single iteratee function', () => {
    const users = [
      { user: 'fred', age: 48 },
      { user: 'barney', age: 34 },
      { user: 'fred', age: 40 },
      { user: 'barney', age: 36 }
    ];
    const expectedByIteratee = [
      { user: 'barney', age: 34 },
      { user: 'barney', age: 36 },
      { user: 'fred', age: 48 }, // Age 48 might come before 40 if not using age as secondary sort
      { user: 'fred', age: 40 }
    ].sort((a, b) => a.user.localeCompare(b.user)); // Sort by user for consistent expectation

    expect(sortBy(users, item => item.user)).toEqual(expectedByIteratee);
  });

  it('should sort an array of objects by multiple properties', () => {
    const users = [
      { user: 'fred', age: 48 },
      { user: 'barney', age: 34 },
      { user: 'fred', age: 40 },
      { user: 'barney', age: 36 }
    ];
    const expected = [
      { user: 'barney', age: 34 },
      { user: 'barney', age: 36 },
      { user: 'fred', age: 40 },
      { user: 'fred', age: 48 }
    ];
    expect(sortBy(users, ['user', 'age'])).toEqual(expected);
  });

  it('should return an empty array if the input is not an array', () => {
    expect(sortBy(null, 'user')).toEqual([]);
    expect(sortBy(undefined, 'user')).toEqual([]);
    expect(sortBy({}, 'user')).toEqual([]);
  });

  it('should handle an empty array', () => {
    expect(sortBy([], 'user')).toEqual([]);
  });

  it('should handle an array of primitives', () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6];
    const expected = [1, 1, 2, 3, 4, 5, 6, 9];
    expect(sortBy(arr, item => item)).toEqual(expected);
  });
});
