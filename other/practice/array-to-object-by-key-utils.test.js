import { toObjectByKey } from './array-to-object-by-key-utils';

describe('toObjectByKey', () => {
  const users = [{
    id: 1,
    name: 'Alice'
  }, {
    id: 2,
    name: 'Bob'
  }, {
    id: 3,
    name: 'Charlie'
  }, ];

  const products = [{
    sku: 'A123',
    name: 'Laptop'
  }, {
    sku: 'B456',
    name: 'Mouse'
  }, {
    sku: 'A123',
    name: 'External Monitor'
  }, // Duplicate SKU
  ];

  test('should convert an array of objects to an object using a specified key', () => {
    const result = toObjectByKey(users, 'id');
    expect(result).toEqual({
      '1': {
        id: 1,
        name: 'Alice'
      },
      '2': {
        id: 2,
        name: 'Bob'
      },
      '3': {
        id: 3,
        name: 'Charlie'
      },
    });
  });

  test('should handle duplicate keys, with the last one winning', () => {
    const result = toObjectByKey(products, 'sku');
    expect(result).toEqual({
      'A123': {
        sku: 'A123',
        name: 'External Monitor'
      },
      'B456': {
        sku: 'B456',
        name: 'Mouse'
      },
    });
  });

  test('should handle objects missing the keyName property', () => {
    const mixedArray = [{
      id: 1,
      name: 'Alice'
    }, {
      name: 'Bob'
    }, // Missing id
    ];
    const result = toObjectByKey(mixedArray, 'id');
    expect(result).toEqual({
      '1': {
        id: 1,
        name: 'Alice'
      }
    });
  });

  test('should handle empty array', () => {
    expect(toObjectByKey([], 'id')).toEqual({});
  });

  test('should not modify original array or objects', () => {
    const originalUsers = JSON.parse(JSON.stringify(users));
    toObjectByKey(originalUsers, 'id');
    expect(originalUsers).toEqual(users);
  });

  test('should throw an error if array is not an array', () => {
    expect(() => toObjectByKey(null, 'id')).toThrow('Expected an array');
    expect(() => toObjectByKey({}, 'id')).toThrow('Expected an array');
  });

  test('should throw an error if keyName is not a non-empty string', () => {
    expect(() => toObjectByKey(users, null)).toThrow('Expected a non-empty string for keyName');
    expect(() => toObjectByKey(users, '')).toThrow('Expected a non-empty string for keyName');
    expect(() => toObjectByKey(users, 123)).toThrow('Expected a non-empty string for keyName');
  });
});
