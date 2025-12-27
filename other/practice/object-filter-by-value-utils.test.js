import filterByValue from './object-filter-by-value-utils';

describe('filterByValue', () => {
  const obj = { a: 1, b: 2, c: 'hello', d: true, e: null };

  it('should filter object properties by a predicate function applied to values', () => {
    const isNumber = (value) => typeof value === 'number';
    expect(filterByValue(obj, isNumber)).toEqual({ a: 1, b: 2 });
  });

  it('should pass key and object as additional arguments to the predicate', () => {
    const predicate = jest.fn((value, key, fullObject) => {
      expect(fullObject).toBe(obj);
      return value > 1;
    });
    expect(filterByValue(obj, predicate)).toEqual({ b: 2 });
    expect(predicate).toHaveBeenCalledTimes(5); // a, b, c, d, e
  });

  it('should return an empty object if the input object is null or undefined', () => {
    expect(filterByValue(null, () => true)).toEqual({});
    expect(filterByValue(undefined, () => true)).toEqual({});
  });

  it('should return a shallow copy of the object if predicate is not a function', () => {
    expect(filterByValue(obj, null)).toEqual(obj);
    expect(filterByValue(obj, undefined)).toEqual(obj);
    expect(filterByValue(obj, 'string')).toEqual(obj);
  });

  it('should handle empty objects', () => {
    expect(filterByValue({}, () => true)).toEqual({});
  });

  it('should handle objects where no properties satisfy the predicate', () => {
    const isGreaterThan10 = (value) => value > 10;
    expect(filterByValue(obj, isGreaterThan10)).toEqual({});
  });

  it('should handle objects with falsy values', () => {
    const testObj = { a: 0, b: '', c: null, d: undefined, e: false, f: 'value' };
    const isFalsy = (value) => !value;
    expect(filterByValue(testObj, isFalsy)).toEqual({
      a: 0,
      b: '',
      c: null,
      d: undefined,
      e: false,
    });
  });

  it('should return an empty object if input is an array', () => {
    expect(filterByValue([1, 2, 3], () => true)).toEqual({});
  });
});