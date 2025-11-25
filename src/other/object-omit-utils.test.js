const { omit } = require('./object-omit-utils.js');

describe('omit', () => {
  it('should create an object with omitted properties', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  it('should not change the object if omitted keys do not exist', () => {
    const obj = { a: 1, b: '2' };
    expect(omit(obj, ['d', 'e'])).toEqual({ a: 1, b: '2' });
  });

  it('should return the same object if no keys are provided', () => {
    const obj = { a: 1, b: '2' };
    expect(omit(obj, [])).toEqual({ a: 1, b: '2' });
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
  });

  it('should handle various data types', () => {
    const obj = { name: 'John', age: 30, isActive: true };
    const omitted = omit(obj, ['age']);
    expect(omitted).toEqual({ name: 'John', isActive: true });
  });
});
