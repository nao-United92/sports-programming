import { pick, omit } from './object-pick-omit-utils.js';

describe('pick', () => {
  it('should create an object with picked properties', () => {
    const obj = { a: 1, b: '2', c: true };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: true });
  });

  it('should return an empty object if no properties are picked', () => {
    const obj = { a: 1, b: '2', c: true };
    expect(pick(obj, [])).toEqual({});
  });

  it('should ignore keys that do not exist in the source object', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, ['a', 'd'])).toEqual({ a: 1 });
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });
});

describe('omit', () => {
  it('should create an object with omitted properties', () => {
    const obj = { a: 1, b: '2', c: true };
    expect(omit(obj, ['b'])).toEqual({ a: 1, c: true });
  });

  it('should return the original object if no properties are omitted', () => {
    const obj = { a: 1, b: '2', c: true };
    expect(omit(obj, [])).toEqual(obj);
  });

  it('should ignore keys that do not exist in the source object', () => {
    const obj = { a: 1, b: '2' };
    expect(omit(obj, ['c', 'd'])).toEqual({ a: 1, b: '2' });
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
  });
});