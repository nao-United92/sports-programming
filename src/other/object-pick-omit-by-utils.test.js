import { pickBy, omitBy } from './object-pick-omit-by-utils.js';

describe('pickBy', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };

  it('should pick properties by value', () => {
    const result = pickBy(object, (value) => typeof value === 'number');
    expect(result).toEqual({ 'a': 1, 'c': 3 });
  });

  it('should pick properties by key', () => {
    const result = pickBy(object, (value, key) => key === 'a');
    expect(result).toEqual({ 'a': 1 });
  });

  it('should return an empty object for null or undefined input', () => {
    expect(pickBy(null, () => true)).toEqual({});
    expect(pickBy(undefined, () => true)).toEqual({});
  });
});

describe('omitBy', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };

  it('should omit properties by value', () => {
    const result = omitBy(object, (value) => typeof value === 'number');
    expect(result).toEqual({ 'b': '2' });
  });

  it('should omit properties by key', () => {
    const result = omitBy(object, (value, key) => key === 'a');
    expect(result).toEqual({ 'b': '2', 'c': 3 });
  });

  it('should return an empty object for null or undefined input', () => {
    expect(omitBy(null, () => true)).toEqual({});
    expect(omitBy(undefined, () => true)).toEqual({});
  });
});
