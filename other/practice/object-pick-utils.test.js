import { pick } from './object-pick-utils';

describe('pick', () => {
  it('should pick specified properties from an object', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('should return an empty object if no properties are picked', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, [])).toEqual({});
  });

  it('should handle an empty object', () => {
    expect(pick({}, ['a'])).toEqual({});
  });

  it('should handle null and undefined', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });
});