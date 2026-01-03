const omit = require('./object-omit-util');

describe('omit', () => {
  it('should create an object without the specified keys', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  it('should return a new object with all original keys if no keys are omitted', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, [])).toEqual({ a: 1, b: 2 });
  });

  it('should ignore keys for omission that are not in the original object', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, ['c', 'd'])).toEqual({ a: 1, b: 2 });
  });

  it('should return an empty object if the original object is empty', () => {
    expect(omit({}, ['a', 'b'])).toEqual({});
  });

  it('should not modify the original object', () => {
    const obj = { a: 1, b: 2 };
    omit(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: 2 });
  });
});
