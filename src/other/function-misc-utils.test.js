import { noop, identity, constant } from './function-misc-utils.js';

describe('noop', () => {
  it('should do nothing and return undefined', () => {
    expect(noop()).toBeUndefined();
  });
});

describe('identity', () => {
  it('should return the first argument it receives', () => {
    expect(identity(1)).toBe(1);
    expect(identity('hello')).toBe('hello');
    const obj = {};
    expect(identity(obj)).toBe(obj);
  });
});

describe('constant', () => {
  it('should return a function that always returns the same value', () => {
    const getValue = constant(42);
    expect(getValue()).toBe(42);
    expect(getValue()).toBe(42);
  });

  it('should return a function that returns the provided object', () => {
    const obj = { a: 1 };
    const getObj = constant(obj);
    expect(getObj()).toBe(obj);
    expect(getObj()).toEqual({ a: 1 });
  });
});
