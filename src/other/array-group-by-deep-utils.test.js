import { groupByDeep } from './array-group-by-deep-utils';

describe('groupByDeep', () => {
  it('should group an array of objects by a deep property', () => {
    const collection = [
      { id: 1, user: { name: 'Alice', role: 'admin' } },
      { id: 2, user: { name: 'Bob', role: 'user' } },
      { id: 3, user: { name: 'Charlie', role: 'admin' } },
      { id: 4, user: { name: 'David', role: 'user' } },
    ];
    const expected = {
      admin: [
        { id: 1, user: { name: 'Alice', role: 'admin' } },
        { id: 3, user: { name: 'Charlie', role: 'admin' } },
      ],
      user: [
        { id: 2, user: { name: 'Bob', role: 'user' } },
        { id: 4, user: { name: 'David', role: 'user' } },
      ],
    };
    expect(groupByDeep(collection, 'user.role')).toEqual(expected);
  });

  it('should return an empty object for an empty array', () => {
    expect(groupByDeep([], 'a.b')).toEqual({});
  });

  it('should handle non-existent paths by grouping under "undefined"', () => {
    const collection = [
      { a: { b: 1 } },
      { a: { c: 2 } },
      { a: { b: 3 } },
    ];
    const expected = {
      '1': [{ a: { b: 1 } }],
      '3': [{ a: { b: 3 } }],
      undefined: [{ a: { c: 2 } }],
    };
    expect(groupByDeep(collection, 'a.b')).toEqual(expected);
  });

  it('should return an empty object if the collection is not an array', () => {
    expect(groupByDeep(null, 'a.b')).toEqual({});
    expect(groupByDeep(undefined, 'a.b')).toEqual({});
    expect(groupByDeep({}, 'a.b')).toEqual({});
  });
});
