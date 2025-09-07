import { validate } from './validation-schema-utils.js';

describe('Schema Validation Utility', () => {
  test('should validate required fields', () => {
    const schema = {
      name: { required: true, type: 'string' },
      age: { required: true, type: 'number' },
    };
    const data = { name: 'John Doe' };
    const errors = validate(data, schema);
    expect(errors).toEqual({ age: 'age is required' });
  });

  test('should validate data types', () => {
    const schema = {
      name: { type: 'string' },
      age: { type: 'number' },
    };
    const data = { name: 123, age: 'twenty' };
    const errors = validate(data, schema);
    expect(errors).toEqual({
      name: 'name must be a string',
      age: 'age must be a number',
    });
  });

  test('should validate string length', () => {
    const schema = {
      username: { minLength: 5, maxLength: 10 },
    };
    const data = { username: 'john' };
    const errors = validate(data, schema);
    expect(errors).toEqual({ username: 'username must be at least 5 characters long' });

    const data2 = { username: 'john_doe_long' };
    const errors2 = validate(data2, schema);
    expect(errors2).toEqual({ username: 'username must be at most 10 characters long' });
  });

  test('should validate number range', () => {
    const schema = {
      score: { min: 0, max: 100 },
    };
    const data = { score: -10 };
    const errors = validate(data, schema);
    expect(errors).toEqual({ score: 'score must be at least 0' });

    const data2 = { score: 110 };
    const errors2 = validate(data2, schema);
    expect(errors2).toEqual({ score: 'score must be at most 100' });
  });

  test('should validate with custom validator', () => {
    const schema = {
      email: {
        validator: (value) => value.includes('@'),
        message: 'email must contain @',
      },
    };
    const data = { email: 'invalid-email' };
    const errors = validate(data, schema);
    expect(errors).toEqual({ email: 'email must contain @' });
  });

  test('should return empty object for valid data', () => {
    const schema = {
      name: { required: true, type: 'string' },
      age: { type: 'number', min: 18 },
    };
    const data = { name: 'Jane Doe', age: 25 };
    const errors = validate(data, schema);
    expect(errors).toEqual({});
  });

  test('should handle missing optional fields', () => {
    const schema = {
      name: { required: true, type: 'string' },
      age: { type: 'number' },
    };
    const data = { name: 'Jane Doe' };
    const errors = validate(data, schema);
    expect(errors).toEqual({});
  });
});
