import { pick } from './object-pick-utils.js';

describe('pick', () => {
  it('should create an object with picked properties', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
  });

  it('should ignore keys that are not in the object', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(pick(object, ['a', 'd'])).toEqual({ 'a': 1 });
  });

  it('should return an empty object if no keys are picked', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(pick(object, [])).toEqual({});
  });

  it('should return an empty object for null or undefined input object', () => {
    expect(pick(null, ['a', 'b'])).toEqual({});
    expect(pick(undefined, ['a', 'b'])).toEqual({});
  });

  it('should work with an empty keys array', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(pick(object, [])).toEqual({});
  });
});
