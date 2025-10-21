const { setLocalStorageItem, getLocalStorageItem } = require('./storage-local-json-utils');

describe('localStorage JSON utilities', () => {
  const MOCK_KEY = 'testKey';
  const MOCK_VALUE = { name: 'Test', age: 30, isActive: true };
  const MOCK_PRIMITIVE = 'testString';

  // Mock localStorage before each test
  beforeEach(() => {
    Storage.prototype.setItem = jest.fn((key, value) => {
      this[key] = value;
    });
    Storage.prototype.getItem = jest.fn((key) => this[key] || null);
    Storage.prototype.removeItem = jest.fn((key) => {
      delete this[key];
    });
    Storage.prototype.clear = jest.fn(() => {
      for (const key in this) {
        if (this.hasOwnProperty(key)) {
          delete this[key];
        }
      }
    });

    // Clear mock storage before each test
    localStorage.clear();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('setLocalStorageItem', () => {
    it('should store an object as a JSON string', () => {
      setLocalStorageItem(MOCK_KEY, MOCK_VALUE);
      expect(localStorage.setItem).toHaveBeenCalledWith(MOCK_KEY, JSON.stringify(MOCK_VALUE));
    });

    it('should store a primitive value as a JSON string', () => {
      setLocalStorageItem(MOCK_KEY, MOCK_PRIMITIVE);
      expect(localStorage.setItem).toHaveBeenCalledWith(MOCK_KEY, JSON.stringify(MOCK_PRIMITIVE));
    });

    it('should return true on successful storage', () => {
      expect(setLocalStorageItem(MOCK_KEY, MOCK_VALUE)).toBe(true);
    });

    it('should return false and log an error if localStorage.setItem fails', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      localStorage.setItem.mockImplementation(() => {
        throw new Error('Quota exceeded');
      });

      expect(setLocalStorageItem(MOCK_KEY, MOCK_VALUE)).toBe(false);
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });
  });

  describe('getLocalStorageItem', () => {
    it('should retrieve and parse a stored JSON object', () => {
      localStorage.setItem(MOCK_KEY, JSON.stringify(MOCK_VALUE));
      expect(getLocalStorageItem(MOCK_KEY)).toEqual(MOCK_VALUE);
    });

    it('should retrieve and parse a stored primitive value', () => {
      localStorage.setItem(MOCK_KEY, JSON.stringify(MOCK_PRIMITIVE));
      expect(getLocalStorageItem(MOCK_KEY)).toBe(MOCK_PRIMITIVE);
    });

    it('should return undefined for a non-existent key', () => {
      expect(getLocalStorageItem('nonExistentKey')).toBeUndefined();
    });

    it('should return undefined and log an error if stored value is invalid JSON', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      localStorage.setItem(MOCK_KEY, 'invalid json');

      expect(getLocalStorageItem(MOCK_KEY)).toBeUndefined();
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });

    it('should return undefined and log an error if localStorage.getItem fails', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      localStorage.getItem.mockImplementation(() => {
        throw new Error('Read error');
      });

      expect(getLocalStorageItem(MOCK_KEY)).toBeUndefined();
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });
  });
});
