import { pick } from './object-pick-utils';

describe('pick', () => {
  it('should create an object with picked properties', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should return an empty object if no keys are provided', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pick(obj, [])).toEqual({});
  });

  it('should return an empty object if the source object is null or undefined', () => {
    expect(pick(null, ['a', 'c'])).toEqual({});
    expect(pick(undefined, ['a', 'c'])).toEqual({});
  });

  it('should ignore keys that are not in the source object', () => {
    const obj = { a: 1, b: '2' };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1 });
  });
});