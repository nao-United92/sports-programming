const { invert } = require('./object-invert-utils.js');

describe('invert', () => {
  it('should invert the keys and values of an object', () => {
    const obj = { a: '1', b: '2', c: '3' };
    const invertedObj = invert(obj);
    expect(invertedObj).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
  });

  it('should handle objects with non-string values', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const invertedObj = invert(obj);
    expect(invertedObj).toEqual({ '1': 'a', '2': 'b', '3': 'c' });
  });

  it('should handle empty objects', () => {
    const obj = {};
    const invertedObj = invert(obj);
    expect(invertedObj).toEqual({});
  });

  it('should handle objects with duplicate values by overwriting', () => {
    const obj = { a: '1', b: '2', c: '1' };
    const invertedObj = invert(obj);
    expect(invertedObj).toEqual({ '1': 'c', '2': 'b' });
  });
});