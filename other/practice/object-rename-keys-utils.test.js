import renameKeys from './object-rename-keys-utils';

describe('renameKeys', () => {
  it('should rename object keys based on the provided key map', () => {
    const obj = { firstName: 'John', lastName: 'Doe', age: 30 };
    const keyMap = { firstName: 'first_name', lastName: 'last_name' };
    expect(renameKeys(obj, keyMap)).toEqual({
      first_name: 'John',
      last_name: 'Doe',
      age: 30,
    });
  });

  it('should not modify keys not present in the key map', () => {
    const obj = { a: 1, b: 2 };
    const keyMap = { a: 'A' };
    expect(renameKeys(obj, keyMap)).toEqual({ A: 1, b: 2 });
  });

  it('should return an empty object if the input object is null or undefined', () => {
    expect(renameKeys(null, { a: 'A' })).toEqual({});
    expect(renameKeys(undefined, { a: 'A' })).toEqual({});
  });

  it('should return a shallow copy of the object if keyMap is null or undefined', () => {
    const obj = { a: 1, b: 2 };
    expect(renameKeys(obj, null)).toEqual({ a: 1, b: 2 });
    expect(renameKeys(obj, undefined)).toEqual({ a: 1, b: 2 });
  });

  it('should handle empty objects', () => {
    expect(renameKeys({}, { a: 'A' })).toEqual({});
  });

  it('should handle empty key map', () => {
    const obj = { a: 1, b: 2 };
    expect(renameKeys(obj, {})).toEqual({ a: 1, b: 2 });
  });

  it('should handle non-string keys in the original object (converted to string)', () => {
    const obj = { 1: 'one', 2: 'two' };
    const keyMap = { 1: 'one_string' };
    expect(renameKeys(obj, keyMap)).toEqual({ one_string: 'one', 2: 'two' });
  });
});