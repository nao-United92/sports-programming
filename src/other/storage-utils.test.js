import { setLocalStorage, getLocalStorage } from './storage-utils.js';

// Mock localStorage for the Jest environment
const localStorageMock = (() => {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key) {
      delete store[key];
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('LocalStorage Utilities', () => {

  beforeEach(() => {
    localStorage.clear();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    console.error.mockRestore();
  });

  describe('setLocalStorage', () => {
    it('should store a string value', () => {
      setLocalStorage('myKey', 'myValue');
      expect(localStorage.getItem('myKey')).toBe(JSON.stringify('myValue'));
    });

    it('should store an object value by serializing it', () => {
      const myObj = { a: 1, b: 'test' };
      setLocalStorage('myObj', myObj);
      expect(localStorage.getItem('myObj')).toBe(JSON.stringify(myObj));
    });

    it('should return true on success', () => {
      expect(setLocalStorage('key', 'value')).toBe(true);
    });

    it('should return false and log an error if storing fails', () => {
      // Simulate a full storage by making JSON.stringify throw
      const circularObj = {};
      circularObj.a = circularObj;
      expect(setLocalStorage('circular', circularObj)).toBe(false);
      expect(console.error).toHaveBeenCalled();
    });
  });

  describe('getLocalStorage', () => {
    it('should retrieve a stored string value', () => {
      localStorage.setItem('myKey', JSON.stringify('myValue'));
      expect(getLocalStorage('myKey')).toBe('myValue');
    });

    it('should retrieve and deserialize an object value', () => {
      const myObj = { a: 1, b: 'test' };
      localStorage.setItem('myObj', JSON.stringify(myObj));
      expect(getLocalStorage('myObj')).toEqual(myObj);
    });

    it('should return null if the key does not exist', () => {
      expect(getLocalStorage('nonExistentKey')).toBeNull();
    });

    it('should return null and log an error if parsing fails', () => {
      localStorage.setItem('invalidJson', '{');
      expect(getLocalStorage('invalidJson')).toBeNull();
      expect(console.error).toHaveBeenCalled();
    });
  });
});
