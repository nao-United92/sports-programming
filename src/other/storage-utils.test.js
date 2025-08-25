const { setItem, getItem, removeItem, clearStorage } = require('./storage-utils.js');

describe('Storage Utilities', () => {
  let mockStorage;

  beforeEach(() => {
    mockStorage = {};
    mockStorage.setItem = jest.fn((key, value) => (mockStorage[key] = value));
    mockStorage.getItem = jest.fn((key) => mockStorage[key]);
    mockStorage.removeItem = jest.fn((key) => delete mockStorage[key]);
    mockStorage.clear = jest.fn(() => {
      for (const key in mockStorage) {
        if (mockStorage.hasOwnProperty(key)) {
          delete mockStorage[key];
        }
      }
    });
  });

  describe('setItem', () => {
    it('should store a string value', () => {
      setItem(mockStorage, 'key1', 'value1');
      expect(mockStorage.setItem).toHaveBeenCalledWith('key1', '"value1"');
    });

    it('should store an object as a JSON string', () => {
      const obj = { name: 'test', id: 123 };
      setItem(mockStorage, 'key2', obj);
      expect(mockStorage.setItem).toHaveBeenCalledWith('key2', JSON.stringify(obj));
    });

    it('should store an array as a JSON string', () => {
      const arr = [1, 2, 3];
      setItem(mockStorage, 'key3', arr);
      expect(mockStorage.setItem).toHaveBeenCalledWith('key3', JSON.stringify(arr));
    });

    it('should handle errors during setItem', () => {
      const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
      mockStorage.setItem.mockImplementationOnce(() => {
        throw new Error('Quota exceeded');
      });
      setItem(mockStorage, 'key4', 'value4');
      expect(spy).toHaveBeenCalledWith(expect.stringContaining('Error setting item'));
      spy.mockRestore();
    });
  });

  describe('getItem', () => {
    it('should retrieve a string value', () => {
      mockStorage.key1 = '"value1"';
      expect(getItem(mockStorage, 'key1')).toBe('value1');
    });

    it('should retrieve an object and parse it', () => {
      const obj = { name: 'test', id: 123 };
      mockStorage.key2 = JSON.stringify(obj);
      expect(getItem(mockStorage, 'key2')).toEqual(obj);
    });

    it('should return null if item not found', () => {
      expect(getItem(mockStorage, 'nonExistentKey')).toBeNull();
    });

    it('should handle errors during getItem (e.g., malformed JSON)', () => {
      const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
      mockStorage.key5 = 'not a valid json';
      expect(getItem(mockStorage, 'key5')).toBeNull();
      expect(spy).toHaveBeenCalledWith(expect.stringContaining('Error getting item'));
      spy.mockRestore();
    });
  });

  describe('removeItem', () => {
    it('should remove an item', () => {
      mockStorage.key1 = 'value1';
      removeItem(mockStorage, 'key1');
      expect(mockStorage.key1).toBeUndefined();
      expect(mockStorage.removeItem).toHaveBeenCalledWith('key1');
    });

    it('should handle errors during removeItem', () => {
      const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
      mockStorage.removeItem.mockImplementationOnce(() => {
        throw new Error('Permission denied');
      });
      removeItem(mockStorage, 'key6');
      expect(spy).toHaveBeenCalledWith(expect.stringContaining('Error removing item'));
      spy.mockRestore();
    });
  });

  describe('clearStorage', () => {
    it('should clear all items from storage', () => {
      mockStorage.key1 = 'value1';
      mockStorage.key2 = 'value2';
      clearStorage(mockStorage);
      expect(mockStorage.key1).toBeUndefined();
      expect(mockStorage.key2).toBeUndefined();
      expect(mockStorage.clear).toHaveBeenCalledTimes(1);
    });

    it('should handle errors during clearStorage', () => {
      const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
      mockStorage.clear.mockImplementationOnce(() => {
        throw new Error('Clear failed');
      });
      clearStorage(mockStorage);
      expect(spy).toHaveBeenCalledWith(expect.stringContaining('Error clearing storage'));
      spy.mockRestore();
    });
  });
});