import pick from './object-pick-utils';

describe('pick', () => {
  test('should create an object with picked properties', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should ignore keys that are not in the object', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  test('should return an empty object if no keys are provided', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, [])).toEqual({});
  });

  test('should return an empty object for null or non-object inputs', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
    expect(pick(123, ['a'])).toEqual({});
  });

  test('should work with nested objects', () => {
    const obj = { a: { nested: 1 }, b: 2 };
    expect(pick(obj, ['a'])).toEqual({ a: { nested: 1 } });
  });
});