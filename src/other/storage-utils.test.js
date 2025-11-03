import { setLocalStorage, getLocalStorage, removeLocalStorage } from './storage-utils.js';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString(); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { store = {}; }
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('Storage Utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should set and get a string', () => {
    setLocalStorage('myKey', 'myValue');
    expect(getLocalStorage('myKey')).toBe('myValue');
  });

  test('should set and get an object', () => {
    const myObj = { a: 1, b: 'test' };
    setLocalStorage('myObj', myObj);
    expect(getLocalStorage('myObj')).toEqual(myObj);
  });

  test('should return null for a non-existent key', () => {
    expect(getLocalStorage('nonExistent')).toBeNull();
  });

  test('should remove a key', () => {
    setLocalStorage('toRemove', 'value');
    removeLocalStorage('toRemove');
    expect(getLocalStorage('toRemove')).toBeNull();
  });
});