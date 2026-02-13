import mergeWith from './object-merge-with';

describe('mergeWith', () => {
  test('should deeply merge objects with default behavior (no customizer)', () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2
      },
      d: [1, 2]
    };
    const obj2 = {
      b: {
        e: 3
      },
      f: 4,
      d: [3, 4]
    };
    const expected = {
      a: 1,
      b: {
        c: 2,
        e: 3
      },
      d: [1, 2, 3, 4], // Default array merge behavior (concat)
      f: 4
    };
    expect(mergeWith(obj1, obj2)).toEqual(expected);
  });

  test('should merge with a customizer that resolves conflicts', () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2
      }
    };
    const obj2 = {
      a: 10,
      b: {
        c: 20,
        d: 30
      },
      f: 4
    };
    const customizer = (objValue, srcValue, key) => {
      if (key === 'a') {
        return objValue + srcValue; // Sum 'a' values
      }
      if (key === 'c' && typeof objValue === 'number' && typeof srcValue === 'number') {
        return Math.max(objValue, srcValue); // Take max for 'c'
      }
    };
    const expected = {
      a: 11,
      b: {
        c: 20,
        d: 30
      },
      f: 4
    };
    expect(mergeWith(obj1, obj2, customizer)).toEqual(expected);
  });

  test('should handle customizer returning undefined to defer to default merge', () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2
      }
    };
    const obj2 = {
      a: 10,
      b: {
        d: 30
      }
    };
    const customizer = (objValue, srcValue, key) => {
      if (key === 'a') {
        return objValue + srcValue;
      }
      // Return undefined for 'b' and 'd' to let default merge handle it
    };
    const expected = {
      a: 11,
      b: {
        c: 2,
        d: 30
      }
    };
    expect(mergeWith(obj1, obj2, customizer)).toEqual(expected);
  });

  test('should handle customizer returning a non-undefined value to prevent deep merge', () => {
    const obj1 = {
      data: {
        id: 1,
        name: 'old'
      }
    };
    const obj2 = {
      data: {
        id: 2,
        name: 'new'
      }
    };
    const customizer = (objValue, srcValue, key) => {
      if (key === 'data') {
        return srcValue; // Replace 'data' object entirely
      }
    };
    const expected = {
      data: {
        id: 2,
        name: 'new'
      }
    };
    expect(mergeWith(obj1, obj2, customizer)).toEqual(expected);
  });

  test('should handle empty objects', () => {
    const obj1 = {};
    const obj2 = {
      a: 1
    };
    expect(mergeWith(obj1, obj2)).toEqual({
      a: 1
    });
    expect(mergeWith({
      a: 1
    }, {})).toEqual({
      a: 1
    });
    expect(mergeWith({}, {})).toEqual({});
  });

  test('should handle non-object inputs for target and source gracefully', () => {
    expect(mergeWith(null, {
      a: 1
    })).toEqual({
      a: 1
    });
    expect(mergeWith({
      a: 1
    }, null)).toEqual({
      a: 1
    });
    expect(mergeWith(undefined, {
      a: 1
    })).toEqual({
      a: 1
    });
    expect(mergeWith({
      a: 1
    }, undefined)).toEqual({
      a: 1
    });
    expect(mergeWith(1, {
      a: 1
    })).toEqual({
      a: 1
    });
  });

  test('should deeply merge arrays of objects', () => {
    const arr1 = [{
      id: 1,
      val: 'a'
    }, {
      id: 2,
      val: 'b'
    }];
    const arr2 = [{
      id: 2,
      val: 'c'
    }, {
      id: 3,
      val: 'd'
    }];
    // Default behavior is to concatenate arrays.
    // A customizer would be needed to merge objects within arrays by id.
    const expected = [{
      id: 1,
      val: 'a'
    }, {
      id: 2,
      val: 'b'
    }, {
      id: 2,
      val: 'c'
    }, {
      id: 3,
      val: 'd'
    }];
    expect(mergeWith({
      arr: arr1
    }, {
      arr: arr2
    })).toEqual({
      arr: expected
    });
  });
});
