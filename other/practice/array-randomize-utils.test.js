import randomizeArray from './array-randomize-utils';

describe('randomizeArray', () => {
  test('should return a new array with the same elements but in a different order', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const randomizedArray = randomizeArray(originalArray);

    // It should be a new array instance
    expect(randomizedArray).not.toBe(originalArray);
    // It should have the same length
    expect(randomizedArray.length).toBe(originalArray.length);
    // It should contain the same elements
    expect(randomizedArray).toEqual(expect.arrayContaining(originalArray));
    expect(originalArray).toEqual(expect.arrayContaining(randomizedArray));
  });

  test('should usually change the order of elements for non-trivial arrays', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let isDifferent = false;
    // Try a few times to ensure it's not always the same (probabilistically)
    for (let i = 0; i < 5; i++) {
      if (!array.every((val, index) => val === randomizeArray(array)[index])) {
        isDifferent = true;
        break;
      }
    }
    expect(isDifferent).toBe(true);
  });

  test('should handle an empty array', () => {
    const emptyArray = [];
    expect(randomizeArray(emptyArray)).toEqual([]);
    expect(randomizeArray(emptyArray)).not.toBe(emptyArray);
  });

  test('should handle an array with one element', () => {
    const singleElementArray = [1];
    expect(randomizeArray(singleElementArray)).toEqual([1]);
    expect(randomizeArray(singleElementArray)).not.toBe(singleElementArray);
  });

  test('should throw TypeError if argument is not an array', () => {
    expect(() => randomizeArray(null)).toThrow(TypeError);
    expect(() => randomizeArray(undefined)).toThrow(TypeError);
    expect(() => randomizeArray('string')).toThrow(TypeError);
    expect(() => randomizeArray(123)).toThrow(TypeError);
    expect(() => randomizeArray({})).toThrow(TypeError);
  });
});