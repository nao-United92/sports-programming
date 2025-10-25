const { pick } = require('./object-pick-utils');

describe('pick', () => {
  const sourceObj = { a: 1, b: 'hello', c: true, d: { nested: 1 } };

  test('should pick specified properties from an object', () => {
    const picked = pick(sourceObj, ['a', 'c']);
    expect(picked).toEqual({ a: 1, c: true });
  });

  test('should not include properties that do not exist in the source object', () => {
    const picked = pick(sourceObj, ['a', 'e']);
    expect(picked).toEqual({ a: 1 });
  });

  test('should return an empty object if no keys are provided', () => {
    const picked = pick(sourceObj, []);
    expect(picked).toEqual({});
  });

  test('should return an empty object if the source is not an object', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
    expect(pick('string', ['a'])).toEqual({});
  });

  test('should create a new object (shallow copy)', () => {
    const picked = pick(sourceObj, ['d']);
    expect(picked).toEqual({ d: { nested: 1 } });
    expect(picked).not.toBe(sourceObj);
    // The nested object should be the same reference (shallow)
    expect(picked.d).toBe(sourceObj.d);
  });
});
