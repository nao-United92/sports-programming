import { deepFreeze } from './deep-freeze-utils.js';

describe('deepFreeze', () => {
  it('should freeze a simple object', () => {
    const obj = { a: 1 };
    deepFreeze(obj);
    expect(Object.isFrozen(obj)).toBe(true);
  });

  it('should deep freeze a nested object', () => {
    const obj = { a: 1, b: { c: 2 } };
    deepFreeze(obj);
    expect(Object.isFrozen(obj.b)).toBe(true);
  });

  it('should prevent modification of a frozen object', () => {
    const obj = { a: 1 };
    deepFreeze(obj);
    expect(() => {
      obj.a = 2;
    }).toThrow();
  });

  it('should prevent modification of a deep frozen object', () => {
    const obj = { a: 1, b: { c: 2 } };
    deepFreeze(obj);
    expect(() => {
      obj.b.c = 3;
    }).toThrow();
  });
});