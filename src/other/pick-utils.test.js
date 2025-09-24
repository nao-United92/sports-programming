import { pick } from './pick-utils';

describe('pick', () => {
  it('should pick specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const picked = pick(obj, ['a', 'c']);
    expect(picked).toEqual({ a: 1, c: 3 });
  });

  it('should ignore keys that do not exist in the object', () => {
    const obj = { a: 1, b: 2 };
    const picked = pick(obj, ['a', 'd']);
    expect(picked).toEqual({ a: 1 });
  });

  it('should return an empty object if no keys are picked', () => {
    const obj = { a: 1, b: 2 };
    const picked = pick(obj, []);
    expect(picked).toEqual({});
  });

  it('should return an empty object if the input object is empty', () => {
    const obj = {};
    const picked = pick(obj, ['a', 'b']);
    expect(picked).toEqual({});
  });
});