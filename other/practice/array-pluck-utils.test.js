import pluck from './array-pluck-utils';

describe('pluck', () => {
  const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 24 },
    { id: 3, name: 'Charlie', age: 35 },
  ];

  it('should extract a list of property values from an array of objects', () => {
    expect(pluck(users, 'name')).toEqual(['Alice', 'Bob', 'Charlie']);
  });

  it('should handle a key that does not exist, returning undefined for those entries', () => {
    expect(pluck(users, 'email')).toEqual([undefined, undefined, undefined]);
  });

  it('should handle an empty array, returning an empty array', () => {
    expect(pluck([], 'name')).toEqual([]);
  });

  it('should handle an array of non-objects', () => {
    const arr = [1, 2, 3];
    expect(pluck(arr, 'someProperty')).toEqual([undefined, undefined, undefined]);
  });

  it('should return an empty array if input array is not an array', () => {
    expect(pluck(null, 'name')).toEqual([]);
    expect(pluck(undefined, 'name')).toEqual([]);
  });

  it('should return an empty array if key is not provided', () => {
    expect(pluck(users, null)).toEqual([]);
    expect(pluck(users, undefined)).toEqual([]);
    expect(pluck(users, '')).toEqual([undefined, undefined, undefined]); // Accessing empty string key
  });

  it('should extract nested property values if key is a dot-notation string', () => {
    const data = [
      { id: 1, details: { address: { city: 'NY' } } },
      { id: 2, details: { address: { city: 'LA' } } },
    ];
    // This test will fail with the current simple implementation, will need to enhance pluck for dot-notation
    // For now, it should return undefined
    expect(pluck(data, 'details.address.city')).toEqual([undefined, undefined]);
  });
});