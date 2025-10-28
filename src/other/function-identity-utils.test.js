import { identity } from './function-identity-utils';

describe('identity', () => {
  it('should return the first argument it receives', () => {
    const obj = {};
    const arr = [];
    const num = 123;
    const str = 'hello';
    const bool = true;
    const nul = null;
    const und = undefined;

    expect(identity(obj)).toBe(obj);
    expect(identity(arr)).toBe(arr);
    expect(identity(num)).toBe(num);
    expect(identity(str)).toBe(str);
    expect(identity(bool)).toBe(bool);
    expect(identity(nul)).toBe(nul);
    expect(identity(und)).toBe(und);
  });

  it('should return the exact same reference for objects and arrays', () => {
    const obj = { a: 1 };
    const arr = [1, 2, 3];

    expect(identity(obj)).toBe(obj);
    expect(identity(arr)).toBe(arr);
  });

  it('should not modify the input value', () => {
    const original = { a: 1 };
    const result = identity(original);
    expect(result).toEqual(original);
    expect(result).toBe(original);

    original.a = 2;
    expect(result.a).toBe(2);
  });

  it('should handle multiple arguments but only return the first', () => {
    expect(identity(1, 2, 3)).toBe(1);
    expect(identity('a', 'b')).toBe('a');
  });
});
