const { omit } = require('./object-omit-utils');

describe('omit', () => {
  const sourceObj = { a: 1, b: 'hello', c: true, d: { nested: 1 } };

  test('should omit specified properties from an object', () => {
    const omitted = omit(sourceObj, ['b', 'd']);
    expect(omitted).toEqual({ a: 1, c: true });
  });

  test('should not change the object if omitted keys do not exist', () => {
    const omitted = omit(sourceObj, ['e', 'f']);
    expect(omitted).toEqual(sourceObj);
  });

  test('should return a full copy if no keys are provided', () => {
    const omitted = omit(sourceObj, []);
    expect(omitted).toEqual(sourceObj);
    expect(omitted).not.toBe(sourceObj);
  });

  test('should return an empty object if the source is not an object', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
    expect(omit('string', ['a'])).toEqual({});
  });

  test('should create a new object (shallow copy)', () => {
    const omitted = omit(sourceObj, ['a']);
    expect(omitted).not.toBe(sourceObj);
    // The nested object should be the same reference (shallow)
    expect(omitted.d).toBe(sourceObj.d);
  });
});