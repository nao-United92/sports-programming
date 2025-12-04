import { noop, identity } from './utility-functions.js';

describe('noop', () => {
  it('should return undefined', () => {
    expect(noop()).toBeUndefined();
  });

  it('should not throw an error when called with arguments', () => {
    expect(() => noop(1, 'test', {})).not.toThrow();
  });
});

describe('identity', () => {
  it('should return the same value it was given', () => {
    const obj = {};
    const arr = [];
    const func = () => {};

    expect(identity(1)).toBe(1);
    expect(identity('hello')).toBe('hello');
    expect(identity(true)).toBe(true);
    expect(identity(null)).toBe(null);
    expect(identity(undefined)).toBe(undefined);
    expect(identity(obj)).toBe(obj);
    expect(identity(arr)).toBe(arr);
    expect(identity(func)).toBe(func);
  });
});
