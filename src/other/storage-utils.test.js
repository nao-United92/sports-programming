const {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
} = require('./storage-utils.js');

// Mock localStorage and sessionStorage
const createStorageMock = () => {
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
};

global.localStorage = createStorageMock();
global.sessionStorage = createStorageMock();

describe('Storage Utilities', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  describe('localStorage', () => {
    it('should set and get a value from localStorage', () => {
      setLocalStorage('testKey', { a: 1 });
      expect(getLocalStorage('testKey')).toEqual({ a: 1 });
    });

    it('should remove a value from localStorage', () => {
      setLocalStorage('testKey', 'testValue');
      removeLocalStorage('testKey');
      expect(getLocalStorage('testKey')).toBeNull();
    });
  });

  describe('sessionStorage', () => {
    it('should set and get a value from sessionStorage', () => {
      setSessionStorage('testKey', { b: 2 });
      expect(getSessionStorage('testKey')).toEqual({ b: 2 });
    });

    it('should remove a value from sessionStorage', () => {
      setSessionStorage('testKey', 'testValue');
      removeSessionStorage('testKey');
      expect(getSessionStorage('testKey')).toBeNull();
    });
  });
});
