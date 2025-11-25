const { pick } = require('./object-pick-utils.js');

describe('pick', () => {
  it('should create an object with picked properties', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should ignore keys that do not exist in the source object', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  it('should return an empty object if no keys are provided', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, [])).toEqual({});
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });

  it('should handle various data types', () => {
    const obj = { name: 'John', age: 30, isActive: true, data: { nested: 'value' } };
    const picked = pick(obj, ['name', 'data']);
    expect(picked).toEqual({ name: 'John', data: { nested: 'value' } });
  });
});
