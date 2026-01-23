import { identity } from './function-identity-utils.js';

describe('identity', () => {
  it('should return the first argument it receives', () => {
    const obj = {};
    const arr = [];
    const str = 'hello';
    const num = 123;
    const bool = true;
    const nul = null;
    const und = undefined;

    expect(identity(obj)).toBe(obj);
    expect(identity(arr)).toBe(arr);
    expect(identity(str)).toBe(str);
    expect(identity(num)).toBe(num);
    expect(identity(bool)).toBe(bool);
    expect(identity(nul)).toBe(nul);
    expect(identity(und)).toBe(und);
  });

  it('should not mutate the input', () => {
    const original = { a: 1 };
    const result = identity(original);
    expect(result).toBe(original);
    expect(result).toEqual({ a: 1 });
  });

  it('should handle multiple arguments and still return only the first one', () => {
    expect(identity(1, 2, 3)).toBe(1);
    expect(identity('a', 'b')).toBe('a');
  });
});
