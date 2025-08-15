import {
  setItem,
  getItem,
  removeItem,
  setItemWithExpiry,
  getItemWithExpiry,
} from './local-storage-utils.js';

describe('LocalStorage Utils', () => {
  beforeEach(() => {
    window.localStorage.clear();
    jest.clearAllMocks();
  });

  describe('setItem and getItem', () => {
    test('should set and get a string value', () => {
      setItem('testKey', 'testValue');
      expect(getItem('testKey')).toBe('testValue');
    });

    test('should set and get an object value', () => {
      const testObject = { a: 1, b: 'hello' };
      setItem('testObject', testObject);
      expect(getItem('testObject')).toEqual(testObject);
    });

    test('getItem should return null for a non-existent key', () => {
      expect(getItem('nonExistentKey')).toBeNull();
    });
  });

  describe('removeItem', () => {
    test('should remove an item from localStorage', () => {
      setItem('testKey', 'testValue');
      removeItem('testKey');
      expect(getItem('testKey')).toBeNull();
    });
  });

  describe('setItemWithExpiry and getItemWithExpiry', () => {
    test('should set and get an item before it expires', () => {
      setItemWithExpiry('expiringKey', 'expiringValue', 1000); // 1 second expiry
      expect(getItemWithExpiry('expiringKey')).toBe('expiringValue');
    });

    test('should return null for an expired item', () => {
      jest.useFakeTimers();
      setItemWithExpiry('expiringKey', 'expiringValue', 1000);
      
      jest.advanceTimersByTime(1001);

      expect(getItemWithExpiry('expiringKey')).toBeNull();
      jest.useRealTimers();
    });

    test('should remove the item from localStorage after it expires', () => {
      jest.useFakeTimers();
      setItemWithExpiry('expiringKey', 'expiringValue', 1000);
      
      jest.advanceTimersByTime(1001);

      getItemWithExpiry('expiringKey'); // This call should trigger removal
      expect(window.localStorage.getItem('expiringKey')).toBeNull();
      jest.useRealTimers();
    });
  });
});