import isDateObject from './is-date-object';

describe('isDateObject', () => {
  test('should return true for a valid Date object', () => {
    expect(isDateObject(new Date())).toBe(true);
    expect(isDateObject(new Date('2023-01-01'))).toBe(true);
  });

  test('should return true for an invalid Date object', () => {
    // An "invalid Date" is still a Date object
    expect(isDateObject(new Date('invalid date string'))).toBe(true);
  });

  test('should return false for non-Date values', () => {
    expect(isDateObject('2023-01-01')).toBe(false);
    expect(isDateObject(1234567890)).toBe(false);
    expect(isDateObject({})).toBe(false);
    expect(isDateObject([])).toBe(false);
    expect(isDateObject(null)).toBe(false);
    expect(isDateObject(undefined)).toBe(false);
    expect(isDateObject(new String('2023-01-01'))).toBe(false);
    expect(isDateObject(new Number(123))).toBe(false);
  });

  test('should return false for objects mimicking Date behavior but not actual Date objects', () => {
    const fakeDate = {
      toString: () => '[object Date]',
      getDate: () => 1
    };
    expect(isDateObject(fakeDate)).toBe(false);
  });
});
