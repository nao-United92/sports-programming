const objectIsEmpty = require('./object-is-empty');

describe('objectIsEmpty', () => {
  test('should return true for an empty object', () => {
    expect(objectIsEmpty({})).toBe(true);
  });

  test('should return false for a non-empty object', () => {
    expect(objectIsEmpty({ a: 1 })).toBe(false);
  });

  test('should return true for null or undefined', () => {
    expect(objectIsEmpty(null)).toBe(true);
    expect(objectIsEmpty(undefined)).toBe(true);
  });

  test('should return false for non-object types', () => {
    expect(objectIsEmpty([])).toBe(false);
    expect(objectIsEmpty('a')).toBe(false);
    expect(objectIsEmpty(123)).toBe(false);
    expect(objectIsEmpty(() => {})).toBe(false);
  });
});
