import { pick, omit } from './object-pick-omit-utils';

describe('pick', () => {
  it('should create an object with picked properties', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(pick(null, ['a', 'c'])).toEqual({});
    expect(pick(undefined, ['a', 'c'])).toEqual({});
  });

  it('should handle keys that do not exist in the source object', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(pick(object, ['a', 'd'])).toEqual({ 'a': 1 });
  });
});

describe('omit', () => {
  it('should create an object without the omitted properties', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omit(object, ['a', 'c'])).toEqual({ 'b': '2' });
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(omit(null, ['a', 'c'])).toEqual({});
    expect(omit(undefined, ['a', 'c'])).toEqual({});
  });

  it('should handle keys that do not exist in the source object', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(omit(object, ['d'])).toEqual({ 'a': 1, 'b': '2' });
  });
});