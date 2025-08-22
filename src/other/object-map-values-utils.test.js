import { mapValues } from './object-map-values-utils';

describe('mapValues', () => {
  const users = {
    'fred': { 'user': 'fred', 'age': 40 },
    'pebbles': { 'user': 'pebbles', 'age': 1 }
  };

  it('should apply a function to each value in the object', () => {
    const result = mapValues(users, (user) => user.age);
    expect(result).toEqual({ 'fred': 40, 'pebbles': 1 });
  });

  it('should work with a simple object and a simple iteratee', () => {
    const obj = { a: 1, b: 2 };
    const result = mapValues(obj, (n) => n * 2);
    expect(result).toEqual({ a: 2, b: 4 });
  });

  it('should pass value, key, and object to the iteratee', () => {
    const mockIteratee = jest.fn();
    const obj = { a: 1 };
    mapValues(obj, mockIteratee);
    expect(mockIteratee).toHaveBeenCalledWith(1, 'a', obj);
  });

  it('should return an empty object for an empty object input', () => {
    expect(mapValues({}, (x) => x)).toEqual({});
  });
});
