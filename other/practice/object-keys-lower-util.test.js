const objectKeysLower = require('./object-keys-lower-util');

describe('objectKeysLower', () => {
  test('converts keys to lowercase', () => {
    const input = { Name: 'John', AGE: 30 };
    const expected = { name: 'John', age: 30 };
    expect(objectKeysLower(input)).toEqual(expected);
  });

  test('throws error for invalid input', () => {
    expect(() => objectKeysLower(null)).toThrow('Input must be a plain object');
    expect(() => objectKeysLower([])).toThrow('Input must be a plain object');
  });
});
