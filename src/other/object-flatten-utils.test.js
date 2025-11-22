import { flattenObject } from './object-flatten-utils.js';

describe('flattenObject', () => {
  it('should flatten a simple nested object', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: 3,
      },
    };
    const expected = {
      a: 1,
      'b.c': 2,
      'b.d': 3,
    };
    expect(flattenObject(obj)).toEqual(expected);
  });

  it('should flatten an object with deeply nested properties', () => {
    const obj = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: {
            g: 4,
          },
        },
      },
      h: 5,
    };
    const expected = {
      a: 1,
      'b.c': 2,
      'b.d.e': 3,
      'b.d.f.g': 4,
      h: 5,
    };
    expect(flattenObject(obj)).toEqual(expected);
  });

  it('should flatten an object containing arrays', () => {
    const obj = {
      a: 1,
      b: [
        { c: 2 },
        { d: 3 },
      ],
      e: [4, 5],
    };
    const expected = {
      a: 1,
      'b.0.c': 2,
      'b.1.d': 3,
      'e.0': 4,
      'e.1': 5,
    };
    expect(flattenObject(obj)).toEqual(expected);
  });

  it('should handle an empty object', () => {
    const obj = {};
    const expected = {};
    expect(flattenObject(obj)).toEqual(expected);
  });

  it('should not mutate the original object', () => {
    const obj = { a: { b: 1 } };
    const objCopy = JSON.parse(JSON.stringify(obj));
    flattenObject(obj);
    expect(obj).toEqual(objCopy);
  });

  it('should handle objects with null or undefined values', () => {
    const obj = {
      a: 1,
      b: null,
      c: { d: undefined },
    };
    const expected = {
      a: 1,
      b: null,
      'c.d': undefined,
    };
    expect(flattenObject(obj)).toEqual(expected);
  });

  it('should handle objects with mixed types including functions and dates', () => {
    const func = () => {};
    const date = new Date();
    const obj = {
      a: 1,
      b: {
        c: 'string',
        d: true,
        e: func,
        f: date,
      },
    };
    const expected = {
      a: 1,
      'b.c': 'string',
      'b.d': true,
      'b.e': func,
      'b.f': date,
    };
    expect(flattenObject(obj)).toEqual(expected);
  });
});
