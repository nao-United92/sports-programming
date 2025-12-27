import filterByKey from './object-filter-by-key-utils';

describe('filterByKey', () => {
  const obj = { id: 1, name: 'Alice', age: 30, city: 'New York' };

  it('should filter object properties by a predicate function applied to keys', () => {
    const startsWithA = (key) => key.startsWith('a');
    expect(filterByKey(obj, startsWithA)).toEqual({ age: 30 });
  });

  it('should pass value and full object as additional arguments to the predicate', () => {
    const predicate = jest.fn((key, value, fullObject) => {
      expect(fullObject).toBe(obj);
      return typeof value === 'string';
    });
    expect(filterByKey(obj, predicate)).toEqual({ name: 'Alice', city: 'New York' });
    expect(predicate).toHaveBeenCalledTimes(4); // id, name, age, city
  });

  it('should return an empty object if the input object is null or undefined', () => {
    expect(filterByKey(null, () => true)).toEqual({});
    expect(filterByKey(undefined, () => true)).toEqual({});
  });

  it('should return a shallow copy of the object if predicate is not a function', () => {
    expect(filterByKey(obj, null)).toEqual(obj);
    expect(filterByKey(obj, undefined)).toEqual(obj);
    expect(filterByKey(obj, 'string')).toEqual(obj);
  });

  it('should handle empty objects', () => {
    expect(filterByKey({}, () => true)).toEqual({});
  });

  it('should handle objects where no keys satisfy the predicate', () => {
    const startsWithX = (key) => key.startsWith('x');
    expect(filterByKey(obj, startsWithX)).toEqual({});
  });

  it('should return an empty object if input is an array', () => {
    expect(filterByKey([1, 2, 3], () => true)).toEqual({});
  });
});