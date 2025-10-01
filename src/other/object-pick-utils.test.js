import { pick } from './object-pick-utils.js';

describe('pick', () => {
  it('should create an object with picked properties', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
  });

  it('should ignore keys that do not exist', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(pick(object, ['a', 'd'])).toEqual({ 'a': 1 });
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(pick(null, ['a', 'b'])).toEqual({});
    expect(pick(undefined, ['a', 'b'])).toEqual({});
  });
});