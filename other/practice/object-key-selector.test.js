const { pick } = require('./object-key-selector');

describe('pick', () => {
  it('should create an object with picked properties', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should not include properties that are not in the object', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  it('should return an empty object if no keys are provided', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pick(obj, [])).toEqual({});
  });

  it('should return an empty object if the original object is null or undefined', () => {
    expect(pick(null, ['a', 'b'])).toEqual({});
    expect(pick(undefined, ['a', 'b'])).toEqual({});
  });

  it('should handle keys that are not own properties', () => {
    const proto = { d: 4 };
    const obj = Object.create(proto);
    obj.a = 1;
    obj.b = 2;
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });
});
