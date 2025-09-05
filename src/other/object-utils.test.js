import { pick, omit } from './object-utils.js';

describe('pick', () => {
  it('should pick specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should return an empty object if no keys are picked', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['d', 'e'])).toEqual({});
  });
});

describe('omit', () => {
  it('should omit specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  it('should return the original object if no keys are omitted', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['d', 'e'])).toEqual({ a: 1, b: 2, c: 3 });
  });
});