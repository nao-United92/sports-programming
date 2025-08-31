import { toPairs } from './object-to-pairs-utils.js';

describe('toPairs', () => {
  it('should create an array of key-value pairs from an object', () => {
    const object = { 'a': 1, 'b': 2 };
    expect(toPairs(object)).toEqual([['a', 1], ['b', 2]]);
  });

  it('should handle an empty object', () => {
    expect(toPairs({})).toEqual([]);
  });

  it('should handle null or undefined input', () => {
    expect(toPairs(null)).toEqual([]);
    expect(toPairs(undefined)).toEqual([]);
  });

  function Foo() {
    this.a = 1;
    this.b = 2;
  }
  Foo.prototype.c = 3;

  it('should only include own properties', () => {
    expect(toPairs(new Foo())).toEqual([['a', 1], ['b', 2]]);
  });
});
