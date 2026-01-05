import mapAsync from './array-map-async-utils';

describe('mapAsync', () => {
  const asyncSquare = async (num) => {
    return new Promise(resolve => {
      setTimeout(() => resolve(num * num), 10);
    });
  };

  test('should asynchronously map over an array and return results', async () => {
    const arr = [1, 2, 3];
    const expected = [1, 4, 9];
    const result = await mapAsync(arr, asyncSquare);
    expect(result).toEqual(expected);
  });

  test('should maintain order of results', async () => {
    const arr = [3, 1, 2];
    const expected = [9, 1, 4];
    const result = await mapAsync(arr, asyncSquare);
    expect(result).toEqual(expected);
  });

  test('should work with empty arrays', async () => {
    const arr = [];
    const result = await mapAsync(arr, asyncSquare);
    expect(result).toEqual([]);
  });

  test('should pass index and array to the callback', async () => {
    const arr = ['a', 'b', 'c'];
    const mockCallback = jest.fn(async (val, idx) => `${val}-${idx}`);
    const result = await mapAsync(arr, mockCallback);

    expect(mockCallback).toHaveBeenCalledTimes(3);
    expect(mockCallback).toHaveBeenCalledWith('a', 0, arr);
    expect(mockCallback).toHaveBeenCalledWith('b', 1, arr);
    expect(mockCallback).toHaveBeenCalledWith('c', 2, arr);
    expect(result).toEqual(['a-0', 'b-1', 'c-2']);
  });

  test('should throw an error if the first argument is not an array', async () => {
    await expect(mapAsync(null, asyncSquare)).rejects.toThrow(TypeError);
    await expect(mapAsync('string', asyncSquare)).rejects.toThrow(TypeError);
  });

  test('should throw an error if the callback is not a function', async () => {
    await expect(mapAsync([1, 2], null)).rejects.toThrow(TypeError);
    await expect(mapAsync([1, 2], 'not-a-function')).rejects.toThrow(TypeError);
  });
});
