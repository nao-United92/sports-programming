import { has } from './object-has-utils.js';

describe('has', () => {
  const object = { 'a': 1, 'b': undefined };
  const proto = { 'c': 2 };
  const objWithProto = Object.create(proto);
  objWithProto.a = 1;

  test('should return true for own properties', () => {
    expect(has(object, 'a')).toBe(true);
  });

  test('should return true for own properties with undefined values', () => {
    expect(has(object, 'b')).toBe(true);
  });

  test('should return false for inherited properties', () => {
    expect(has(objWithProto, 'c')).toBe(false);
  });

  test('should return false for non-existent properties', () => {
    expect(has(object, 'c')).toBe(false);
  });

  test('should return false for null or undefined objects', () => {
    expect(has(null, 'a')).toBe(false);
    expect(has(undefined, 'a')).toBe(false);
  });
});