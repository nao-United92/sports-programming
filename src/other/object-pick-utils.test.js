import { pick } from './object-pick-utils';

describe('pick', () => {
  it('should return an object with picked properties', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
  });

  it('should not include properties that are not in the source object', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(pick(object, ['a', 'd'])).toEqual({ 'a': 1 });
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(pick(null, ['a', 'b'])).toEqual({});
    expect(pick(undefined, ['a', 'b'])).toEqual({});
  });

  it('should return an empty object if no keys are provided', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(pick(object, [])).toEqual({});
  });

  it('should handle nested objects (but only picks top-level properties)', () => {
    const object = { 'a': { 'b': 2 }, 'c': 3 };
    expect(pick(object, ['a'])).toEqual({ 'a': { 'b': 2 } });
  });
});
