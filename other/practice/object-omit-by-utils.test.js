const omitBy = require('./object-omit-by-utils');

describe('omitBy', () => {
  test('should omit properties based on a predicate', () => {
    const obj = { a: 1, b: '2', c: 3 };
    const isNumberValue = (value) => typeof value === 'number';
    expect(omitBy(obj, isNumberValue)).toEqual({ b: '2' });
  });

  test('should provide value and key to the predicate', () => {
    const obj = { a: 1, b: 2 };
    const predicate = jest.fn();
    omitBy(obj, predicate);
    expect(predicate).toHaveBeenCalledWith(1, 'a');
    expect(predicate).toHaveBeenCalledWith(2, 'b');
  });

  test('should handle an empty object', () => {
    const predicate = () => false;
    expect(omitBy({}, predicate)).toEqual({});
  });

  test('should return an empty object for null or non-object inputs', () => {
    const predicate = () => false;
    expect(omitBy(null, predicate)).toEqual({});
    expect(omitBy(undefined, predicate)).toEqual({});
    expect(omitBy(123, predicate)).toEqual({});
  });

  test('should not omit any properties if predicate always returns false', () => {
    const obj = { a: 1, b: 2 };
    const predicate = () => false;
    expect(omitBy(obj, predicate)).toEqual({ a: 1, b: 2 });
  });

  test('should omit all properties if predicate always returns true', () => {
    const obj = { a: 1, b: 2 };
    const predicate = () => true;
    expect(omitBy(obj, predicate)).toEqual({});
  });
});