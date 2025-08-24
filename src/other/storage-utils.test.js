import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
} from './storage-utils.js';

// Mock localStorage and sessionStorage for Jest
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: key => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: key => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

const sessionStorageMock = (() => {
  let store = {};
  return {
    getItem: key => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: key => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
Object.defineProperty(window, 'sessionStorage', { value: sessionStorageMock });

describe('Web Storage Utilities', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  describe('localStorage', () => {
    it('should set and get a string', () => {
      setLocalStorage('name', 'John');
      expect(getLocalStorage('name')).toBe('John');
    });

    it('should set and get an object', () => {
      const user = { name: 'John', age: 30 };
      setLocalStorage('user', user);
      expect(getLocalStorage('user')).toEqual(user);
    });

    it('should remove an item', () => {
      setLocalStorage('name', 'John');
      removeLocalStorage('name');
      expect(getLocalStorage('name')).toBeNull();
    });

    it('should return null for a non-existent key', () => {
      expect(getLocalStorage('non-existent')).toBeNull();
    });
  });

  describe('sessionStorage', () => {
    it('should set and get a string', () => {
      setSessionStorage('name', 'Jane');
      expect(getSessionStorage('name')).toBe('Jane');
    });

    it('should set and get an object', () => {
      const user = { name: 'Jane', age: 25 };
      setSessionStorage('user', user);
      expect(getSessionStorage('user')).toEqual(user);
    });

    it('should remove an item', () => {
      setSessionStorage('name', 'Jane');
      removeSessionStorage('name');
      expect(getSessionStorage('name')).toBeNull();
    });

    it('should return null for a non-existent key', () => {
      expect(getSessionStorage('non-existent')).toBeNull();
    });
  });
});
