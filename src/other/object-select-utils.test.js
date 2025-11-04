import { pick, omit } from './object-select-utils.js';

describe('pick', () => {
  const obj = { a: 1, b: '2', c: true };

  it('should pick specified keys', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: true });
  });

  it('should ignore non-existent keys', () => {
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  it('should return an empty object if no keys are picked', () => {
    expect(pick(obj, [])).toEqual({});
  });
});

describe('omit', () => {
  const obj = { a: 1, b: '2', c: true };

  it('should omit specified keys', () => {
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  it('should ignore non-existent keys', () => {
    expect(omit(obj, ['d', 'e'])).toEqual({ a: 1, b: '2', c: true });
  });

  it('should return the original object if no keys are omitted', () => {
    expect(omit(obj, [])).toEqual(obj);
  });
});
