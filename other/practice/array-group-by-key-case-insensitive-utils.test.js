import groupByCaseInsensitive from './array-group-by-key-case-insensitive-utils';

describe('groupByCaseInsensitive', () => {
  const users = [
    { id: 1, name: 'Alice', city: 'New York' },
    { id: 2, name: 'Bob', city: 'new york' },
    { id: 3, name: 'Charlie', city: 'London' },
    { id: 4, name: 'David', city: 'london' },
    { id: 5, name: 'Eve', city: 'Paris' },
    { id: 6, name: 'Frank', city: 'New York' },
  ];

  it('should group objects by a specified key, ignoring case', () => {
    const expected = {
      'new york': [
        { id: 1, name: 'Alice', city: 'New York' },
        { id: 2, name: 'Bob', city: 'new york' },
        { id: 6, name: 'Frank', city: 'New York' },
      ],
      london: [
        { id: 3, name: 'Charlie', city: 'London' },
        { id: 4, name: 'David', city: 'london' },
      ],
      paris: [{ id: 5, name: 'Eve', city: 'Paris' }],
    };
    expect(groupByCaseInsensitive(users, 'city')).toEqual(expected);
  });

  it('should handle an empty array', () => {
    expect(groupByCaseInsensitive([], 'city')).toEqual({});
  });

  it('should handle a key that does not exist', () => {
    expect(groupByCaseInsensitive(users, 'country')).toEqual({
      undefined: users,
    });
  });

  it('should handle non-string values for the key', () => {
    const items = [{ id: 1, type: 1 }, { id: 2, type: '1' }, { id: 3, type: 2 }];
    expect(groupByCaseInsensitive(items, 'type')).toEqual({
      1: [{ id: 1, type: 1 }, { id: 2, type: '1' }],
      2: [{ id: 3, type: 2 }],
    });
  });

  it('should return an empty object if input array is not an array', () => {
    expect(groupByCaseInsensitive(null, 'city')).toEqual({});
    expect(groupByCaseInsensitive(undefined, 'city')).toEqual({});
  });

  it('should return an empty object if key is not provided', () => {
    expect(groupByCaseInsensitive(users, undefined)).toEqual({});
    expect(groupByCaseInsensitive(users, null)).toEqual({});
    expect(groupByCaseInsensitive(users, '')).toEqual({});
  });
});