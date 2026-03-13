const flattenObjectCustom = require('./object-flatten-deep-custom');

describe('flattenObjectCustom', () => {
  const obj = {
    user: {
      name: 'John',
      address: {
        city: 'NY',
        zip: 10001,
      },
    },
    active: true,
  };

  test('flattens nested object with dot notation', () => {
    expect(flattenObjectCustom(obj)).toEqual({
      'user.name': 'John',
      'user.address.city': 'NY',
      'user.address.zip': 10001,
      'active': true,
    });
  });

  test('uses custom separator', () => {
    expect(flattenObjectCustom(obj, '_')).toEqual({
      user_name: 'John',
      user_address_city: 'NY',
      user_address_zip: 10001,
      active: true,
    });
  });

  test('respects max depth', () => {
    expect(flattenObjectCustom(obj, '.', 1)).toEqual({
      user: {
        name: 'John',
        address: {
          city: 'NY',
          zip: 10001,
        },
      },
      active: true,
    });
  });

  test('handles empty object', () => {
    expect(flattenObjectCustom({})).toEqual({});
  });
});
