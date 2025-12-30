import omit from './object-omit-utils';

describe('omit', () => {
  test('should create an object with omitted properties', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  test('should not change the original object', () => {
    const obj = { a: 1, b: '2' };
    omit(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: '2' });
  });

  test('should return the object as is if no keys are omitted', () => {
    const obj = { a: 1, b: '2' };
    expect(omit(obj, [])).toEqual({ a: 1, b: '2' });
  });

  test('should handle keys that do not exist on the object', () => {
    const obj = { a: 1, b: '2' };
    expect(omit(obj, ['d'])).toEqual({ a: 1, b: '2' });
  });

  test('should return an empty object for null or non-object inputs', () => {
    expect(omit(null, ['a'])).toEqual({});
  });
});