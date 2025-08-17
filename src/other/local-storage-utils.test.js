import { setLocalStorage, getLocalStorage } from './local-storage-utils.js';

describe('localStorageUtils', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('setLocalStorage', () => {
    it('should set a value in local storage', () => {
      setLocalStorage('testKey', 'testValue');
      expect(localStorage.getItem('testKey')).toBe(JSON.stringify('testValue'));
    });

    it('should set an object in local storage', () => {
      const testObject = { a: 1, b: '2' };
      setLocalStorage('testObject', testObject);
      expect(localStorage.getItem('testObject')).toBe(JSON.stringify(testObject));
    });
  });

  describe('getLocalStorage', () => {
    it('should get a value from local storage', () => {
      localStorage.setItem('testKey', JSON.stringify('testValue'));
      expect(getLocalStorage('testKey')).toBe('testValue');
    });

    it('should get an object from local storage', () => {
      const testObject = { a: 1, b: '2' };
      localStorage.setItem('testObject', JSON.stringify(testObject));
      expect(getLocalStorage('testObject')).toEqual(testObject);
    });

    it('should return null if the key does not exist', () => {
      expect(getLocalStorage('nonExistentKey')).toBeNull();
    });
  });
});
