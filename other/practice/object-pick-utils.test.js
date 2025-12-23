const pick = require('./object-pick-utils');

describe('pick', () => {
  it('should pick specified keys from an object', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should not include keys that are not in the object', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1, d: undefined });
  });

  it('should return an empty object if no keys are provided', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, [])).toEqual({});
  });

  it('should return an empty object if the input object is empty', () => {
    expect(pick({}, ['a', 'b'])).toEqual({ a: undefined, b: undefined });
  });
});