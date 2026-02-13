import deepOmit from './object-deep-omit';

describe('deepOmit', () => {
  const originalObject = Object.freeze({
    id: 1,
    name: 'Test Product',
    details: {
      price: 100,
      currency: 'USD',
      internal: {
        sku: 'SKU123',
        cost: 50,
        supplierId: 'SUP001'
      }
    },
    tags: ['A', 'B', 'C'],
    metadata: [{
      key: 'color',
      value: 'blue'
    }, {
      key: 'weight',
      value: '1kg'
    }],
    secret: 'hidden_value',
    nullValue: null,
    undefinedValue: undefined,
  });

  test('should omit a top-level key', () => {
    const omitted = deepOmit(originalObject, ['secret']);
    expect(omitted).not.toHaveProperty('secret');
    expect(omitted).toEqual({
      id: 1,
      name: 'Test Product',
      details: originalObject.details,
      tags: originalObject.tags,
      metadata: originalObject.metadata,
      nullValue: null,
      undefinedValue: undefined,
    });
    expect(omitted).not.toBe(originalObject);
    expect(originalObject).toHaveProperty('secret'); // Original not mutated
  });

  test('should omit a nested key', () => {
    const omitted = deepOmit(originalObject, ['cost']);
    expect(omitted.details.internal).not.toHaveProperty('cost');
    expect(omitted).toEqual({
      id: 1,
      name: 'Test Product',
      details: {
        price: 100,
        currency: 'USD',
        internal: {
          sku: 'SKU123',
          supplierId: 'SUP001'
        }
      },
      tags: originalObject.tags,
      metadata: originalObject.metadata,
      secret: 'hidden_value',
      nullValue: null,
      undefinedValue: undefined,
    });
    expect(omitted.details.internal).not.toBe(originalObject.details.internal); // Nested object is cloned
    expect(originalObject.details.internal).toHaveProperty('cost'); // Original not mutated
  });

  test('should omit multiple keys', () => {
    const omitted = deepOmit(originalObject, ['id', 'cost', 'supplierId']);
    expect(omitted).not.toHaveProperty('id');
    expect(omitted.details.internal).not.toHaveProperty('cost');
    expect(omitted.details.internal).not.toHaveProperty('supplierId');
  });

  test('should handle arrays of objects recursively', () => {
    const omitted = deepOmit(originalObject, ['key']);
    expect(omitted.metadata[0]).not.toHaveProperty('key');
    expect(omitted.metadata[0]).toEqual({
      value: 'blue'
    });
    expect(omitted.metadata).not.toBe(originalObject.metadata);
    expect(originalObject.metadata[0]).toHaveProperty('key'); // Original not mutated
  });

  test('should return the original value for primitives', () => {
    expect(deepOmit(123, ['foo'])).toBe(123);
    expect(deepOmit('string', ['foo'])).toBe('string');
    expect(deepOmit(null, ['foo'])).toBe(null);
    expect(deepOmit(undefined, ['foo'])).toBe(undefined);
  });

  test('should handle empty keysToOmit array', () => {
    const omitted = deepOmit(originalObject, []);
    expect(omitted).toEqual(originalObject);
    expect(omitted).not.toBe(originalObject); // Still a new object
  });

  test('should handle empty object input', () => {
    expect(deepOmit({}, ['foo'])).toEqual({});
  });
});
