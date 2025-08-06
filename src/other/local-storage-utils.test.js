import { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem } from './local-storage-utils.js';

describe('localStorageUtils', () => {
  const MOCK_KEY = 'testKey';
  const MOCK_VALUE = 'testValue';
  const MOCK_OBJECT_VALUE = { name: 'test', id: 123 };

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  describe('setLocalStorageItem', () => {
    it('should set a string item in localStorage', () => {
      setLocalStorageItem(MOCK_KEY, MOCK_VALUE);
      expect(localStorage.getItem(MOCK_KEY)).toBe(JSON.stringify(MOCK_VALUE));
    });

    it('should set an object item in localStorage as a string', () => {
      setLocalStorageItem(MOCK_KEY, MOCK_OBJECT_VALUE);
      expect(localStorage.getItem(MOCK_KEY)).toBe(JSON.stringify(MOCK_OBJECT_VALUE));
    });

    it('should handle errors when setting item', () => {
      // Simulate localStorage being full or throwing an error
      jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new Error('Quota exceeded');
      });
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      setLocalStorageItem(MOCK_KEY, MOCK_VALUE);
      expect(consoleSpy).toHaveBeenCalledWith('Error setting local storage item:', expect.any(Error));

      consoleSpy.mockRestore();
      jest.restoreAllMocks();
    });
  });

  describe('getLocalStorageItem', () => {
    it('should get a string item from localStorage', () => {
      localStorage.setItem(MOCK_KEY, JSON.stringify(MOCK_VALUE));
      expect(getLocalStorageItem(MOCK_KEY)).toBe(MOCK_VALUE);
    });

    it('should get and parse an object item from localStorage', () => {
      localStorage.setItem(MOCK_KEY, JSON.stringify(MOCK_OBJECT_VALUE));
      expect(getLocalStorageItem(MOCK_KEY)).toEqual(MOCK_OBJECT_VALUE);
    });

    it('should return null if item does not exist', () => {
      expect(getLocalStorageItem('nonExistentKey')).toBeNull();
    });

    it('should handle errors when getting item', () => {
      jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
        throw new Error('Read error');
      });
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      expect(getLocalStorageItem(MOCK_KEY)).toBeNull();
      expect(consoleSpy).toHaveBeenCalledWith('Error getting local storage item:', expect.any(Error));

      consoleSpy.mockRestore();
      jest.restoreAllMocks();
    });

    it('should handle invalid JSON in localStorage', () => {
      localStorage.setItem(MOCK_KEY, 'invalid json');
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      expect(getLocalStorageItem(MOCK_KEY)).toBeNull();
      expect(consoleSpy).toHaveBeenCalledWith('Error getting local storage item:', expect.any(Error));

      consoleSpy.mockRestore();
    });
  });

  describe('removeLocalStorageItem', () => {
    it('should remove an item from localStorage', () => {
      localStorage.setItem(MOCK_KEY, MOCK_VALUE);
      removeLocalStorageItem(MOCK_KEY);
      expect(localStorage.getItem(MOCK_KEY)).toBeNull();
    });

    it('should handle errors when removing item', () => {
      jest.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {
        throw new Error('Remove error');
      });
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      removeLocalStorageItem(MOCK_KEY);
      expect(consoleSpy).toHaveBeenCalledWith('Error removing local storage item:', expect.any(Error));

      consoleSpy.mockRestore();
      jest.restoreAllMocks();
    });
  });
});
