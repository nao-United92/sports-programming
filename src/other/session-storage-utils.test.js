import { setSessionStorage, getSessionStorage } from './session-storage-utils.js';

describe('sessionStorageUtils', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  describe('setSessionStorage', () => {
    it('should set a value in session storage', () => {
      setSessionStorage('testKey', 'testValue');
      expect(sessionStorage.getItem('testKey')).toBe(JSON.stringify('testValue'));
    });

    it('should set an object in session storage', () => {
      const testObject = { a: 1, b: '2' };
      setSessionStorage('testObject', testObject);
      expect(sessionStorage.getItem('testObject')).toBe(JSON.stringify(testObject));
    });
  });

  describe('getSessionStorage', () => {
    it('should get a value from session storage', () => {
      sessionStorage.setItem('testKey', JSON.stringify('testValue'));
      expect(getSessionStorage('testKey')).toBe('testValue');
    });

    it('should get an object from session storage', () => {
      const testObject = { a: 1, b: '2' };
      sessionStorage.setItem('testObject', JSON.stringify(testObject));
      expect(getSessionStorage('testObject')).toEqual(testObject);
    });

    it('should return null if the key does not exist', () => {
      expect(getSessionStorage('nonExistentKey')).toBeNull();
    });
  });
});
