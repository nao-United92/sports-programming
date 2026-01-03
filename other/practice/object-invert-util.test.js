const invert = require('./object-invert-util');

describe('invert', () => {
  it('should invert the keys and values of an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(invert(obj)).toEqual({ 1: 'a', 2: 'b', 3: 'c' });
  });

  it('should handle objects with numeric keys', () => {
    const obj = { 1: 'a', 2: 'b' };
    expect(invert(obj)).toEqual({ a: '1', b: '2' });
  });

  it('should handle duplicate values by overwriting (last one wins)', () => {
    const obj = { a: 1, b: 2, c: 1 };
    // The key '1' will be assigned 'a', then overwritten by 'c'.
    expect(invert(obj)).toEqual({ 1: 'c', 2: 'b' });
  });

  it('should return an empty object if given an empty object', () => {
    expect(invert({})).toEqual({});
  });
});
