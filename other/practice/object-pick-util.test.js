const pick = require('./object-pick-util');

describe('pick', () => {
  it('should create an object with only the specified keys', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should return an empty object if no keys are picked', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, [])).toEqual({});
  });

  it('should ignore keys that are not in the original object', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  it('should return an empty object if the original object is empty', () => {
    expect(pick({}, ['a', 'b'])).toEqual({});
  });

  it('should not modify the original object', () => {
    const obj = { a: 1, b: 2 };
    pick(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: 2 });
  });
});
