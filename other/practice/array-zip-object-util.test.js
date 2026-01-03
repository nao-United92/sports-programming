const zipObject = require('./array-zip-object-util');

describe('zipObject', () => {
  it('should create an object from two arrays of keys and values', () => {
    const keys = ['a', 'b', 'c'];
    const values = [1, 2, 3];
    expect(zipObject(keys, values)).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('should ignore extra values if there are more values than keys', () => {
    const keys = ['a', 'b'];
    const values = [1, 2, 3];
    expect(zipObject(keys, values)).toEqual({ a: 1, b: 2 });
  });

  it('should assign undefined to keys if there are more keys than values', () => {
    const keys = ['a', 'b', 'c'];
    const values = [1, 2];
    expect(zipObject(keys, values)).toEqual({ a: 1, b: 2, c: undefined });
  });

  it('should return an empty object if given empty arrays', () => {
    expect(zipObject([], [])).toEqual({});
  });
});
