import { uniqueDeep } from './array-unique-deep-utils';

describe('uniqueDeep', () => {
  test('should remove duplicate objects based on deep equality', () => {
    const arr = [{
      a: 1,
      b: {
        c: 2
      }
    }, {
      a: 1,
      b: {
        c: 3
      }
    }, {
      a: 1,
      b: {
        c: 2
      }
    }, {
      a: 2
    }, ];
    const expected = [{
      a: 1,
      b: {
        c: 2
      }
    }, {
      a: 1,
      b: {
        c: 3
      }
    }, {
      a: 2
    }, ];
    expect(uniqueDeep(arr)).toEqual(expected);
  });

  test('should handle arrays with primitive values (behaves like basic unique)', () => {
    const arr = [1, 2, 3, 2, 1, 'a', 'b', 'a'];
    expect(uniqueDeep(arr)).toEqual([1, 2, 3, 'a', 'b']);
  });

  test('should handle nested objects', () => {
    const arr = [{
      id: 1,
      data: {
        value: 'A'
      }
    }, {
      id: 2,
      data: {
        value: 'B'
      }
    }, {
      id: 1,
      data: {
        value: 'A'
      }
    }, ];
    const expected = [{
      id: 1,
      data: {
        value: 'A'
      }
    }, {
      id: 2,
      data: {
        value: 'B'
      }
    }, ];
    expect(uniqueDeep(arr)).toEqual(expected);
  });

  test('should handle empty array', () => {
    expect(uniqueDeep([])).toEqual([]);
  });

  test('should not modify original array or objects', () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2
      }
    };
    const obj2 = {
      a: 1,
      b: {
        c: 2
      }
    };
    const originalArr = [obj1, obj2];
    uniqueDeep(originalArr);
    expect(originalArr[0]).toBe(obj1);
    expect(originalArr[1]).toBe(obj2);
  });

  test('should throw an error if input is not an array', () => {
    expect(() => uniqueDeep(null)).toThrow('Expected an array');
    expect(() => uniqueDeep({})).toThrow('Expected an array');
  });

  test('should distinguish between objects with same keys but different values', () => {
    const arr = [{
      x: 1,
      y: 2
    }, {
      x: 1,
      y: 3
    }];
    expect(uniqueDeep(arr)).toEqual(arr);
  });
});
