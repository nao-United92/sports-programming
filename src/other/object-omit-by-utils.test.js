const omitBy = require('./object-omit-by-utils');
const isNumber = (val) => typeof val === 'number';

describe('omitBy', () => {
  const obj = { a: 1, b: 'two', c: 3, d: null };

  test('should omit properties based on a predicate on the value', () => {
    // Omit all number properties
    const result = omitBy(obj, isNumber);
    expect(result).toEqual({ b: 'two', d: null });
  });

  test('should pass both value and key to the predicate', () => {
    const predicate = jest.fn((value, key) => key === 'a' || value === 3);
    const result = omitBy(obj, predicate);
    
    expect(predicate).toHaveBeenCalledWith(1, 'a');
    expect(predicate).toHaveBeenCalledWith('two', 'b');
    expect(predicate).toHaveBeenCalledWith(3, 'c');
    expect(predicate).toHaveBeenCalledWith(null, 'd');
    
    // Omit key 'a' and value 3
    expect(result).toEqual({ b: 'two', d: null });
  });

  test('should return an empty object if the input is not an object', () => {
    expect(omitBy(null, isNumber)).toEqual({});
    expect(omitBy(undefined, isNumber)).toEqual({});
    expect(omitBy(123, isNumber)).toEqual({});
  });

  test('should not mutate the original object', () => {
    omitBy(obj, isNumber);
    expect(obj).toEqual({ a: 1, b: 'two', c: 3, d: null });
  });

  test('should work with a predicate that checks for null or undefined', () => {
    const isNil = (val) => val === null || val === undefined;
    const dirtyObj = { a: 1, b: null, c: 'hello', d: undefined, e: 0 };
    
    const cleanObj = omitBy(dirtyObj, isNil);
    expect(cleanObj).toEqual({ a: 1, c: 'hello', e: 0 });
  });

  test('should return an empty object if the predicate matches everything', () => {
    const result = omitBy(obj, () => true);
    expect(result).toEqual({});
  });

  test('should return a shallow copy if the predicate matches nothing', () => {
    const result = omitBy(obj, () => false);
    expect(result).toEqual(obj);
    expect(result).not.toBe(obj);
  });
});
