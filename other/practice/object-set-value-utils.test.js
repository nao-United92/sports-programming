import setValue from './object-set-value-utils';

describe('setValue', () => {
  // Test case 1: Set a top-level property
  test('should set a top-level property on the object', () => {
    const obj = { a: 1 };
    setValue(obj, 'b', 2);
    expect(obj).toEqual({ a: 1, b: 2 });
  });

  // Test case 2: Set a nested property (existing path)
  test('should set a nested property when the path already exists', () => {
    const obj = { a: { b: 1 } };
    setValue(obj, 'a.b', 2);
    expect(obj).toEqual({ a: { b: 2 } });
  });

  // Test case 3: Set a nested property (non-existent path, creating objects)
  test('should create intermediate objects if they do not exist', () => {
    const obj = { a: 1 };
    setValue(obj, 'b.c.d', 2);
    expect(obj).toEqual({ a: 1, b: { c: { d: 2 } } });
  });

  // Test case 4: Set a property in an array (numeric path)
  test('should set a property in an array using a numeric path', () => {
    const obj = { a: [1, 2, 3] };
    setValue(obj, 'a.1', 5);
    expect(obj).toEqual({ a: [1, 5, 3] });
  });

  // Test case 5: Set a property in a non-existent array (creating array and filling)
  test('should create an array if a numeric path segment is encountered for a non-existent property', () => {
    const obj = {};
    setValue(obj, 'a.0.b', 'test');
    expect(obj).toEqual({ a: [{ b: 'test' }] });
  });

  // Test case 6: Overwrite a primitive with an object
  test('should overwrite a primitive value with an object', () => {
    const obj = { a: 1 };
    setValue(obj, 'a.b', 2);
    expect(obj).toEqual({ a: { b: 2 } });
  });

  // Test case 7: Overwrite a primitive with an array
  test('should overwrite a primitive value with an array', () => {
    const obj = { a: 1 };
    setValue(obj, 'a.0', 2);
    expect(obj).toEqual({ a: [2] });
  });

  // Test case 8: Setting a value to null/undefined
  test('should set a property to null or undefined', () => {
    const obj = { a: 1 };
    setValue(obj, 'a', null);
    expect(obj).toEqual({ a: null });
    setValue(obj, 'b', undefined);
    expect(obj).toEqual({ a: null, b: undefined });
  });

  // Test case 9: Using array for path
  test('should work with an array path', () => {
    const obj = { a: { b: { c: 1 } } };
    setValue(obj, ['a', 'b', 'd'], 2);
    expect(obj).toEqual({ a: { b: { c: 1, d: 2 } } });
  });

  // Test case 10: Invalid input - non-object for the first argument
  test('should throw TypeError if the first argument is not an object', () => {
    expect(() => setValue(null, 'a', 1)).toThrow(TypeError);
    expect(() => setValue(undefined, 'a', 1)).toThrow(TypeError);
    expect(() => setValue(123, 'a', 1)).toThrow(TypeError);
    expect(() => setValue('string', 'a', 1)).toThrow(TypeError);
  });

  // Test case 11: Invalid input - non-string/non-array for path
  test('should throw TypeError if the path argument is invalid', () => {
    const obj = {};
    expect(() => setValue(obj, null, 1)).toThrow(TypeError);
    expect(() => setValue(obj, undefined, 1)).toThrow(TypeError);
    expect(() => setValue(obj, 123, 1)).toThrow(TypeError);
    expect(() => setValue(obj, '', 1)).toThrow(TypeError); // Empty string path is invalid
    expect(() => setValue(obj, [], 1)).toThrow(TypeError); // Empty array path is invalid
  });

  // Test case 12: Intermediate path segment is a primitive
  test('should throw TypeError if an intermediate path segment is a primitive value', () => {
    const obj = { a: 1 };
    expect(() => setValue(obj, 'a.b', 2)).toThrow(TypeError);
  });
});
