import { localStorageUtils } from './browser-local-storage-utils.js';

// Mock localStorage for testing in a Node.js environment
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(global, 'localStorage', { value: localStorageMock });

describe('localStorageUtils', () => {
  beforeEach(() => {
    localStorageUtils.clear(); // Clear localStorage before each test
  });

  test('should set and get a string item', () => {
    localStorageUtils.set('testString', 'hello');
    expect(localStorageUtils.get('testString')).toBe('hello');
  });

  test('should set and get an object item', () => {
    const obj = { name: 'test', value: 123 };
    localStorageUtils.set('testObject', obj);
    expect(localStorageUtils.get('testObject')).toEqual(obj);
  });

  test('should set and get an array item', () => {
    const arr = [1, 2, 3];
    localStorageUtils.set('testArray', arr);
    expect(localStorageUtils.get('testArray')).toEqual(arr);
  });

  test('should return null for a non-existent item', () => {
    expect(localStorageUtils.get('nonExistent')).toBeNull();
  });

  test('should remove an item', () => {
    localStorageUtils.set('toRemove', 'value');
    localStorageUtils.remove('toRemove');
    expect(localStorageUtils.get('toRemove')).toBeNull();
  });

  test('should clear all items', () => {
    localStorageUtils.set('item1', 'value1');
    localStorageUtils.set('item2', 'value2');
    localStorageUtils.clear();
    expect(localStorageUtils.get('item1')).toBeNull();
    expect(localStorageUtils.get('item2')).toBeNull();
  });

  // Simplified error handling tests
  test('should not throw error when setting item fails', () => {
    const originalSetItem = localStorageMock.setItem;
    localStorageMock.setItem = () => { throw new Error('Quota exceeded'); };
    expect(() => localStorageUtils.set('errorKey', 'largeValue')).not.toThrow();
    localStorageMock.setItem = originalSetItem; // Restore original
  });

  test('should return null when getting item fails', () => {
    const originalGetItem = localStorageMock.getItem;
    localStorageMock.getItem = () => { throw new Error('Read error'); };
    expect(localStorageUtils.get('errorKey')).toBeNull();
    localStorageMock.getItem = originalGetItem; // Restore original
  });
});
