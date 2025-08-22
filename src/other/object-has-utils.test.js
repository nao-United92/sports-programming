import { has } from './object-has-utils';

describe('has', () => {
  const obj = { a: 1, b: undefined };
  const proto = { c: 3 };
  const objWithProto = Object.create(proto);
  objWithProto.d = 4;

  it('should return true for own properties', () => {
    expect(has(obj, 'a')).toBe(true);
  });

  it('should return true for own properties with undefined values', () => {
    expect(has(obj, 'b')).toBe(true);
  });

  it('should return false for inherited properties', () => {
    expect(has(objWithProto, 'c')).toBe(false);
  });

  it('should return true for own properties on objects with a prototype', () => {
    expect(has(objWithProto, 'd')).toBe(true);
  });

  it('should return false for non-existent properties', () => {
    expect(has(obj, 'c')).toBe(false);
  });

  it('should return false for null or undefined objects', () => {
    expect(has(null, 'a')).toBe(false);
    expect(has(undefined, 'a')).toBe(false);
  });
});
