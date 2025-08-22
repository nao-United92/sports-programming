import { camelCaseKeys, snakeCaseKeys } from './object-case-style-utils';

describe('camelCaseKeys', () => {
  it('should convert snake_case keys to camelCase', () => {
    const obj = { 'first_name': 'John', 'last_name': 'Doe' };
    expect(camelCaseKeys(obj)).toEqual({ firstName: 'John', lastName: 'Doe' });
  });

  it('should handle nested objects', () => {
    const obj = { 'user_info': { 'first_name': 'Jane' } };
    expect(camelCaseKeys(obj)).toEqual({ userInfo: { firstName: 'Jane' } });
  });

  it('should handle arrays of objects', () => {
    const obj = { 'user_list': [{ 'user_id': 1 }, { 'user_id': 2 }] };
    expect(camelCaseKeys(obj)).toEqual({ userList: [{ userId: 1 }, { userId: 2 }] });
  });

  it('should not modify non-object values', () => {
    expect(camelCaseKeys('a_string')).toBe('a_string');
    expect(camelCaseKeys(123)).toBe(123);
  });
});

describe('snakeCaseKeys', () => {
  it('should convert camelCase keys to snake_case', () => {
    const obj = { firstName: 'John', lastName: 'Doe' };
    expect(snakeCaseKeys(obj)).toEqual({ 'first_name': 'John', 'last_name': 'Doe' });
  });

  it('should handle nested objects', () => {
    const obj = { userInfo: { firstName: 'Jane' } };
    expect(snakeCaseKeys(obj)).toEqual({ 'user_info': { 'first_name': 'Jane' } });
  });

  it('should handle arrays of objects', () => {
    const obj = { userList: [{ userId: 1 }, { userId: 2 }] };
    expect(snakeCaseKeys(obj)).toEqual({ 'user_list': [{ 'user_id': 1 }, { 'user_id': 2 }] });
  });
});
