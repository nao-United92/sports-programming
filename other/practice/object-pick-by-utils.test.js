const pickBy = require('./object-pick-by-utils');

describe('pickBy', () => {
  test('should pick properties based on a predicate', () => {
    const obj = { a: 1, b: '2', c: 3 };
    const isNumberValue = (value) => typeof value === 'number';
    expect(pickBy(obj, isNumberValue)).toEqual({ a: 1, c: 3 });
  });

  test('should provide value and key to the predicate', () => {
    const obj = { a: 1, b: 2 };
    const predicate = jest.fn();
    pickBy(obj, predicate);
    expect(predicate).toHaveBeenCalledWith(1, 'a');
    expect(predicate).toHaveBeenCalledWith(2, 'b');
  });

  test('should handle an empty object', () => {
    const predicate = () => true;
    expect(pickBy({}, predicate)).toEqual({});
  });

  test('should return an empty object for null or non-object inputs', () => {
    const predicate = () => true;
    expect(pickBy(null, predicate)).toEqual({});
    expect(pickBy(undefined, predicate)).toEqual({});
    expect(pickBy(123, predicate)).toEqual({});
  });

  test('should not pick any properties if predicate always returns false', () => {
    const obj = { a: 1, b: 2 };
    const predicate = () => false;
    expect(pickBy(obj, predicate)).toEqual({});
  });

  test('should pick all properties if predicate always returns true', () => {
    const obj = { a: 1, b: 2 };
    const predicate = () => true;
    expect(pickBy(obj, predicate)).toEqual({ a: 1, b: 2 });
  });
});
