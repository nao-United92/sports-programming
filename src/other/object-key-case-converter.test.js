import { keysToCamel, keysToSnake } from './object-key-case-converter.js';

describe('object-key-case-converter', () => {
  describe('keysToCamel', () => {
    it('should convert snake_case keys to camelCase', () => {
      const snakeCase = {
        first_name: 'John',
        last_name: 'Doe',
        user_details: {
          phone_number: '123-456-7890'
        }
      };
      const camelCase = {
        firstName: 'John',
        lastName: 'Doe',
        userDetails: {
          phoneNumber: '123-456-7890'
        }
      };
      expect(keysToCamel(snakeCase)).toEqual(camelCase);
    });

    it('should handle arrays of objects', () => {
        const snakeArray = [{first_name: 'Jane'}, {first_name: 'John'}];
        const camelArray = [{firstName: 'Jane'}, {firstName: 'John'}];
        expect(keysToCamel(snakeArray)).toEqual(camelArray);
    });
  });

  describe('keysToSnake', () => {
    it('should convert camelCase keys to snake_case', () => {
      const camelCase = {
        firstName: 'John',
        lastName: 'Doe',
        userDetails: {
          phoneNumber: '123-456-7890'
        }
      };
      const snakeCase = {
        first_name: 'John',
        last_name: 'Doe',
        user_details: {
          phone_number: '123-456-7890'
        }
      };
      expect(keysToSnake(camelCase)).toEqual(snakeCase);
    });

    it('should handle arrays of objects', () => {
        const camelArray = [{firstName: 'Jane'}, {firstName: 'John'}];
        const snakeArray = [{first_name: 'Jane'}, {first_name: 'John'}];
        expect(keysToSnake(camelArray)).toEqual(snakeArray);
    });
  });
});