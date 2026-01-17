import { pick } from './object-property-picker.js';

describe('pick', () => {
  const obj = { a: 1, b: 'hello', c: true, d: { e: 5 } };

  test('should pick specified properties from an object', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: true });
  });

  test('should ignore keys that are not in the object', () => {
    expect(pick(obj, ['a', 'f'])).toEqual({ a: 1 });
  });

  test('should return an empty object if no keys are provided', () => {
    expect(pick(obj, [])).toEqual({});
  });

  test('should return an empty object if the input is not an object', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick('string', ['a'])).toEqual({});
  });

  test('should return an empty object if keys is not an array', () => {
    expect(pick(obj, 'a')).toEqual({});
  });
  
  test('should perform a shallow copy of the properties', () => {
    const picked = pick(obj, ['d']);
    expect(picked.d).toBe(obj.d);
  });
});
