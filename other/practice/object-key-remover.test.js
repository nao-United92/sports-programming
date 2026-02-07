const { omit } = require('./object-key-remover');

describe('omit', () => {
  it('should create an object with omitted properties', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  it('should not change the object if keys to omit do not exist', () => {
    const obj = { a: 1, b: '2' };
    expect(omit(obj, ['d', 'e'])).toEqual({ a: 1, b: '2' });
  });

  it('should return a new object instance', () => {
    const obj = { a: 1, b: '2' };
    const result = omit(obj, ['a']);
    expect(result).not.toBe(obj);
  });

  it('should return an empty object if the original object is null or undefined', () => {
    expect(omit(null, ['a', 'b'])).toEqual({});
    expect(omit(undefined, ['a', 'b'])).toEqual({});
  });

  it('should handle an empty array of keys', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, [])).toEqual({ a: 1, b: 2 });
  });
});
