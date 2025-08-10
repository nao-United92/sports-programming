import { omit } from './omit-utils';

describe('omit', () => {
  const obj = { a: 1, b: '2', c: true };

  test('should return an empty object if source object is null or undefined', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
  });

  test('should return a copy of the object if keys are not provided', () => {
    expect(omit(obj, [])).toEqual(obj);
    expect(omit(obj)).toEqual(obj);
    expect(omit(obj, [])).not.toBe(obj);
  });

  test('should omit specified properties from an object', () => {
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  test('should handle a single key as a string', () => {
    expect(omit(obj, 'b')).toEqual({ a: 1, c: true });
  });

  test('should not mutate the original object', () => {
    omit(obj, 'b');
    expect(obj).toEqual({ a: 1, b: '2', c: true });
  });

  test('should ignore keys that do not exist in the source object', () => {
    expect(omit(obj, ['d', 'e'])).toEqual(obj);
  });

  test('should handle inherited properties correctly', () => {
    const proto = { inherited: 'value' };
    const child = Object.create(proto);
    child.own = 'should be kept';
    child.toOmit = 'should be omitted';

    const result = omit(child, ['toOmit']);
    expect(result).toEqual({ own: 'should be kept' });
    expect(result.hasOwnProperty('inherited')).toBe(false);
  });
});