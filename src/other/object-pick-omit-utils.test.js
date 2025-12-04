import { pick, omit } from './object-pick-omit-utils.js';

describe('pick', () => {
  const obj = { a: 1, b: '2', c: true };

  it('should pick specified properties from an object', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: true });
  });

  it('should ignore keys that do not exist', () => {
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  it('should return an empty object if no keys are provided', () => {
    expect(pick(obj, [])).toEqual({});
  });

  it('should return an empty object for null or undefined input', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });
});

describe('omit', () => {
  const obj = { a: 1, b: '2', c: true };

  it('should omit specified properties from an object', () => {
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  it('should ignore keys that do not exist', () => {
    expect(omit(obj, ['d', 'e'])).toEqual({ a: 1, b: '2', c: true });
  });

  it('should return the original object if no keys are provided', () => {
    expect(omit(obj, [])).toEqual({ a: 1, b: '2', c: true });
  });

  it('should return an empty object for null or undefined input', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
  });
});