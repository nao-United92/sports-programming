import { pick, omit } from './object-pick-omit-utils.js';

describe('pick', () => {
  it('should create an object with picked properties', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should return an empty object if no keys are picked', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, [])).toEqual({});
  });

  it('should ignore keys that do not exist in the source object', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });
});

describe('omit', () => {
  it('should create an object without omitted properties', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  it('should return an equivalent object if no keys are omitted', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, [])).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('should not modify the original object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    omit(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
  });
});
