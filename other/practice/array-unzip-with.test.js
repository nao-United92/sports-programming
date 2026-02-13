import unzipWith from './array-unzip-with';

describe('unzipWith', () => {
  test('should unzip arrays and apply the iteratee function', () => {
    const zipped = [
      [1, 'a', true],
      [2, 'b', false],
      [3, 'c', true],
    ];
    // The iteratee now expects arguments from the transposed "columns"
    const iteratee = (val1, val2, val3) => `${val1}-${val2}-${val3 ? 'T' : 'F'}`;
    // Original array was [[1, 'a', true], [2, 'b', false], [3, 'c', true]]
    // Transposed columns are:
    // [1, 2, 3]
    // ['a', 'b', 'c']
    // [true, false, true]
    // Applying iteratee to these columns:
    // iteratee(1, 2, 3) => "1-2-T" (3 is truthy)
    // iteratee('a', 'b', 'c') => "a-b-T" ('c' is truthy)
    // iteratee(true, false, true) => "true-false-T" (true is truthy)
    const expected = ['1-2-T', 'a-b-T', 'true-false-T'];
    expect(unzipWith(zipped, iteratee)).toEqual(expected);
  });

  test('should work with default iteratee (Array constructor) if not provided', () => {
    const zipped = [
      [1, 2, 3],
      ['a', 'b', 'c']
    ];
    expect(unzipWith(zipped)).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c']
    ]);
  });

  test('should handle arrays of different lengths, filling with undefined', () => {
    const zipped = [
      [1, 'a'],
      [2, 'b', false],
      [3]
    ];
    // Transposed columns (with undefined for missing elements):
    // [1, 2, 3]
    // ['a', 'b', undefined]
    // [undefined, false, undefined]
    const iteratee = (...args) => args.join('-');
    const expected = ['1-2-3', 'a-b-', '-false-'];
    expect(unzipWith(zipped, iteratee)).toEqual(expected);
  });

  test('should handle empty input array', () => {
    expect(unzipWith([])).toEqual([]);
  });

  test('should handle array of empty arrays', () => {
    const zipped = [
      [],
      [],
      []
    ];
    expect(unzipWith(zipped)).toEqual([]);
  });

  test('should handle arrays with single inner array', () => {
    const zipped = [
      [1, 2, 3]
    ];
    expect(unzipWith(zipped)).toEqual([
      [1],
      [2],
      [3]
    ]);
  });

  test('should handle arrays with null or undefined values', () => {
    const zipped = [
      [1, null],
      [undefined, 'b']
    ];
    expect(unzipWith(zipped)).toEqual([
      [1, undefined],
      [null, 'b']
    ]);
  });
});
