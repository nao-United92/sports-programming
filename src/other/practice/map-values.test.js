import { mapValues } from './map-values';

describe('mapValues', () => {
  it('should map values of an object', () => {
    const object = { 'a': 1, 'b': 2 };
    const result = mapValues(object, (value) => value * 2);
    expect(result).toEqual({ 'a': 2, 'b': 4 });
  });

  it('should pass key and object to the iteratee', () => {
    const object = { 'a': 1, 'b': 2 };
    const iteratee = jest.fn();
    mapValues(object, iteratee);
    expect(iteratee).toHaveBeenCalledWith(1, 'a', object);
    expect(iteratee).toHaveBeenCalledWith(2, 'b', object);
  });

  it('should return an empty object for null or undefined', () => {
    expect(mapValues(null, () => {})).toEqual({});
    expect(mapValues(undefined, () => {})).toEqual({});
  });

  it('should not affect the original object', () => {
    const object = { 'a': 1, 'b': 2 };
    mapValues(object, (value) => value * 2);
    expect(object).toEqual({ 'a': 1, 'b': 2 });
  });
});
